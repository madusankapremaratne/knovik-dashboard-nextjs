import Link from 'next/link';
import { TrendingUp, ArrowRight } from 'lucide-react';

interface ProjectCardProps {
  id: string;
  name: string;
  description: string;
  revenue: number;
  orders: number;
  aov: number;
  conversionRate: number;
  color: string;
  trend: number;
}

export default function ProjectCard({
  id,
  name,
  description,
  revenue,
  orders,
  aov,
  conversionRate,
  color,
  trend,
}: ProjectCardProps) {
  return (
    <Link href={`/projects/${id}`}>
      <div
        className="group relative overflow-hidden rounded-2xl border border-slate-800 bg-slate-900/50 p-6 backdrop-blur-sm transition-all duration-300 hover:scale-[1.02] hover:border-slate-700 hover:shadow-2xl cursor-pointer"
        style={{
          boxShadow: `0 0 0 0 ${color}15`,
        }}
      >
        {/* Color accent bar */}
        <div
          className="absolute left-0 top-0 h-full w-1 transition-all duration-300 group-hover:w-2"
          style={{ backgroundColor: color }}
        />

        {/* Header */}
        <div className="mb-4 flex items-start justify-between">
          <div>
            <h3 className="text-2xl font-bold text-white">{name}</h3>
            <p className="text-sm text-slate-400">{description}</p>
          </div>
          <ArrowRight className="h-5 w-5 text-slate-500 transition-all duration-300 group-hover:translate-x-1 group-hover:text-white" />
        </div>

        {/* Metrics Grid */}
        <div className="grid grid-cols-2 gap-4">
          {/* Revenue */}
          <div>
            <p className="text-xs text-slate-400">Revenue</p>
            <p className="text-xl font-bold text-white">
              ${revenue.toLocaleString()}
            </p>
          </div>

          {/* Orders */}
          <div>
            <p className="text-xs text-slate-400">Orders</p>
            <p className="text-xl font-bold text-white">{orders}</p>
          </div>

          {/* AOV */}
          <div>
            <p className="text-xs text-slate-400">AOV</p>
            <p className="text-xl font-bold text-white">
              ${aov.toFixed(2)}
            </p>
          </div>

          {/* Conversion Rate */}
          <div>
            <p className="text-xs text-slate-400">Conv. Rate</p>
            <p className="text-xl font-bold text-white">
              {conversionRate.toFixed(1)}%
            </p>
          </div>
        </div>

        {/* Trend Indicator */}
        <div className="mt-4 flex items-center gap-2 border-t border-slate-800 pt-4">
          <TrendingUp
            className={`h-4 w-4 ${
              trend >= 0 ? 'text-green-500' : 'text-red-500'
            }`}
          />
          <span
            className={`text-sm font-semibold ${
              trend >= 0 ? 'text-green-500' : 'text-red-500'
            }`}
          >
            {trend >= 0 ? '+' : ''}
            {trend.toFixed(1)}%
          </span>
          <span className="text-xs text-slate-500">vs previous period</span>
        </div>
      </div>
    </Link>
  );
}
