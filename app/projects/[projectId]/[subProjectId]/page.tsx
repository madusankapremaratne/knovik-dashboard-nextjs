'use client';

import React, { useState, useMemo } from 'react';
import { useParams, useRouter } from 'next/navigation';
import {
  LineChart,
  Line,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts';
import {
  TrendingUp,
  DollarSign,
  Filter,
  ArrowLeft,
  ShoppingCart,
  Users,
  Percent,
} from 'lucide-react';
import StatCard from '@/components/StatCard';
import DateRangePicker from '@/components/DateRangePicker';
import {
  mockSubProjectMetrics,
  projects,
  subProjects,
} from '@/lib/mockData';
import { formatCurrency, getDateRange } from '@/lib/utils';

type PeriodType = 'yesterday' | 'last7days' | 'mtd' | 'lastMonth' | 'custom';

export default function SubProjectPage() {
  const params = useParams();
  const router = useRouter();
  const projectId = params.projectId as string;
  const subProjectId = params.subProjectId as string;

  const [period, setPeriod] = useState<PeriodType>('mtd');
  const [customDateRange, setCustomDateRange] = useState({
    startDate: new Date(new Date().setDate(1)),
    endDate: new Date(),
  });

  // Find current project and sub-project
  const project = projects.find((p) => p.id === projectId);
  const projectSubProjects = subProjects[projectId as keyof typeof subProjects] || [];
  const subProject = projectSubProjects.find((sp) => sp.id === subProjectId);

  if (!project || !subProject) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 p-8 text-white">
        Sub-project not found
      </div>
    );
  }

  // Get sub-project data
  const subProjectData = mockSubProjectMetrics[subProjectId] || [];

  // Filter data based on period
  const filteredData = useMemo(() => {
    const dateRange = getDateRange(period, customDateRange);
    return subProjectData.filter((item) => {
      const itemDate = new Date(item.date);
      return itemDate >= dateRange.start && itemDate <= dateRange.end;
    });
  }, [subProjectData, period, customDateRange]);

  // Calculate totals
  const totals = useMemo(() => {
    const metrics = filteredData.reduce(
      (acc, item) => {
        acc.revenue += item.revenue || 0;
        acc.orders += item.orders || 0;
        acc.visitors += item.visitors || 0;
        acc.conversions += item.conversions || 0;
        return acc;
      },
      { revenue: 0, orders: 0, visitors: 0, conversions: 0 }
    );

    const aov = metrics.orders > 0 ? metrics.revenue / metrics.orders : 0;
    const conversionRate = metrics.visitors > 0 ? (metrics.conversions / metrics.visitors) * 100 : 0;

    return { ...metrics, aov, conversionRate };
  }, [filteredData]);

  // Chart data
  const chartData = useMemo(() => {
    return filteredData.map((item) => ({
      date: new Date(item.date).toLocaleDateString('en-US', {
        month: 'short',
        day: 'numeric',
      }),
      Revenue: item.revenue || 0,
      Orders: item.orders || 0,
      Visitors: item.visitors || 0,
    }));
  }, [filteredData]);

  const handleDateRangeChange = (startDate: Date, endDate: Date) => {
    setCustomDateRange({ startDate, endDate });
    setPeriod('custom');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950">
      {/* Header */}
      <header className="sticky top-0 z-50 border-b border-slate-800 bg-slate-950/80 backdrop-blur-md">
        <div className="mx-auto max-w-7xl px-6 py-4 sm:px-8">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <button
                onClick={() => router.push(`/projects/${projectId}`)}
                className="rounded-lg bg-slate-800 p-2 text-slate-400 hover:bg-slate-700 hover:text-white transition-colors"
              >
                <ArrowLeft className="h-5 w-5" />
              </button>
              <div>
                <div className="flex items-center gap-2">
                  <span className="text-sm text-slate-400">{project.name}</span>
                  <span className="text-sm text-slate-600">/</span>
                  <h1 className="text-3xl font-bold text-white">{subProject.name}</h1>
                </div>
                <p className="text-sm text-slate-400">
                  {(subProject as any).category || (subProject as any).region}
                </p>
              </div>
            </div>
            <div
              className="h-12 w-12 rounded-lg"
              style={{ backgroundColor: project.color + '20', border: `2px solid ${project.color}` }}
            />
          </div>
        </div>
      </header>

      <main className="mx-auto max-w-7xl px-6 py-8 sm:px-8">
        {/* Period Selection */}
        <div className="mb-8 flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
          <div className="flex flex-wrap gap-2">
            {[
              { label: 'Yesterday', value: 'yesterday' as const },
              { label: 'Last 7 Days', value: 'last7days' as const },
              { label: 'Month to Date', value: 'mtd' as const },
              { label: 'Last Month', value: 'lastMonth' as const },
            ].map((item) => (
              <button
                key={item.value}
                onClick={() => setPeriod(item.value)}
                className={`rounded-lg px-4 py-2 font-medium transition-all duration-200 ${
                  period === item.value
                    ? 'bg-blue-600 text-white shadow-lg shadow-blue-500/50'
                    : 'bg-slate-800 text-slate-300 hover:bg-slate-700 hover:text-white'
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>

          <div className="flex items-center gap-2">
            <Filter className="h-5 w-5 text-slate-400" />
            <DateRangePicker
              startDate={customDateRange.startDate}
              endDate={customDateRange.endDate}
              onDateRangeChange={handleDateRangeChange}
            />
          </div>
        </div>

        {/* Key Metrics */}
        <div className="mb-8">
          <h2 className="mb-4 text-xl font-semibold text-white">Performance Metrics</h2>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
            <StatCard
              title="Total Revenue"
              value={formatCurrency(totals.revenue)}
              icon={<DollarSign className="h-6 w-6" />}
              trend={7.8}
              trendLabel="vs previous period"
              variant="primary"
            />
            <StatCard
              title="Total Orders"
              value={totals.orders.toLocaleString()}
              icon={<ShoppingCart className="h-6 w-6" />}
              trend={6.5}
              trendLabel="vs previous period"
              variant="secondary"
            />
            <StatCard
              title="Average Order Value"
              value={formatCurrency(totals.aov)}
              icon={<TrendingUp className="h-6 w-6" />}
              trend={1.2}
              trendLabel="vs previous period"
              variant="tertiary"
            />
            <StatCard
              title="Conversion Rate"
              value={`${totals.conversionRate.toFixed(2)}%`}
              icon={<Percent className="h-6 w-6" />}
              trend={4.7}
              trendLabel="vs previous period"
              variant="primary"
            />
          </div>
        </div>

        {/* Additional Metrics */}
        <div className="mb-8">
          <h2 className="mb-4 text-xl font-semibold text-white">Traffic & Engagement</h2>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            <StatCard
              title="Total Visitors"
              value={totals.visitors.toLocaleString()}
              icon={<Users className="h-6 w-6" />}
              trend={9.2}
              trendLabel="vs previous period"
              variant="secondary"
            />
            <StatCard
              title="Total Conversions"
              value={totals.conversions.toLocaleString()}
              icon={<TrendingUp className="h-6 w-6" />}
              trend={5.8}
              trendLabel="vs previous period"
              variant="tertiary"
            />
            <StatCard
              title="Revenue per Visitor"
              value={formatCurrency(totals.visitors > 0 ? totals.revenue / totals.visitors : 0)}
              icon={<DollarSign className="h-6 w-6" />}
              trend={3.4}
              trendLabel="vs previous period"
              variant="primary"
            />
          </div>
        </div>

        {/* Charts */}
        <div className="mb-8 grid grid-cols-1 gap-8 lg:grid-cols-2">
          {/* Revenue & Orders Trend */}
          <div className="rounded-2xl border border-slate-800 bg-slate-900/50 p-6 backdrop-blur-sm">
            <div className="mb-6">
              <h2 className="text-lg font-semibold text-white">Revenue & Orders</h2>
              <p className="text-sm text-slate-400">Daily performance metrics</p>
            </div>
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={chartData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#334155" />
                <XAxis dataKey="date" stroke="#64748b" style={{ fontSize: '12px' }} />
                <YAxis yAxisId="left" stroke="#64748b" style={{ fontSize: '12px' }} />
                <YAxis yAxisId="right" orientation="right" stroke="#64748b" style={{ fontSize: '12px' }} />
                <Tooltip
                  contentStyle={{
                    backgroundColor: '#1e293b',
                    border: '1px solid #475569',
                    borderRadius: '8px',
                  }}
                  formatter={(value, name) => {
                    if (name === 'Revenue') return formatCurrency(value as number);
                    return value;
                  }}
                />
                <Legend />
                <Line
                  yAxisId="left"
                  type="monotone"
                  dataKey="Revenue"
                  stroke={project.color}
                  strokeWidth={3}
                  dot={false}
                />
                <Line
                  yAxisId="right"
                  type="monotone"
                  dataKey="Orders"
                  stroke="#10B981"
                  strokeWidth={3}
                  dot={false}
                />
              </LineChart>
            </ResponsiveContainer>
          </div>

          {/* Visitors Trend */}
          <div className="rounded-2xl border border-slate-800 bg-slate-900/50 p-6 backdrop-blur-sm">
            <div className="mb-6">
              <h2 className="text-lg font-semibold text-white">Visitor Traffic</h2>
              <p className="text-sm text-slate-400">Daily visitor count</p>
            </div>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={chartData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#334155" />
                <XAxis dataKey="date" stroke="#64748b" style={{ fontSize: '12px' }} />
                <YAxis stroke="#64748b" style={{ fontSize: '12px' }} />
                <Tooltip
                  contentStyle={{
                    backgroundColor: '#1e293b',
                    border: '1px solid #475569',
                    borderRadius: '8px',
                  }}
                />
                <Legend />
                <Bar dataKey="Visitors" fill="#F59E0B" radius={[8, 8, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Footer */}
        <div className="mt-12 border-t border-slate-800 pt-6 text-center text-sm text-slate-500">
          <p>Last updated: {new Date().toLocaleString()}</p>
        </div>
      </main>
    </div>
  );
}
