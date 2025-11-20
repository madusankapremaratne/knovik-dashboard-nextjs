# Knovik Owner Dashboard

A modern, sleek Next.js-based real-time income tracking and analytics dashboard for Knovik Private Limited. Track revenue from all projects (AutoPal, Smartcey, Letilo) across multiple e-commerce platforms (Shopify and WooCommerce).

## 🎯 Features

### Dashboard Capabilities
- **Overall Income Tracking**: Real-time total income across all projects and platforms
- **Multi-Platform Support**: Integrated Shopify and WooCommerce data
- **Project Breakdown**: Revenue distribution across AutoPal, Smartcey, and Letilo
- **Flexible Time Periods**: 
  - Yesterday
  - Last 7 Days
  - Month to Date (MTD)
  - Last Month
  - Custom Date Range

### Data Visualization
- **Line Chart**: Income trends comparing Shopify vs WooCommerce
- **Pie Chart**: Project revenue distribution with donut format
- **Bar Chart**: Daily platform comparison
- **Stat Cards**: Key metrics with trend indicators
- **Responsive Design**: Works seamlessly on desktop, tablet, and mobile

### Technical Features
- **Modern UI**: Sleek dark theme with gradient backgrounds
- **Real-time Updates**: Designed for live data integration
- **Type-Safe**: Full TypeScript support
- **Performance Optimized**: Uses React hooks and memoization
- **Accessibility**: WCAG compliant with semantic HTML

## 🛠️ Tech Stack

- **Framework**: Next.js 14+ (React 18)
- **Styling**: Tailwind CSS 3.3+
- **Charts**: Recharts 2.10+
- **Icons**: Lucide React
- **Language**: TypeScript
- **Database Ready**: Prepared for API integration

## 📋 Prerequisites

- Node.js >= 18.0.0
- npm or yarn package manager

## 🚀 Quick Start

### 1. Installation

```bash
# Clone or download the project
cd knovik-owner-dashboard

# Install dependencies
npm install
# or
yarn install
```

### 2. Development Server

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### 3. Production Build

```bash
npm run build
npm start
# or
yarn build
yarn start
```

## 📁 Project Structure

```
knovik-owner-dashboard/
├── app/
│   ├── layout.tsx           # Root layout with metadata
│   ├── page.tsx             # Main dashboard page
│   └── globals.css          # Global styles and animations
├── components/
│   ├── StatCard.tsx         # Key metric cards component
│   └── DateRangePicker.tsx  # Custom date range selector
├── lib/
│   ├── mockData.ts          # Mock data for development
│   └── utils.ts             # Utility functions
├── package.json             # Dependencies and scripts
├── tailwind.config.js       # Tailwind configuration
├── tsconfig.json            # TypeScript configuration
├── postcss.config.js        # PostCSS configuration
└── next.config.js           # Next.js configuration
```

## 🔌 API Integration Guide

### Shopify Integration

To integrate actual Shopify data, update the `mockIncomeData` in `lib/mockData.ts`:

```typescript
// Example API call to Shopify
async function fetchShopifyData(startDate: Date, endDate: Date) {
  const response = await fetch(`${SHOPIFY_API_ENDPOINT}/orders`, {
    headers: {
      'X-Shopify-Access-Token': SHOPIFY_API_TOKEN,
    },
    body: JSON.stringify({
      created_at_min: startDate.toISOString(),
      created_at_max: endDate.toISOString(),
    }),
  });
  
  const data = await response.json();
  // Transform and return data
  return data.orders.map(order => ({
    date: new Date(order.created_at),
    shopify: order.total_price,
  }));
}
```

### WooCommerce Integration

```typescript
// Example API call to WooCommerce
async function fetchWooCommerceData(startDate: Date, endDate: Date) {
  const response = await fetch(
    `${WOOCOMMERCE_API_URL}/orders?after=${startDate}&before=${endDate}`,
    {
      headers: {
        Authorization: `Bearer ${WOOCOMMERCE_API_TOKEN}`,
      },
    }
  );
  
  const data = await response.json();
  // Transform and return data
  return data.map(order => ({
    date: new Date(order.date_created),
    woocommerce: parseFloat(order.total),
  }));
}
```

### Real-time Data Updates

Replace mock data with API calls in `app/page.tsx`:

```typescript
// In the useMemo hooks, replace with actual API calls
const filteredData = useMemo(() => {
  const dateRange = getDateRange(period, customDateRange);
  
  // Fetch from APIs
  const shopifyData = await fetchShopifyData(
    dateRange.start,
    dateRange.end
  );
  const wooCommerceData = await fetchWooCommerceData(
    dateRange.start,
    dateRange.end
  );
  
  // Merge and sort data
  return mergeDataByDate(shopifyData, wooCommerceData);
}, [period, customDateRange]);
```

## 🎨 Customization

### Color Scheme

Edit `tailwind.config.js` to customize colors:

```javascript
theme: {
  extend: {
    colors: {
      primary: '#3B82F6',    // Blue
      secondary: '#10B981',   // Green
      tertiary: '#F59E0B',    // Amber
    }
  }
}
```

### Project Names and Colors

Update project colors in `app/page.tsx`:

```typescript
const projectTotals = [
  { name: 'AutoPal', value: projects.autopal, fill: '#3B82F6' },
  { name: 'Smartcey', value: projects.smartcey, fill: '#10B981' },
  { name: 'Letilo', value: projects.letilo, fill: '#F59E0B' },
];
```

### Chart Styles

Customize chart appearance in the chart components:

```typescript
<LineChart data={chartData}>
  <CartesianGrid strokeDasharray="3 3" stroke="#334155" />
  <XAxis stroke="#64748b" style={{ fontSize: '12px' }} />
  // ... customize other chart properties
</LineChart>
```

## 📊 Mock Data Structure

The dashboard uses mock data for development. Data structure:

### Income Data

```typescript
{
  date: string;        // ISO date format (YYYY-MM-DD)
  shopify: number;     // Shopify revenue
  woocommerce: number; // WooCommerce revenue
  total: number;       // Combined revenue
}
```

### Project Breakdown

```typescript
{
  date: string;      // ISO date format
  autopal: number;   // AutoPal revenue
  smartcey: number;  // Smartcey revenue
  letilo: number;    // Letilo revenue
}
```

## 🔐 Security Considerations

When integrating real APIs:

1. **Store API Keys Securely**
   - Use environment variables (.env.local)
   - Never commit keys to version control
   - Use environment variables in deployment

2. **API Rate Limiting**
   - Implement caching with SWR or React Query
   - Add request throttling
   - Monitor API usage

3. **Data Validation**
   - Validate all API responses
   - Sanitize data before display
   - Handle error cases gracefully

4. **Access Control**
   - Add authentication for dashboard access
   - Implement role-based access control
   - Log all data access

## 📈 Performance Optimization

- **Code Splitting**: Next.js automatically splits code
- **Image Optimization**: Optimized image loading
- **Memoization**: Uses React.useMemo for expensive calculations
- **Caching**: Prepare for API response caching
- **Bundle Size**: Tree-shaking and minification

## 🧪 Testing

```bash
# Type checking
npm run type-check

# ESLint
npm run lint
```

## 🚀 Deployment

### Vercel (Recommended)

```bash
# Push to GitHub and deploy via Vercel
# https://vercel.com/new
```

### Docker

```dockerfile
FROM node:18-alpine
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build
EXPOSE 3000
CMD ["npm", "start"]
```

### Environment Variables

Create `.env.local`:

```env
NEXT_PUBLIC_API_URL=https://api.knovik.com
SHOPIFY_API_ENDPOINT=https://your-store.myshopify.com/admin/api/2024-01
SHOPIFY_API_TOKEN=your_token_here
WOOCOMMERCE_API_URL=https://your-site.com/wp-json/wc/v3
WOOCOMMERCE_API_TOKEN=your_token_here
```

## 📱 Responsive Design

The dashboard is fully responsive:

- **Desktop**: Full feature display with optimized layouts
- **Tablet**: Adjusted grid layouts and smaller padding
- **Mobile**: Single column layout with touch-friendly buttons

## 🤝 Contributing

When adding features:

1. Follow the existing code structure
2. Use TypeScript for type safety
3. Add proper documentation
4. Test responsive design
5. Maintain accessibility standards

## 📝 License

This project is proprietary to Knovik Private Limited.

## 📞 Support & Integration

For Shopify, WooCommerce, or custom API integration:

1. Review the API integration guides above
2. Set up environment variables
3. Replace mock data with actual API calls
4. Test thoroughly before production

## 🎯 Future Enhancements

- [ ] Real-time WebSocket updates
- [ ] Export reports to PDF/Excel
- [ ] Advanced filtering and segmentation
- [ ] Predictive analytics
- [ ] Multi-user dashboard
- [ ] Mobile app version
- [ ] Automated alerts and notifications
- [ ] A/B testing integration

## 📚 Resources

- [Next.js Documentation](https://nextjs.org/docs)
- [React Documentation](https://react.dev)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [Recharts Documentation](https://recharts.org)
- [Shopify API Documentation](https://shopify.dev/api)
- [WooCommerce API Documentation](https://woocommerce.com/document/rest-api/)

---

**Version**: 1.0.0  
**Last Updated**: November 20, 2025  
**Developed for**: Knovik Private Limited
