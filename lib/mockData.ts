/**
 * Mock income data from Shopify and WooCommerce
 * Each entry represents daily revenue
 */
export const mockIncomeData = [
  // Last month data
  { date: '2025-10-01', shopify: 1200, woocommerce: 800, total: 2000 },
  { date: '2025-10-02', shopify: 1450, woocommerce: 950, total: 2400 },
  { date: '2025-10-03', shopify: 980, woocommerce: 720, total: 1700 },
  { date: '2025-10-04', shopify: 1650, woocommerce: 1100, total: 2750 },
  { date: '2025-10-05', shopify: 1300, woocommerce: 850, total: 2150 },
  { date: '2025-10-06', shopify: 2100, woocommerce: 1400, total: 3500 },
  { date: '2025-10-07', shopify: 1800, woocommerce: 1200, total: 3000 },
  { date: '2025-10-08', shopify: 1100, woocommerce: 700, total: 1800 },
  { date: '2025-10-09', shopify: 1500, woocommerce: 950, total: 2450 },
  { date: '2025-10-10', shopify: 1900, woocommerce: 1300, total: 3200 },
  { date: '2025-10-11', shopify: 1350, woocommerce: 900, total: 2250 },
  { date: '2025-10-12', shopify: 1700, woocommerce: 1100, total: 2800 },
  { date: '2025-10-13', shopify: 2200, woocommerce: 1500, total: 3700 },
  { date: '2025-10-14', shopify: 1400, woocommerce: 850, total: 2250 },
  { date: '2025-10-15', shopify: 1950, woocommerce: 1250, total: 3200 },
  { date: '2025-10-16', shopify: 1600, woocommerce: 1000, total: 2600 },
  { date: '2025-10-17', shopify: 1800, woocommerce: 1200, total: 3000 },
  { date: '2025-10-18', shopify: 2300, woocommerce: 1600, total: 3900 },
  { date: '2025-10-19', shopify: 1250, woocommerce: 800, total: 2050 },
  { date: '2025-10-20', shopify: 1700, woocommerce: 1100, total: 2800 },
  { date: '2025-10-21', shopify: 2000, woocommerce: 1350, total: 3350 },
  { date: '2025-10-22', shopify: 1500, woocommerce: 950, total: 2450 },
  { date: '2025-10-23', shopify: 1850, woocommerce: 1200, total: 3050 },
  { date: '2025-10-24', shopify: 2100, woocommerce: 1400, total: 3500 },
  { date: '2025-10-25', shopify: 1350, woocommerce: 900, total: 2250 },
  { date: '2025-10-26', shopify: 1600, woocommerce: 1050, total: 2650 },
  { date: '2025-10-27', shopify: 2400, woocommerce: 1700, total: 4100 },
  { date: '2025-10-28', shopify: 1700, woocommerce: 1100, total: 2800 },
  { date: '2025-10-29', shopify: 1900, woocommerce: 1300, total: 3200 },
  { date: '2025-10-30', shopify: 2200, woocommerce: 1500, total: 3700 },
  { date: '2025-10-31', shopify: 1500, woocommerce: 1000, total: 2500 },

  // Current month data (November 2025)
  { date: '2025-11-01', shopify: 1800, woocommerce: 1200, total: 3000 },
  { date: '2025-11-02', shopify: 2100, woocommerce: 1400, total: 3500 },
  { date: '2025-11-03', shopify: 1600, woocommerce: 1050, total: 2650 },
  { date: '2025-11-04', shopify: 1950, woocommerce: 1300, total: 3250 },
  { date: '2025-11-05', shopify: 2200, woocommerce: 1500, total: 3700 },
  { date: '2025-11-06', shopify: 1700, woocommerce: 1100, total: 2800 },
  { date: '2025-11-07', shopify: 2000, woocommerce: 1350, total: 3350 },
  { date: '2025-11-08', shopify: 2300, woocommerce: 1600, total: 3900 },
  { date: '2025-11-09', shopify: 1800, woocommerce: 1200, total: 3000 },
  { date: '2025-11-10', shopify: 2100, woocommerce: 1400, total: 3500 },
  { date: '2025-11-11', shopify: 1900, woocommerce: 1300, total: 3200 },
  { date: '2025-11-12', shopify: 2200, woocommerce: 1500, total: 3700 },
  { date: '2025-11-13', shopify: 2400, woocommerce: 1700, total: 4100 },
  { date: '2025-11-14', shopify: 1700, woocommerce: 1100, total: 2800 },
  { date: '2025-11-15', shopify: 2000, woocommerce: 1350, total: 3350 },
  { date: '2025-11-16', shopify: 2100, woocommerce: 1400, total: 3500 },
  { date: '2025-11-17', shopify: 1800, woocommerce: 1200, total: 3000 },
  { date: '2025-11-18', shopify: 2200, woocommerce: 1500, total: 3700 },
  { date: '2025-11-19', shopify: 2300, woocommerce: 1600, total: 3900 },
  { date: '2025-11-20', shopify: 2000, woocommerce: 1350, total: 3350 },
];

/**
 * Mock project breakdown data
 * Distribution of revenue across AutoPal, Smartcey, and Letilo
 */
export const mockProjectBreakdown = [
  // October data
  { date: '2025-10-01', autopal: 1000, smartcey: 700, letilo: 300 },
  { date: '2025-10-02', autopal: 1200, smartcey: 900, letilo: 300 },
  { date: '2025-10-03', autopal: 850, smartcey: 650, letilo: 200 },
  { date: '2025-10-04', autopal: 1400, smartcey: 900, letilo: 450 },
  { date: '2025-10-05', autopal: 1000, smartcey: 800, letilo: 350 },
  { date: '2025-10-06', autopal: 1800, smartcey: 1200, letilo: 500 },
  { date: '2025-10-07', autopal: 1500, smartcey: 1000, letilo: 500 },
  { date: '2025-10-08', autopal: 900, smartcey: 650, letilo: 250 },
  { date: '2025-10-09', autopal: 1200, smartcey: 800, letilo: 450 },
  { date: '2025-10-10', autopal: 1600, smartcey: 1100, letilo: 500 },
  { date: '2025-10-11', autopal: 1100, smartcey: 800, letilo: 350 },
  { date: '2025-10-12', autopal: 1400, smartcey: 900, letilo: 500 },
  { date: '2025-10-13', autopal: 1850, smartcey: 1300, letilo: 550 },
  { date: '2025-10-14', autopal: 1100, smartcey: 750, letilo: 400 },
  { date: '2025-10-15', autopal: 1550, smartcey: 1050, letilo: 600 },
  { date: '2025-10-16', autopal: 1300, smartcey: 900, letilo: 400 },
  { date: '2025-10-17', autopal: 1500, smartcey: 1000, letilo: 500 },
  { date: '2025-10-18', autopal: 1950, smartcey: 1300, letilo: 650 },
  { date: '2025-10-19', autopal: 1000, smartcey: 700, letilo: 350 },
  { date: '2025-10-20', autopal: 1400, smartcey: 900, letilo: 500 },
  { date: '2025-10-21', autopal: 1700, smartcey: 1150, letilo: 500 },
  { date: '2025-10-22', autopal: 1200, smartcey: 800, letilo: 450 },
  { date: '2025-10-23', autopal: 1500, smartcey: 1000, letilo: 550 },
  { date: '2025-10-24', autopal: 1800, smartcey: 1200, letilo: 500 },
  { date: '2025-10-25', autopal: 1100, smartcey: 750, letilo: 400 },
  { date: '2025-10-26', autopal: 1350, smartcey: 900, letilo: 400 },
  { date: '2025-10-27', autopal: 2050, smartcey: 1400, letilo: 650 },
  { date: '2025-10-28', autopal: 1400, smartcey: 900, letilo: 500 },
  { date: '2025-10-29', autopal: 1600, smartcey: 1100, letilo: 500 },
  { date: '2025-10-30', autopal: 1800, smartcey: 1200, letilo: 700 },
  { date: '2025-10-31', autopal: 1250, smartcey: 850, letilo: 400 },

  // November data
  { date: '2025-11-01', autopal: 1500, smartcey: 1000, letilo: 500 },
  { date: '2025-11-02', autopal: 1750, smartcey: 1200, letilo: 550 },
  { date: '2025-11-03', autopal: 1350, smartcey: 900, letilo: 400 },
  { date: '2025-11-04', autopal: 1650, smartcey: 1100, letilo: 500 },
  { date: '2025-11-05', autopal: 1850, smartcey: 1300, letilo: 550 },
  { date: '2025-11-06', autopal: 1400, smartcey: 900, letilo: 500 },
  { date: '2025-11-07', autopal: 1700, smartcey: 1150, letilo: 500 },
  { date: '2025-11-08', autopal: 1950, smartcey: 1300, letilo: 650 },
  { date: '2025-11-09', autopal: 1500, smartcey: 1000, letilo: 500 },
  { date: '2025-11-10', autopal: 1750, smartcey: 1200, letilo: 550 },
  { date: '2025-11-11', autopal: 1600, smartcey: 1100, letilo: 500 },
  { date: '2025-11-12', autopal: 1850, smartcey: 1300, letilo: 550 },
  { date: '2025-11-13', autopal: 2050, smartcey: 1400, letilo: 650 },
  { date: '2025-11-14', autopal: 1400, smartcey: 900, letilo: 500 },
  { date: '2025-11-15', autopal: 1700, smartcey: 1150, letilo: 500 },
  { date: '2025-11-16', autopal: 1750, smartcey: 1200, letilo: 550 },
  { date: '2025-11-17', autopal: 1500, smartcey: 1000, letilo: 500 },
  { date: '2025-11-18', autopal: 1850, smartcey: 1300, letilo: 550 },
  { date: '2025-11-19', autopal: 1950, smartcey: 1300, letilo: 650 },
  { date: '2025-11-20', autopal: 1700, smartcey: 1150, letilo: 500 },
];

/**
 * Mock website analytics data
 * Combined metrics for all websites (AutoPal, Smartcey, Letilo)
 */
export const mockWebsiteAnalytics = [
  // October data
  { date: '2025-10-01', pageViews: 4500, uniqueVisitors: 1200, sessions: 1800, bounceRate: 45.2, avgSessionDuration: 185 },
  { date: '2025-10-02', pageViews: 5200, uniqueVisitors: 1400, sessions: 2100, bounceRate: 42.8, avgSessionDuration: 195 },
  { date: '2025-10-03', pageViews: 3800, uniqueVisitors: 980, sessions: 1500, bounceRate: 48.5, avgSessionDuration: 170 },
  { date: '2025-10-04', pageViews: 5800, uniqueVisitors: 1650, sessions: 2400, bounceRate: 41.2, avgSessionDuration: 210 },
  { date: '2025-10-05', pageViews: 4700, uniqueVisitors: 1300, sessions: 1950, bounceRate: 44.5, avgSessionDuration: 188 },
  { date: '2025-10-06', pageViews: 7200, uniqueVisitors: 2100, sessions: 3200, bounceRate: 38.5, avgSessionDuration: 235 },
  { date: '2025-10-07', pageViews: 6300, uniqueVisitors: 1800, sessions: 2700, bounceRate: 40.2, avgSessionDuration: 220 },
  { date: '2025-10-08', pageViews: 3900, uniqueVisitors: 1100, sessions: 1650, bounceRate: 46.8, avgSessionDuration: 175 },
  { date: '2025-10-09', pageViews: 5100, uniqueVisitors: 1500, sessions: 2200, bounceRate: 43.2, avgSessionDuration: 192 },
  { date: '2025-10-10', pageViews: 6500, uniqueVisitors: 1900, sessions: 2850, bounceRate: 39.8, avgSessionDuration: 225 },
  { date: '2025-10-11', pageViews: 4800, uniqueVisitors: 1350, sessions: 2000, bounceRate: 44.0, avgSessionDuration: 190 },
  { date: '2025-10-12', pageViews: 5900, uniqueVisitors: 1700, sessions: 2500, bounceRate: 41.5, avgSessionDuration: 205 },
  { date: '2025-10-13', pageViews: 7600, uniqueVisitors: 2200, sessions: 3350, bounceRate: 37.8, avgSessionDuration: 240 },
  { date: '2025-10-14', pageViews: 4900, uniqueVisitors: 1400, sessions: 2050, bounceRate: 43.8, avgSessionDuration: 188 },
  { date: '2025-10-15', pageViews: 6800, uniqueVisitors: 1950, sessions: 2900, bounceRate: 39.5, avgSessionDuration: 228 },
  { date: '2025-10-16', pageViews: 5600, uniqueVisitors: 1600, sessions: 2350, bounceRate: 42.0, avgSessionDuration: 198 },
  { date: '2025-10-17', pageViews: 6200, uniqueVisitors: 1800, sessions: 2650, bounceRate: 40.5, avgSessionDuration: 215 },
  { date: '2025-10-18', pageViews: 7900, uniqueVisitors: 2300, sessions: 3500, bounceRate: 36.8, avgSessionDuration: 248 },
  { date: '2025-10-19', pageViews: 4400, uniqueVisitors: 1250, sessions: 1850, bounceRate: 45.5, avgSessionDuration: 182 },
  { date: '2025-10-20', pageViews: 5900, uniqueVisitors: 1700, sessions: 2500, bounceRate: 41.2, avgSessionDuration: 208 },
  { date: '2025-10-21', pageViews: 7000, uniqueVisitors: 2000, sessions: 3000, bounceRate: 39.0, avgSessionDuration: 230 },
  { date: '2025-10-22', pageViews: 5200, uniqueVisitors: 1500, sessions: 2200, bounceRate: 43.0, avgSessionDuration: 195 },
  { date: '2025-10-23', pageViews: 6400, uniqueVisitors: 1850, sessions: 2750, bounceRate: 40.0, avgSessionDuration: 218 },
  { date: '2025-10-24', pageViews: 7200, uniqueVisitors: 2100, sessions: 3150, bounceRate: 38.2, avgSessionDuration: 235 },
  { date: '2025-10-25', pageViews: 4800, uniqueVisitors: 1350, sessions: 2000, bounceRate: 44.2, avgSessionDuration: 188 },
  { date: '2025-10-26', pageViews: 5700, uniqueVisitors: 1600, sessions: 2400, bounceRate: 41.8, avgSessionDuration: 202 },
  { date: '2025-10-27', pageViews: 8200, uniqueVisitors: 2400, sessions: 3650, bounceRate: 35.5, avgSessionDuration: 255 },
  { date: '2025-10-28', pageViews: 5900, uniqueVisitors: 1700, sessions: 2500, bounceRate: 41.0, avgSessionDuration: 210 },
  { date: '2025-10-29', pageViews: 6600, uniqueVisitors: 1900, sessions: 2850, bounceRate: 39.2, avgSessionDuration: 225 },
  { date: '2025-10-30', pageViews: 7600, uniqueVisitors: 2200, sessions: 3300, bounceRate: 37.5, avgSessionDuration: 242 },
  { date: '2025-10-31', pageViews: 5400, uniqueVisitors: 1500, sessions: 2250, bounceRate: 42.5, avgSessionDuration: 198 },

  // November data
  { date: '2025-11-01', pageViews: 6200, uniqueVisitors: 1800, sessions: 2700, bounceRate: 40.2, avgSessionDuration: 218 },
  { date: '2025-11-02', pageViews: 7200, uniqueVisitors: 2100, sessions: 3150, bounceRate: 38.0, avgSessionDuration: 235 },
  { date: '2025-11-03', pageViews: 5700, uniqueVisitors: 1600, sessions: 2400, bounceRate: 41.5, avgSessionDuration: 205 },
  { date: '2025-11-04', pageViews: 6800, uniqueVisitors: 1950, sessions: 2900, bounceRate: 39.2, avgSessionDuration: 228 },
  { date: '2025-11-05', pageViews: 7600, uniqueVisitors: 2200, sessions: 3300, bounceRate: 37.2, avgSessionDuration: 245 },
  { date: '2025-11-06', pageViews: 5900, uniqueVisitors: 1700, sessions: 2550, bounceRate: 40.8, avgSessionDuration: 212 },
  { date: '2025-11-07', pageViews: 7000, uniqueVisitors: 2000, sessions: 3000, bounceRate: 38.5, avgSessionDuration: 232 },
  { date: '2025-11-08', pageViews: 7900, uniqueVisitors: 2300, sessions: 3450, bounceRate: 36.5, avgSessionDuration: 250 },
  { date: '2025-11-09', pageViews: 6200, uniqueVisitors: 1800, sessions: 2700, bounceRate: 40.0, avgSessionDuration: 220 },
  { date: '2025-11-10', pageViews: 7200, uniqueVisitors: 2100, sessions: 3150, bounceRate: 37.8, avgSessionDuration: 238 },
  { date: '2025-11-11', pageViews: 6600, uniqueVisitors: 1900, sessions: 2850, bounceRate: 39.0, avgSessionDuration: 228 },
  { date: '2025-11-12', pageViews: 7600, uniqueVisitors: 2200, sessions: 3300, bounceRate: 36.8, avgSessionDuration: 245 },
  { date: '2025-11-13', pageViews: 8400, uniqueVisitors: 2400, sessions: 3650, bounceRate: 35.2, avgSessionDuration: 258 },
  { date: '2025-11-14', pageViews: 5900, uniqueVisitors: 1700, sessions: 2550, bounceRate: 40.5, avgSessionDuration: 215 },
  { date: '2025-11-15', pageViews: 7000, uniqueVisitors: 2000, sessions: 3000, bounceRate: 38.2, avgSessionDuration: 235 },
  { date: '2025-11-16', pageViews: 7200, uniqueVisitors: 2100, sessions: 3150, bounceRate: 37.5, avgSessionDuration: 240 },
  { date: '2025-11-17', pageViews: 6200, uniqueVisitors: 1800, sessions: 2700, bounceRate: 39.8, avgSessionDuration: 222 },
  { date: '2025-11-18', pageViews: 7600, uniqueVisitors: 2200, sessions: 3300, bounceRate: 36.5, avgSessionDuration: 248 },
  { date: '2025-11-19', pageViews: 7900, uniqueVisitors: 2300, sessions: 3450, bounceRate: 35.8, avgSessionDuration: 252 },
  { date: '2025-11-20', pageViews: 7000, uniqueVisitors: 2000, sessions: 3000, bounceRate: 38.0, avgSessionDuration: 235 },
];

/**
 * Project metadata
 */
export const projects = [
  { id: 'autopal', name: 'AutoPal', color: '#3B82F6', description: 'Automotive parts marketplace' },
  { id: 'smartcey', name: 'Smartcey', color: '#10B981', description: 'Smart home devices' },
  { id: 'letilo', name: 'Letilo', color: '#F59E0B', description: 'Fashion & lifestyle' },
];

/**
 * Sub-projects for each main project (using real domains from data files)
 */
export const subProjects = {
  autopal: [
    { id: 'carplayhacks-com', name: 'carplayhacks.com', category: 'SEO/Blog' },
    { id: 'screen2auto-com', name: 'screen2auto.com', category: 'SEO/Application' },
    { id: 'wheelpal-app', name: 'wheelpal.app', category: 'Application' },
    { id: 'androidautohacks-com', name: 'androidautohacks.com', category: 'SEO/E-commerce' },
    { id: 'carbridgex-com', name: 'carbridgex.com', category: 'E-commerce/Application' },
    { id: 'cartube-app', name: 'cartube.app', category: 'Application' },
    { id: 'carstream-app', name: 'carstream.app', category: 'Application' },
    { id: 'fermata-auto-com', name: 'fermata-auto.com', category: 'SEO/Blog' },
    { id: 'fermabox-com', name: 'fermabox.com', category: 'E-commerce' },
  ],
  smartcey: [
    { id: 'addtohomekit-com', name: 'addtohomekit.com', category: 'Application/Main Site' },
    { id: 'athbridge-com', name: 'athbridge.com', category: 'E-commerce' },
    { id: 'matterhubs-com', name: 'matterhubs.com', category: 'SEO/Blog' },
    { id: 'zigbeehubs-com', name: 'zigbeehubs.com', category: 'SEO/Blog' },
    { id: 'sonoffmini-com', name: 'sonoffmini.com', category: 'E-commerce' },
    { id: 'findmy-lk', name: 'findmy.lk', category: 'E-commerce' },
    { id: 'kodmy-com', name: 'kodmy.com', category: 'E-commerce/Platform' },
  ],
  letilo: [
    { id: 'letilo-women', name: 'Letilo Women', category: 'Women\'s Fashion' },
    { id: 'letilo-men', name: 'Letilo Men', category: 'Men\'s Fashion' },
    { id: 'letilo-accessories', name: 'Letilo Accessories', category: 'Accessories' },
  ],
};

/**
 * Enhanced project metrics with AOV, Conversion Rate, etc.
 */
export const mockProjectMetrics = [
  // October data
  {
    date: '2025-10-01',
    autopal: { revenue: 1000, orders: 12, visitors: 450, conversions: 12 },
    smartcey: { revenue: 700, orders: 8, visitors: 380, conversions: 8 },
    letilo: { revenue: 300, orders: 15, visitors: 370, conversions: 15 }
  },
  {
    date: '2025-10-02',
    autopal: { revenue: 1200, orders: 14, visitors: 520, conversions: 14 },
    smartcey: { revenue: 900, orders: 10, visitors: 450, conversions: 10 },
    letilo: { revenue: 300, orders: 16, visitors: 430, conversions: 16 }
  },
  {
    date: '2025-10-03',
    autopal: { revenue: 850, orders: 10, visitors: 380, conversions: 10 },
    smartcey: { revenue: 650, orders: 7, visitors: 320, conversions: 7 },
    letilo: { revenue: 200, orders: 10, visitors: 280, conversions: 10 }
  },
  {
    date: '2025-10-04',
    autopal: { revenue: 1400, orders: 16, visitors: 580, conversions: 16 },
    smartcey: { revenue: 900, orders: 11, visitors: 490, conversions: 11 },
    letilo: { revenue: 450, orders: 22, visitors: 440, conversions: 22 }
  },
  {
    date: '2025-10-05',
    autopal: { revenue: 1000, orders: 12, visitors: 470, conversions: 12 },
    smartcey: { revenue: 800, orders: 9, visitors: 410, conversions: 9 },
    letilo: { revenue: 350, orders: 18, visitors: 390, conversions: 18 }
  },
  {
    date: '2025-10-06',
    autopal: { revenue: 1800, orders: 21, visitors: 720, conversions: 21 },
    smartcey: { revenue: 1200, orders: 14, visitors: 630, conversions: 14 },
    letilo: { revenue: 500, orders: 25, visitors: 570, conversions: 25 }
  },
  {
    date: '2025-10-07',
    autopal: { revenue: 1500, orders: 18, visitors: 630, conversions: 18 },
    smartcey: { revenue: 1000, orders: 12, visitors: 540, conversions: 12 },
    letilo: { revenue: 500, orders: 25, visitors: 530, conversions: 25 }
  },
  {
    date: '2025-10-08',
    autopal: { revenue: 900, orders: 11, visitors: 390, conversions: 11 },
    smartcey: { revenue: 650, orders: 8, visitors: 330, conversions: 8 },
    letilo: { revenue: 250, orders: 13, visitors: 280, conversions: 13 }
  },
  {
    date: '2025-10-09',
    autopal: { revenue: 1200, orders: 14, visitors: 510, conversions: 14 },
    smartcey: { revenue: 800, orders: 9, visitors: 440, conversions: 9 },
    letilo: { revenue: 450, orders: 23, visitors: 420, conversions: 23 }
  },
  {
    date: '2025-10-10',
    autopal: { revenue: 1600, orders: 19, visitors: 650, conversions: 19 },
    smartcey: { revenue: 1100, orders: 13, visitors: 570, conversions: 13 },
    letilo: { revenue: 500, orders: 25, visitors: 530, conversions: 25 }
  },
  // Add more October dates (simplified for brevity)
  {
    date: '2025-10-11',
    autopal: { revenue: 1100, orders: 13, visitors: 480, conversions: 13 },
    smartcey: { revenue: 800, orders: 9, visitors: 410, conversions: 9 },
    letilo: { revenue: 350, orders: 18, visitors: 360, conversions: 18 }
  },
  {
    date: '2025-10-12',
    autopal: { revenue: 1400, orders: 16, visitors: 590, conversions: 16 },
    smartcey: { revenue: 900, orders: 11, visitors: 500, conversions: 11 },
    letilo: { revenue: 500, orders: 25, visitors: 460, conversions: 25 }
  },
  {
    date: '2025-10-13',
    autopal: { revenue: 1850, orders: 22, visitors: 760, conversions: 22 },
    smartcey: { revenue: 1300, orders: 15, visitors: 660, conversions: 15 },
    letilo: { revenue: 550, orders: 28, visitors: 620, conversions: 28 }
  },
  {
    date: '2025-10-14',
    autopal: { revenue: 1100, orders: 13, visitors: 490, conversions: 13 },
    smartcey: { revenue: 750, orders: 9, visitors: 420, conversions: 9 },
    letilo: { revenue: 400, orders: 20, visitors: 380, conversions: 20 }
  },
  {
    date: '2025-10-15',
    autopal: { revenue: 1550, orders: 18, visitors: 680, conversions: 18 },
    smartcey: { revenue: 1050, orders: 13, visitors: 580, conversions: 13 },
    letilo: { revenue: 600, orders: 30, visitors: 540, conversions: 30 }
  },
  {
    date: '2025-10-16',
    autopal: { revenue: 1300, orders: 15, visitors: 560, conversions: 15 },
    smartcey: { revenue: 900, orders: 11, visitors: 480, conversions: 11 },
    letilo: { revenue: 400, orders: 20, visitors: 440, conversions: 20 }
  },
  {
    date: '2025-10-17',
    autopal: { revenue: 1500, orders: 18, visitors: 620, conversions: 18 },
    smartcey: { revenue: 1000, orders: 12, visitors: 530, conversions: 12 },
    letilo: { revenue: 500, orders: 25, visitors: 500, conversions: 25 }
  },
  {
    date: '2025-10-18',
    autopal: { revenue: 1950, orders: 23, visitors: 790, conversions: 23 },
    smartcey: { revenue: 1300, orders: 15, visitors: 700, conversions: 15 },
    letilo: { revenue: 650, orders: 33, visitors: 640, conversions: 33 }
  },
  {
    date: '2025-10-19',
    autopal: { revenue: 1000, orders: 12, visitors: 440, conversions: 12 },
    smartcey: { revenue: 700, orders: 8, visitors: 370, conversions: 8 },
    letilo: { revenue: 350, orders: 18, visitors: 350, conversions: 18 }
  },
  {
    date: '2025-10-20',
    autopal: { revenue: 1400, orders: 16, visitors: 590, conversions: 16 },
    smartcey: { revenue: 900, orders: 11, visitors: 510, conversions: 11 },
    letilo: { revenue: 500, orders: 25, visitors: 470, conversions: 25 }
  },
  {
    date: '2025-10-21',
    autopal: { revenue: 1700, orders: 20, visitors: 700, conversions: 20 },
    smartcey: { revenue: 1150, orders: 14, visitors: 600, conversions: 14 },
    letilo: { revenue: 500, orders: 25, visitors: 550, conversions: 25 }
  },
  {
    date: '2025-10-22',
    autopal: { revenue: 1200, orders: 14, visitors: 520, conversions: 14 },
    smartcey: { revenue: 800, orders: 9, visitors: 440, conversions: 9 },
    letilo: { revenue: 450, orders: 23, visitors: 410, conversions: 23 }
  },
  {
    date: '2025-10-23',
    autopal: { revenue: 1500, orders: 18, visitors: 640, conversions: 18 },
    smartcey: { revenue: 1000, orders: 12, visitors: 550, conversions: 12 },
    letilo: { revenue: 550, orders: 28, visitors: 520, conversions: 28 }
  },
  {
    date: '2025-10-24',
    autopal: { revenue: 1800, orders: 21, visitors: 720, conversions: 21 },
    smartcey: { revenue: 1200, orders: 14, visitors: 630, conversions: 14 },
    letilo: { revenue: 500, orders: 25, visitors: 580, conversions: 25 }
  },
  {
    date: '2025-10-25',
    autopal: { revenue: 1100, orders: 13, visitors: 480, conversions: 13 },
    smartcey: { revenue: 750, orders: 9, visitors: 405, conversions: 9 },
    letilo: { revenue: 400, orders: 20, visitors: 370, conversions: 20 }
  },
  {
    date: '2025-10-26',
    autopal: { revenue: 1350, orders: 16, visitors: 570, conversions: 16 },
    smartcey: { revenue: 900, orders: 11, visitors: 480, conversions: 11 },
    letilo: { revenue: 400, orders: 20, visitors: 450, conversions: 20 }
  },
  {
    date: '2025-10-27',
    autopal: { revenue: 2050, orders: 24, visitors: 820, conversions: 24 },
    smartcey: { revenue: 1400, orders: 16, visitors: 730, conversions: 16 },
    letilo: { revenue: 650, orders: 33, visitors: 670, conversions: 33 }
  },
  {
    date: '2025-10-28',
    autopal: { revenue: 1400, orders: 16, visitors: 590, conversions: 16 },
    smartcey: { revenue: 900, orders: 11, visitors: 500, conversions: 11 },
    letilo: { revenue: 500, orders: 25, conversions: 25, visitors: 460 }
  },
  {
    date: '2025-10-29',
    autopal: { revenue: 1600, orders: 19, visitors: 660, conversions: 19 },
    smartcey: { revenue: 1100, orders: 13, visitors: 570, conversions: 13 },
    letilo: { revenue: 500, orders: 25, visitors: 540, conversions: 25 }
  },
  {
    date: '2025-10-30',
    autopal: { revenue: 1800, orders: 21, visitors: 760, conversions: 21 },
    smartcey: { revenue: 1200, orders: 14, visitors: 660, conversions: 14 },
    letilo: { revenue: 700, orders: 35, visitors: 620, conversions: 35 }
  },
  {
    date: '2025-10-31',
    autopal: { revenue: 1250, orders: 15, visitors: 540, conversions: 15 },
    smartcey: { revenue: 850, orders: 10, visitors: 450, conversions: 10 },
    letilo: { revenue: 400, orders: 20, visitors: 410, conversions: 20 }
  },

  // November data
  {
    date: '2025-11-01',
    autopal: { revenue: 1500, orders: 18, visitors: 620, conversions: 18 },
    smartcey: { revenue: 1000, orders: 12, visitors: 540, conversions: 12 },
    letilo: { revenue: 500, orders: 25, visitors: 500, conversions: 25 }
  },
  {
    date: '2025-11-02',
    autopal: { revenue: 1750, orders: 21, visitors: 720, conversions: 21 },
    smartcey: { revenue: 1200, orders: 14, visitors: 630, conversions: 14 },
    letilo: { revenue: 550, orders: 28, visitors: 580, conversions: 28 }
  },
  {
    date: '2025-11-03',
    autopal: { revenue: 1350, orders: 16, visitors: 570, conversions: 16 },
    smartcey: { revenue: 900, orders: 11, visitors: 480, conversions: 11 },
    letilo: { revenue: 400, orders: 20, visitors: 440, conversions: 20 }
  },
  {
    date: '2025-11-04',
    autopal: { revenue: 1650, orders: 19, visitors: 680, conversions: 19 },
    smartcey: { revenue: 1100, orders: 13, visitors: 580, conversions: 13 },
    letilo: { revenue: 500, orders: 25, visitors: 520, conversions: 25 }
  },
  {
    date: '2025-11-05',
    autopal: { revenue: 1850, orders: 22, visitors: 760, conversions: 22 },
    smartcey: { revenue: 1300, orders: 15, visitors: 660, conversions: 15 },
    letilo: { revenue: 550, orders: 28, visitors: 600, conversions: 28 }
  },
  {
    date: '2025-11-06',
    autopal: { revenue: 1400, orders: 16, visitors: 590, conversions: 16 },
    smartcey: { revenue: 900, orders: 11, visitors: 510, conversions: 11 },
    letilo: { revenue: 500, orders: 25, visitors: 470, conversions: 25 }
  },
  {
    date: '2025-11-07',
    autopal: { revenue: 1700, orders: 20, visitors: 700, conversions: 20 },
    smartcey: { revenue: 1150, orders: 14, visitors: 600, conversions: 14 },
    letilo: { revenue: 500, orders: 25, visitors: 560, conversions: 25 }
  },
  {
    date: '2025-11-08',
    autopal: { revenue: 1950, orders: 23, visitors: 790, conversions: 23 },
    smartcey: { revenue: 1300, orders: 15, visitors: 690, conversions: 15 },
    letilo: { revenue: 650, orders: 33, visitors: 630, conversions: 33 }
  },
  {
    date: '2025-11-09',
    autopal: { revenue: 1500, orders: 18, visitors: 620, conversions: 18 },
    smartcey: { revenue: 1000, orders: 12, visitors: 540, conversions: 12 },
    letilo: { revenue: 500, orders: 25, visitors: 500, conversions: 25 }
  },
  {
    date: '2025-11-10',
    autopal: { revenue: 1750, orders: 21, visitors: 720, conversions: 21 },
    smartcey: { revenue: 1200, orders: 14, visitors: 630, conversions: 14 },
    letilo: { revenue: 550, orders: 28, visitors: 580, conversions: 28 }
  },
  {
    date: '2025-11-11',
    autopal: { revenue: 1600, orders: 19, visitors: 660, conversions: 19 },
    smartcey: { revenue: 1100, orders: 13, visitors: 570, conversions: 13 },
    letilo: { revenue: 500, orders: 25, visitors: 540, conversions: 25 }
  },
  {
    date: '2025-11-12',
    autopal: { revenue: 1850, orders: 22, visitors: 760, conversions: 22 },
    smartcey: { revenue: 1300, orders: 15, visitors: 660, conversions: 15 },
    letilo: { revenue: 550, orders: 28, visitors: 600, conversions: 28 }
  },
  {
    date: '2025-11-13',
    autopal: { revenue: 2050, orders: 24, visitors: 840, conversions: 24 },
    smartcey: { revenue: 1400, orders: 16, visitors: 730, conversions: 16 },
    letilo: { revenue: 650, orders: 33, visitors: 670, conversions: 33 }
  },
  {
    date: '2025-11-14',
    autopal: { revenue: 1400, orders: 16, visitors: 590, conversions: 16 },
    smartcey: { revenue: 900, orders: 11, visitors: 510, conversions: 11 },
    letilo: { revenue: 500, orders: 25, visitors: 470, conversions: 25 }
  },
  {
    date: '2025-11-15',
    autopal: { revenue: 1700, orders: 20, visitors: 700, conversions: 20 },
    smartcey: { revenue: 1150, orders: 14, visitors: 600, conversions: 14 },
    letilo: { revenue: 500, orders: 25, visitors: 560, conversions: 25 }
  },
  {
    date: '2025-11-16',
    autopal: { revenue: 1750, orders: 21, visitors: 720, conversions: 21 },
    smartcey: { revenue: 1200, orders: 14, visitors: 630, conversions: 14 },
    letilo: { revenue: 550, orders: 28, visitors: 580, conversions: 28 }
  },
  {
    date: '2025-11-17',
    autopal: { revenue: 1500, orders: 18, visitors: 620, conversions: 18 },
    smartcey: { revenue: 1000, orders: 12, visitors: 540, conversions: 12 },
    letilo: { revenue: 500, orders: 25, visitors: 500, conversions: 25 }
  },
  {
    date: '2025-11-18',
    autopal: { revenue: 1850, orders: 22, visitors: 760, conversions: 22 },
    smartcey: { revenue: 1300, orders: 15, visitors: 660, conversions: 15 },
    letilo: { revenue: 550, orders: 28, visitors: 600, conversions: 28 }
  },
  {
    date: '2025-11-19',
    autopal: { revenue: 1950, orders: 23, visitors: 790, conversions: 23 },
    smartcey: { revenue: 1300, orders: 15, visitors: 690, conversions: 15 },
    letilo: { revenue: 650, orders: 33, visitors: 630, conversions: 33 }
  },
  {
    date: '2025-11-20',
    autopal: { revenue: 1700, orders: 20, visitors: 700, conversions: 20 },
    smartcey: { revenue: 1150, orders: 14, visitors: 600, conversions: 14 },
    letilo: { revenue: 500, orders: 25, visitors: 560, conversions: 25 }
  },
];

/**
 * Sub-project detailed metrics (using real domain IDs)
 */
export const mockSubProjectMetrics: Record<string, any[]> = {
  'carplayhacks-com': [
    { date: '2025-11-01', revenue: 750, orders: 9, visitors: 310, conversions: 9 },
    { date: '2025-11-02', revenue: 875, orders: 11, visitors: 360, conversions: 11 },
    { date: '2025-11-03', revenue: 675, orders: 8, visitors: 285, conversions: 8 },
    { date: '2025-11-04', revenue: 825, orders: 10, visitors: 340, conversions: 10 },
    { date: '2025-11-05', revenue: 925, orders: 11, visitors: 380, conversions: 11 },
    { date: '2025-11-06', revenue: 700, orders: 8, visitors: 295, conversions: 8 },
    { date: '2025-11-07', revenue: 850, orders: 10, visitors: 350, conversions: 10 },
    { date: '2025-11-08', revenue: 975, orders: 12, visitors: 395, conversions: 12 },
    { date: '2025-11-09', revenue: 750, orders: 9, visitors: 310, conversions: 9 },
    { date: '2025-11-10', revenue: 875, orders: 11, visitors: 360, conversions: 11 },
    { date: '2025-11-11', revenue: 800, orders: 10, visitors: 330, conversions: 10 },
    { date: '2025-11-12', revenue: 925, orders: 11, visitors: 380, conversions: 11 },
    { date: '2025-11-13', revenue: 1025, orders: 12, visitors: 420, conversions: 12 },
    { date: '2025-11-14', revenue: 700, orders: 8, visitors: 295, conversions: 8 },
    { date: '2025-11-15', revenue: 850, orders: 10, visitors: 350, conversions: 10 },
    { date: '2025-11-16', revenue: 875, orders: 11, visitors: 360, conversions: 11 },
    { date: '2025-11-17', revenue: 750, orders: 9, visitors: 310, conversions: 9 },
    { date: '2025-11-18', revenue: 925, orders: 11, visitors: 380, conversions: 11 },
    { date: '2025-11-19', revenue: 975, orders: 12, visitors: 395, conversions: 12 },
    { date: '2025-11-20', revenue: 850, orders: 10, visitors: 350, conversions: 10 },
  ],
  'screen2auto-com': [
    { date: '2025-11-01', revenue: 450, orders: 5, visitors: 186, conversions: 5 },
    { date: '2025-11-02', revenue: 525, orders: 6, visitors: 216, conversions: 6 },
    { date: '2025-11-03', revenue: 405, orders: 5, visitors: 171, conversions: 5 },
    { date: '2025-11-04', revenue: 495, orders: 6, visitors: 204, conversions: 6 },
    { date: '2025-11-05', revenue: 555, orders: 7, visitors: 228, conversions: 7 },
    { date: '2025-11-06', revenue: 420, orders: 5, visitors: 177, conversions: 5 },
    { date: '2025-11-07', revenue: 510, orders: 6, visitors: 210, conversions: 6 },
    { date: '2025-11-08', revenue: 585, orders: 7, visitors: 237, conversions: 7 },
    { date: '2025-11-09', revenue: 450, orders: 5, visitors: 186, conversions: 5 },
    { date: '2025-11-10', revenue: 525, orders: 6, visitors: 216, conversions: 6 },
    { date: '2025-11-11', revenue: 480, orders: 6, visitors: 198, conversions: 6 },
    { date: '2025-11-12', revenue: 555, orders: 7, visitors: 228, conversions: 7 },
    { date: '2025-11-13', revenue: 615, orders: 7, visitors: 252, conversions: 7 },
    { date: '2025-11-14', revenue: 420, orders: 5, visitors: 177, conversions: 5 },
    { date: '2025-11-15', revenue: 510, orders: 6, visitors: 210, conversions: 6 },
    { date: '2025-11-16', revenue: 525, orders: 6, visitors: 216, conversions: 6 },
    { date: '2025-11-17', revenue: 450, orders: 5, visitors: 186, conversions: 5 },
    { date: '2025-11-18', revenue: 555, orders: 7, visitors: 228, conversions: 7 },
    { date: '2025-11-19', revenue: 585, orders: 7, visitors: 237, conversions: 7 },
    { date: '2025-11-20', revenue: 510, orders: 6, visitors: 210, conversions: 6 },
  ],
  'wheelpal-app': [
    { date: '2025-11-01', revenue: 300, orders: 4, visitors: 124, conversions: 4 },
    { date: '2025-11-02', revenue: 350, orders: 4, visitors: 144, conversions: 4 },
    { date: '2025-11-03', revenue: 270, orders: 3, visitors: 114, conversions: 3 },
    { date: '2025-11-04', revenue: 330, orders: 4, visitors: 136, conversions: 4 },
    { date: '2025-11-05', revenue: 370, orders: 4, visitors: 152, conversions: 4 },
    { date: '2025-11-06', revenue: 280, orders: 3, visitors: 118, conversions: 3 },
    { date: '2025-11-07', revenue: 340, orders: 4, visitors: 140, conversions: 4 },
    { date: '2025-11-08', revenue: 390, orders: 4, visitors: 158, conversions: 4 },
    { date: '2025-11-09', revenue: 300, orders: 4, visitors: 124, conversions: 4 },
    { date: '2025-11-10', revenue: 350, orders: 4, visitors: 144, conversions: 4 },
    { date: '2025-11-11', revenue: 320, orders: 3, visitors: 132, conversions: 3 },
    { date: '2025-11-12', revenue: 370, orders: 4, visitors: 152, conversions: 4 },
    { date: '2025-11-13', revenue: 410, orders: 5, visitors: 168, conversions: 5 },
    { date: '2025-11-14', revenue: 280, orders: 3, visitors: 118, conversions: 3 },
    { date: '2025-11-15', revenue: 340, orders: 4, visitors: 140, conversions: 4 },
    { date: '2025-11-16', revenue: 350, orders: 4, visitors: 144, conversions: 4 },
    { date: '2025-11-17', revenue: 300, orders: 4, visitors: 124, conversions: 4 },
    { date: '2025-11-18', revenue: 370, orders: 4, visitors: 152, conversions: 4 },
    { date: '2025-11-19', revenue: 390, orders: 4, visitors: 158, conversions: 4 },
    { date: '2025-11-20', revenue: 340, orders: 4, visitors: 140, conversions: 4 },
  ],
  'addtohomekit-com': [
    { date: '2025-11-01', revenue: 600, orders: 7, visitors: 324, conversions: 7 },
    { date: '2025-11-02', revenue: 720, orders: 8, visitors: 378, conversions: 8 },
    { date: '2025-11-03', revenue: 540, orders: 7, visitors: 288, conversions: 7 },
    { date: '2025-11-04', revenue: 660, orders: 8, visitors: 348, conversions: 8 },
    { date: '2025-11-05', revenue: 780, orders: 9, visitors: 396, conversions: 9 },
    { date: '2025-11-06', revenue: 540, orders: 7, visitors: 306, conversions: 7 },
    { date: '2025-11-07', revenue: 690, orders: 8, visitors: 360, conversions: 8 },
    { date: '2025-11-08', revenue: 780, orders: 9, visitors: 414, conversions: 9 },
    { date: '2025-11-09', revenue: 600, orders: 7, visitors: 324, conversions: 7 },
    { date: '2025-11-10', revenue: 720, orders: 8, visitors: 378, conversions: 8 },
    { date: '2025-11-11', revenue: 660, orders: 8, visitors: 342, conversions: 8 },
    { date: '2025-11-12', revenue: 780, orders: 9, visitors: 396, conversions: 9 },
    { date: '2025-11-13', revenue: 840, orders: 10, visitors: 438, conversions: 10 },
    { date: '2025-11-14', revenue: 540, orders: 7, visitors: 306, conversions: 7 },
    { date: '2025-11-15', revenue: 690, orders: 8, visitors: 360, conversions: 8 },
    { date: '2025-11-16', revenue: 720, orders: 8, visitors: 378, conversions: 8 },
    { date: '2025-11-17', revenue: 600, orders: 7, visitors: 324, conversions: 7 },
    { date: '2025-11-18', revenue: 780, orders: 9, visitors: 396, conversions: 9 },
    { date: '2025-11-19', revenue: 780, orders: 9, visitors: 414, conversions: 9 },
    { date: '2025-11-20', revenue: 690, orders: 8, visitors: 360, conversions: 8 },
  ],
  'athbridge-com': [
    { date: '2025-11-01', revenue: 400, orders: 5, visitors: 216, conversions: 5 },
    { date: '2025-11-02', revenue: 480, orders: 6, visitors: 252, conversions: 6 },
    { date: '2025-11-03', revenue: 360, orders: 4, visitors: 192, conversions: 4 },
    { date: '2025-11-04', revenue: 440, orders: 5, visitors: 232, conversions: 5 },
    { date: '2025-11-05', revenue: 520, orders: 6, visitors: 264, conversions: 6 },
    { date: '2025-11-06', revenue: 360, orders: 4, visitors: 204, conversions: 4 },
    { date: '2025-11-07', revenue: 460, orders: 6, visitors: 240, conversions: 6 },
    { date: '2025-11-08', revenue: 520, orders: 6, visitors: 276, conversions: 6 },
    { date: '2025-11-09', revenue: 400, orders: 5, visitors: 216, conversions: 5 },
    { date: '2025-11-10', revenue: 480, orders: 6, visitors: 252, conversions: 6 },
    { date: '2025-11-11', revenue: 440, orders: 5, visitors: 228, conversions: 5 },
    { date: '2025-11-12', revenue: 520, orders: 6, visitors: 264, conversions: 6 },
    { date: '2025-11-13', revenue: 560, orders: 6, visitors: 292, conversions: 6 },
    { date: '2025-11-14', revenue: 360, orders: 4, visitors: 204, conversions: 4 },
    { date: '2025-11-15', revenue: 460, orders: 6, visitors: 240, conversions: 6 },
    { date: '2025-11-16', revenue: 480, orders: 6, visitors: 252, conversions: 6 },
    { date: '2025-11-17', revenue: 400, orders: 5, visitors: 216, conversions: 5 },
    { date: '2025-11-18', revenue: 520, orders: 6, visitors: 264, conversions: 6 },
    { date: '2025-11-19', revenue: 520, orders: 6, visitors: 276, conversions: 6 },
    { date: '2025-11-20', revenue: 460, orders: 6, visitors: 240, conversions: 6 },
  ],
  'letilo-women': [
    { date: '2025-11-01', revenue: 250, orders: 12, visitors: 250, conversions: 12 },
    { date: '2025-11-02', revenue: 275, orders: 14, visitors: 290, conversions: 14 },
    { date: '2025-11-03', revenue: 200, orders: 10, visitors: 220, conversions: 10 },
    { date: '2025-11-04', revenue: 250, orders: 12, visitors: 260, conversions: 12 },
    { date: '2025-11-05', revenue: 275, orders: 14, visitors: 300, conversions: 14 },
    { date: '2025-11-06', revenue: 250, orders: 12, visitors: 235, conversions: 12 },
    { date: '2025-11-07', revenue: 250, orders: 12, visitors: 280, conversions: 12 },
    { date: '2025-11-08', revenue: 325, orders: 16, visitors: 315, conversions: 16 },
    { date: '2025-11-09', revenue: 250, orders: 12, visitors: 250, conversions: 12 },
    { date: '2025-11-10', revenue: 275, orders: 14, visitors: 290, conversions: 14 },
    { date: '2025-11-11', revenue: 250, orders: 12, visitors: 270, conversions: 12 },
    { date: '2025-11-12', revenue: 275, orders: 14, visitors: 300, conversions: 14 },
    { date: '2025-11-13', revenue: 325, orders: 16, visitors: 335, conversions: 16 },
    { date: '2025-11-14', revenue: 250, orders: 12, visitors: 235, conversions: 12 },
    { date: '2025-11-15', revenue: 250, orders: 12, visitors: 280, conversions: 12 },
    { date: '2025-11-16', revenue: 275, orders: 14, visitors: 290, conversions: 14 },
    { date: '2025-11-17', revenue: 250, orders: 12, visitors: 250, conversions: 12 },
    { date: '2025-11-18', revenue: 275, orders: 14, visitors: 300, conversions: 14 },
    { date: '2025-11-19', revenue: 325, orders: 16, visitors: 315, conversions: 16 },
    { date: '2025-11-20', revenue: 250, orders: 12, visitors: 280, conversions: 12 },
  ],
  'letilo-men': [
    { date: '2025-11-01', revenue: 150, orders: 8, visitors: 150, conversions: 8 },
    { date: '2025-11-02', revenue: 165, orders: 8, visitors: 174, conversions: 8 },
    { date: '2025-11-03', revenue: 120, orders: 6, visitors: 132, conversions: 6 },
    { date: '2025-11-04', revenue: 150, orders: 8, visitors: 156, conversions: 8 },
    { date: '2025-11-05', revenue: 165, orders: 8, visitors: 180, conversions: 8 },
    { date: '2025-11-06', revenue: 150, orders: 8, visitors: 141, conversions: 8 },
    { date: '2025-11-07', revenue: 150, orders: 8, visitors: 168, conversions: 8 },
    { date: '2025-11-08', revenue: 195, orders: 10, visitors: 189, conversions: 10 },
    { date: '2025-11-09', revenue: 150, orders: 8, visitors: 150, conversions: 8 },
    { date: '2025-11-10', revenue: 165, orders: 8, visitors: 174, conversions: 8 },
    { date: '2025-11-11', revenue: 150, orders: 8, visitors: 162, conversions: 8 },
    { date: '2025-11-12', revenue: 165, orders: 8, visitors: 180, conversions: 8 },
    { date: '2025-11-13', revenue: 195, orders: 10, visitors: 201, conversions: 10 },
    { date: '2025-11-14', revenue: 150, orders: 8, visitors: 141, conversions: 8 },
    { date: '2025-11-15', revenue: 150, orders: 8, visitors: 168, conversions: 8 },
    { date: '2025-11-16', revenue: 165, orders: 8, visitors: 174, conversions: 8 },
    { date: '2025-11-17', revenue: 150, orders: 8, visitors: 150, conversions: 8 },
    { date: '2025-11-18', revenue: 165, orders: 8, visitors: 180, conversions: 8 },
    { date: '2025-11-19', revenue: 195, orders: 10, visitors: 189, conversions: 10 },
    { date: '2025-11-20', revenue: 150, orders: 8, visitors: 168, conversions: 8 },
  ],
  'letilo-accessories': [
    { date: '2025-11-01', revenue: 100, orders: 5, visitors: 100, conversions: 5 },
    { date: '2025-11-02', revenue: 110, orders: 6, visitors: 116, conversions: 6 },
    { date: '2025-11-03', revenue: 80, orders: 4, visitors: 88, conversions: 4 },
    { date: '2025-11-04', revenue: 100, orders: 5, visitors: 104, conversions: 5 },
    { date: '2025-11-05', revenue: 110, orders: 6, visitors: 120, conversions: 6 },
    { date: '2025-11-06', revenue: 100, orders: 5, visitors: 94, conversions: 5 },
    { date: '2025-11-07', revenue: 100, orders: 5, visitors: 112, conversions: 5 },
    { date: '2025-11-08', revenue: 130, orders: 7, visitors: 126, conversions: 7 },
    { date: '2025-11-09', revenue: 100, orders: 5, visitors: 100, conversions: 5 },
    { date: '2025-11-10', revenue: 110, orders: 6, visitors: 116, conversions: 6 },
    { date: '2025-11-11', revenue: 100, orders: 5, visitors: 108, conversions: 5 },
    { date: '2025-11-12', revenue: 110, orders: 6, visitors: 120, conversions: 6 },
    { date: '2025-11-13', revenue: 130, orders: 7, visitors: 134, conversions: 7 },
    { date: '2025-11-14', revenue: 100, orders: 5, visitors: 94, conversions: 5 },
    { date: '2025-11-15', revenue: 100, orders: 5, visitors: 112, conversions: 5 },
    { date: '2025-11-16', revenue: 110, orders: 6, visitors: 116, conversions: 6 },
    { date: '2025-11-17', revenue: 100, orders: 5, visitors: 100, conversions: 5 },
    { date: '2025-11-18', revenue: 110, orders: 6, visitors: 120, conversions: 6 },
    { date: '2025-11-19', revenue: 130, orders: 7, visitors: 126, conversions: 7 },
    { date: '2025-11-20', revenue: 100, orders: 5, visitors: 112, conversions: 5 },
  ],
};
