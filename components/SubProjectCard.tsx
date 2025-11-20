import Link from 'next/link';
import { TrendingUp, ArrowRight } from 'lucide-react';

interface SubProjectCardProps {
  projectId: string;
  subProjectId: string;
  name: string;
  category?: string;
  region?: string;
  revenue: number;
  orders: number;
  aov: number;
  conversionRate: number;
  trend: number;
}

export default function SubProjectCard({
  projectId,
  subProjectId,
  name,
  category,
  region,
  revenue,
  orders,
  aov,
  conversionRate,
  trend,
}: SubProjectCardProps) {
  return (
    <Link href={`/projects/${projectId}/${subProjectId}`}>
      <div className="group relative overflow-hidden rounded-xl border border-slate-800 bg-slate-900/30 p-5 backdrop-blur-sm transition-all duration-300 hover:scale-[1.02] hover:border-slate-700 hover:bg-slate-900/50 hover:shadow-xl cursor-pointer">
        {/* Header */}
        <div className="mb-3 flex items-start justify-between">
          <div>
            <h4 className="text-lg font-semibold text-white">{name}</h4>
            <p className="text-xs text-slate-400">{category || region}</p>
          </div>
          <ArrowRight className="h-4 w-4 text-slate-500 transition-all duration-300 group-hover:translate-x-1 group-hover:text-white" />
        </div>

        {/* Metrics Grid */}
        <div className="grid grid-cols-2 gap-3">
          {/* Revenue */}
          <div>
            <p className="text-xs text-slate-400">Revenue</p>
            <p className="text-lg font-bold text-white">
              ${revenue.toLocaleString()}
            </p>
          </div>

          {/* Orders */}
          <div>
            <p className="text-xs text-slate-400">Orders</p>
            <p className="text-lg font-bold text-white">{orders}</p>
          </div>

          {/* AOV */}
          <div>
            <p className="text-xs text-slate-400">AOV</p>
            <p className="text-lg font-bold text-white">
              ${aov.toFixed(2)}
            </p>
          </div>

          {/* Conversion Rate */}
          <div>
            <p className="text-xs text-slate-400">Conv. Rate</p>
            <p className="text-lg font-bold text-white">
              {conversionRate.toFixed(1)}%
            </p>
          </div>
        </div>

        {/* Trend Indicator */}
        <div className="mt-3 flex items-center gap-2 border-t border-slate-800 pt-3">
          <TrendingUp
            className={`h-3 w-3 ${
              trend >= 0 ? 'text-green-500' : 'text-red-500'
            }`}
          />
          <span
            className={`text-xs font-semibold ${
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
