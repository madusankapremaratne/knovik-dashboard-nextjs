'use client';

import React, { useState, useMemo } from 'react';
import {
  BarChart,
  Bar,
  LineChart,
  Line,
  PieChart,
  Pie,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts';
import {
  Calendar,
  TrendingUp,
  DollarSign,
  Filter,
  Download,
  Settings,
} from 'lucide-react';
import StatCard from '@/components/StatCard';
import DateRangePicker from '@/components/DateRangePicker';
import { mockIncomeData, mockProjectBreakdown } from '@/lib/mockData';
import { formatCurrency, getDateRange } from '@/lib/utils';

type PeriodType = 'yesterday' | 'last7days' | 'mtd' | 'lastMonth' | 'custom';

export default function Dashboard() {
  const [period, setPeriod] = useState<PeriodType>('mtd');
  const [customDateRange, setCustomDateRange] = useState({
    startDate: new Date(new Date().setDate(1)),
    endDate: new Date(),
  });

  // Calculate filtered data based on period
  const filteredData = useMemo(() => {
    const dateRange = getDateRange(period, customDateRange);
    const filtered = mockIncomeData.filter((item) => {
      const itemDate = new Date(item.date);
      return (
        itemDate >= dateRange.start && itemDate <= dateRange.end
      );
    });
    return filtered;
  }, [period, customDateRange]);

  // Calculate totals
  const totals = useMemo(() => {
    const total = filteredData.reduce((sum, item) => sum + item.total, 0);
    const shopify = filteredData.reduce((sum, item) => sum + item.shopify, 0);
    const woocommerce = filteredData.reduce(
      (sum, item) => sum + item.woocommerce,
      0
    );

    return { total, shopify, woocommerce };
  }, [filteredData]);

  // Calculate project breakdown
  const projectTotals = useMemo(() => {
    const projects = {
      autopal: 0,
      smartcey: 0,
      letilo: 0,
    };

    mockProjectBreakdown.forEach((item) => {
      const itemDate = new Date(item.date);
      const dateRange = getDateRange(period, customDateRange);
      if (itemDate >= dateRange.start && itemDate <= dateRange.end) {
        projects.autopal += item.autopal;
        projects.smartcey += item.smartcey;
        projects.letilo += item.letilo;
      }
    });

    return [
      { name: 'AutoPal', value: projects.autopal, fill: '#3B82F6' },
      { name: 'Smartcey', value: projects.smartcey, fill: '#10B981' },
      { name: 'Letilo', value: projects.letilo, fill: '#F59E0B' },
    ];
  }, [period, customDateRange]);

  const chartData = useMemo(() => {
    return filteredData.map((item) => ({
      date: new Date(item.date).toLocaleDateString('en-US', {
        month: 'short',
        day: 'numeric',
      }),
      Shopify: item.shopify,
      WooCommerce: item.woocommerce,
      Total: item.total,
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
            <div>
              <h1 className="text-3xl font-bold text-white">
                Knovik Owner Dashboard
              </h1>
              <p className="text-sm text-slate-400">
                Real-time income tracking across all projects
              </p>
            </div>
            <div className="flex items-center gap-4">
              <button className="rounded-lg bg-slate-800 p-2 text-slate-400 hover:bg-slate-700 hover:text-white transition-colors">
                <Download className="h-5 w-5" />
              </button>
              <button className="rounded-lg bg-slate-800 p-2 text-slate-400 hover:bg-slate-700 hover:text-white transition-colors">
                <Settings className="h-5 w-5" />
              </button>
            </div>
          </div>
        </div>
      </header>

      <main className="mx-auto max-w-7xl px-6 py-8 sm:px-8">
        {/* Period Selection and Date Range */}
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
        <div className="mb-8 grid grid-cols-1 gap-6 md:grid-cols-3">
          <StatCard
            title="Total Income"
            value={formatCurrency(totals.total)}
            icon={<DollarSign className="h-6 w-6" />}
            trend={12.5}
            trendLabel="vs previous period"
            variant="primary"
          />
          <StatCard
            title="Shopify Sales"
            value={formatCurrency(totals.shopify)}
            icon={<TrendingUp className="h-6 w-6" />}
            trend={8.3}
            trendLabel="vs previous period"
            variant="secondary"
          />
          <StatCard
            title="WooCommerce Sales"
            value={formatCurrency(totals.woocommerce)}
            icon={<TrendingUp className="h-6 w-6" />}
            trend={15.2}
            trendLabel="vs previous period"
            variant="tertiary"
          />
        </div>

        {/* Charts Section */}
        <div className="mb-8 grid grid-cols-1 gap-8 lg:grid-cols-3">
          {/* Line Chart - Income Trend */}
          <div className="lg:col-span-2 rounded-2xl border border-slate-800 bg-slate-900/50 p-6 backdrop-blur-sm">
            <div className="mb-6">
              <h2 className="text-lg font-semibold text-white">
                Income Trend
              </h2>
              <p className="text-sm text-slate-400">
                Shopify vs WooCommerce performance
              </p>
            </div>
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={chartData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#334155" />
                <XAxis stroke="#64748b" style={{ fontSize: '12px' }} />
                <YAxis stroke="#64748b" style={{ fontSize: '12px' }} />
                <Tooltip
                  contentStyle={{
                    backgroundColor: '#1e293b',
                    border: '1px solid #475569',
                    borderRadius: '8px',
                  }}
                  formatter={(value) => formatCurrency(value as number)}
                />
                <Legend />
                <Line
                  type="monotone"
                  dataKey="Shopify"
                  stroke="#3B82F6"
                  strokeWidth={2}
                  dot={false}
                />
                <Line
                  type="monotone"
                  dataKey="WooCommerce"
                  stroke="#10B981"
                  strokeWidth={2}
                  dot={false}
                />
              </LineChart>
            </ResponsiveContainer>
          </div>

          {/* Pie Chart - Project Breakdown */}
          <div className="rounded-2xl border border-slate-800 bg-slate-900/50 p-6 backdrop-blur-sm">
            <div className="mb-6">
              <h2 className="text-lg font-semibold text-white">
                Project Breakdown
              </h2>
              <p className="text-sm text-slate-400">Revenue distribution</p>
            </div>
            <ResponsiveContainer width="100%" height={300}>
              <PieChart>
                <Pie
                  data={projectTotals}
                  cx="50%"
                  cy="50%"
                  innerRadius={60}
                  outerRadius={100}
                  paddingAngle={2}
                  dataKey="value"
                >
                  {projectTotals.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.fill} />
                  ))}
                </Pie>
                <Tooltip
                  formatter={(value) => formatCurrency(value as number)}
                  contentStyle={{
                    backgroundColor: '#1e293b',
                    border: '1px solid #475569',
                    borderRadius: '8px',
                  }}
                />
              </PieChart>
            </ResponsiveContainer>
            <div className="mt-4 space-y-2">
              {projectTotals.map((project) => (
                <div key={project.name} className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div
                      className="h-3 w-3 rounded-full"
                      style={{ backgroundColor: project.fill }}
                    />
                    <span className="text-sm text-slate-300">
                      {project.name}
                    </span>
                  </div>
                  <span className="text-sm font-semibold text-white">
                    {formatCurrency(project.value)}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bar Chart - Platform Comparison */}
        <div className="rounded-2xl border border-slate-800 bg-slate-900/50 p-6 backdrop-blur-sm">
          <div className="mb-6">
            <h2 className="text-lg font-semibold text-white">
              Platform Comparison
            </h2>
            <p className="text-sm text-slate-400">
              Daily breakdown by sales platform
            </p>
          </div>
          <ResponsiveContainer width="100%" height={350}>
            <BarChart data={chartData}>
              <CartesianGrid strokeDasharray="3 3" stroke="#334155" />
              <XAxis stroke="#64748b" style={{ fontSize: '12px' }} />
              <YAxis stroke="#64748b" style={{ fontSize: '12px' }} />
              <Tooltip
                contentStyle={{
                  backgroundColor: '#1e293b',
                  border: '1px solid #475569',
                  borderRadius: '8px',
                }}
                formatter={(value) => formatCurrency(value as number)}
              />
              <Legend />
              <Bar dataKey="Shopify" fill="#3B82F6" radius={[8, 8, 0, 0]} />
              <Bar
                dataKey="WooCommerce"
                fill="#10B981"
                radius={[8, 8, 0, 0]}
              />
            </BarChart>
          </ResponsiveContainer>
        </div>

        {/* Footer */}
        <div className="mt-12 border-t border-slate-800 pt-6 text-center text-sm text-slate-500">
          <p>
            Last updated: {new Date().toLocaleString()} • Data syncs every 15
            minutes
          </p>
        </div>
      </main>
    </div>
  );
}
