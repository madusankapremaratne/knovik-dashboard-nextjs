/**
 * Format number as currency (USD)
 */
export function formatCurrency(value: number): string {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(value);
}

/**
 * Get date range based on period type
 */
export function getDateRange(
  period: 'yesterday' | 'last7days' | 'mtd' | 'lastMonth' | 'custom',
  customDateRange?: { startDate: Date; endDate: Date }
): { start: Date; end: Date } {
  const today = new Date();
  today.setHours(0, 0, 0, 0);

  const end = new Date(today);
  end.setHours(23, 59, 59, 999);

  let start = new Date(today);

  switch (period) {
    case 'yesterday': {
      start = new Date(today);
      start.setDate(start.getDate() - 1);
      start.setHours(0, 0, 0, 0);
      const endYesterday = new Date(start);
      endYesterday.setHours(23, 59, 59, 999);
      return { start, end: endYesterday };
    }

    case 'last7days': {
      start = new Date(today);
      start.setDate(start.getDate() - 6);
      start.setHours(0, 0, 0, 0);
      return { start, end };
    }

    case 'mtd': {
      start = new Date(today.getFullYear(), today.getMonth(), 1);
      start.setHours(0, 0, 0, 0);
      return { start, end };
    }

    case 'lastMonth': {
      start = new Date(today.getFullYear(), today.getMonth() - 1, 1);
      start.setHours(0, 0, 0, 0);
      const endLastMonth = new Date(today.getFullYear(), today.getMonth(), 0);
      endLastMonth.setHours(23, 59, 59, 999);
      return { start, end: endLastMonth };
    }

    case 'custom': {
      if (customDateRange) {
        const customStart = new Date(customDateRange.startDate);
        customStart.setHours(0, 0, 0, 0);
        const customEnd = new Date(customDateRange.endDate);
        customEnd.setHours(23, 59, 59, 999);
        return { start: customStart, end: customEnd };
      }
      return { start, end };
    }

    default:
      return { start, end };
  }
}

/**
 * Format date for display
 */
export function formatDate(date: Date, format: 'short' | 'long' = 'short'): string {
  if (format === 'short') {
    return date.toLocaleDateString('en-US', {
      month: 'short',
      day: 'numeric',
    });
  }
  return date.toLocaleDateString('en-US', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
}

/**
 * Calculate percentage change
 */
export function calculatePercentageChange(current: number, previous: number): number {
  if (previous === 0) return 0;
  return ((current - previous) / previous) * 100;
}

/**
 * Group data by period
 */
export function groupDataByPeriod(
  data: Array<{ date: string; [key: string]: any }>,
  period: 'day' | 'week' | 'month'
): Array<{ period: string; [key: string]: any }> {
  // Implementation would depend on specific data structure
  return data;
}
