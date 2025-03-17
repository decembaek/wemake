import type { Route } from './+types/dashboard-product-page';

import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from '~/common/components/ui/card';

import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
  type ChartConfig,
} from '~/common/components/ui/chart';
import { Area, AreaChart, CartesianGrid, Line } from 'recharts';
import { XAxis } from 'recharts';

export function meta({}: Route.MetaFunction) {
  return [
    { title: '내 제품 | Wemake' },
    { name: 'description', content: '내가 등록한 제품 관리' },
  ];
}

const chartData = [
  { month: 'January', views: 186, visitors: 100 },
  { month: 'February', views: 305, visitors: 35 },
  { month: 'March', views: 237, visitors: 56 },
  { month: 'April', views: 73, visitors: 66 },
  { month: 'May', views: 209, visitors: 100 },
  { month: 'June', views: 214, visitors: 133 },
];
const chartConfig = {
  views: {
    label: 'Page Views',
    color: 'hsl(var(--chart-1))',
  },
  visitors: {
    label: 'Visitors',
    color: 'hsl(var(--chart-2))',
  },
} satisfies ChartConfig;

export default function DashboardProductPage({}: Route.ComponentProps) {
  return (
    <div className="space-y-5">
      <h1>Analytics</h1>
      <Card className="w-1/2">
        <CardHeader>
          <CardTitle>Performance</CardTitle>
        </CardHeader>
        <CardContent>
          <ChartContainer config={chartConfig}>
            <AreaChart
              accessibilityLayer
              data={chartData}
              margin={{
                left: 12,
                right: 12,
              }}
            >
              <CartesianGrid vertical={false} />
              <XAxis
                dataKey="month"
                tickLine={false}
                axisLine={false}
                tickMargin={8}
                tickFormatter={(value) => value.slice(0, 3)}
              />

              <Area
                dataKey="views"
                type="natural"
                stroke="var(--color-views)"
                fill="var(--color-views)"
                strokeWidth={2}
                dot={false}
              />
              <Area
                dataKey="visitors"
                type="natural"
                stroke="var(--color-visitors)"
                fill="var(--color-visitors)"
                strokeWidth={2}
                dot={false}
              />
              <ChartTooltip
                cursor={false}
                wrapperStyle={{ minWidth: '200px' }}
                content={<ChartTooltipContent hideLabel />}
              />
            </AreaChart>
          </ChartContainer>
        </CardContent>
      </Card>
    </div>
  );
}
