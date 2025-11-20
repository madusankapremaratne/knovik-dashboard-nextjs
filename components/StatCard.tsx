import React from 'react';
import { TrendingUp } from 'lucide-react';

interface StatCardProps {
  title: string;
  value: string;
  icon: React.ReactNode;
  trend?: number;
  trendLabel?: string;
  variant?: 'primary' | 'secondary' | 'tertiary';
}

export default function StatCard({
  title,
  value,
  icon,
  trend,
  trendLabel,
  variant = 'primary',
}: StatCardProps) {
  const variantStyles = {
    primary: {
      bgGradient: 'from-blue-900/20 to-blue-800/5',
      border: 'border-blue-800/50',
      iconColor: 'text-blue-400',
      accentColor: 'bg-blue-900/30',
    },
    secondary: {
      bgGradient: 'from-cyan-900/20 to-cyan-800/5',
      border: 'border-cyan-800/50',
      iconColor: 'text-cyan-400',
      accentColor: 'bg-cyan-900/30',
    },
    tertiary: {
      bgGradient: 'from-emerald-900/20 to-emerald-800/5',
      border: 'border-emerald-800/50',
      iconColor: 'text-emerald-400',
      accentColor: 'bg-emerald-900/30',
    },
  };

  const style = variantStyles[variant];

  return (
    <div
      className={`relative overflow-hidden rounded-2xl border ${style.border} bg-gradient-to-br ${style.bgGradient} p-6 backdrop-blur-sm transition-all duration-300 hover:border-opacity-100`}
    >
      {/* Background accent */}
      <div
        className={`absolute -right-8 -top-8 h-32 w-32 rounded-full ${style.accentColor} blur-3xl`}
      />

      <div className="relative z-10">
        {/* Header with icon and title */}
        <div className="mb-4 flex items-start justify-between">
          <div>
            <p className="text-sm font-medium text-slate-400">{title}</p>
          </div>
          <div className={`rounded-lg ${style.accentColor} p-2 ${style.iconColor}`}>
            {icon}
          </div>
        </div>

        {/* Main value */}
        <div className="mb-4">
          <h3 className="text-3xl font-bold text-white">{value}</h3>
        </div>

        {/* Trend indicator */}
        {trend && (
          <div className="flex items-center gap-2">
            <div className="flex items-center gap-1 rounded-full bg-green-900/30 px-2.5 py-1">
              <TrendingUp className="h-3.5 w-3.5 text-green-400" />
              <span className="text-xs font-semibold text-green-400">
                +{trend}%
              </span>
            </div>
            <span className="text-xs text-slate-400">{trendLabel}</span>
          </div>
        )}
      </div>
    </div>
  );
}
