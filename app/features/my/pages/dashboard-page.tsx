import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from '~/common/components/ui/card';
import type { Route } from './+types/dashboard-page';
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
  type ChartConfig,
} from '~/common/components/ui/chart';
import { CartesianGrid, Line } from 'recharts';
import { XAxis } from 'recharts';
import { LineChart } from 'recharts';

export function meta({}: Route.MetaFunction) {
  return [
    { title: '대시보드 | Wemake' },
    { name: 'description', content: '내 대시보드' },
  ];
}

const chartData = [
  { month: 'January', views: 186 },
  { month: 'February', views: 305 },
  { month: 'March', views: 237 },
  { month: 'April', views: 73 },
  { month: 'May', views: 209 },
  { month: 'June', views: 214 },
];
const chartConfig = {
  views: {
    label: 'Views',
    color: 'hsl(var(--chart-1))',
  },
} satisfies ChartConfig;

export default function DashboardPage({}: Route.ComponentProps) {
  return (
    <div className="space-y-5">
      <h1>대시보드</h1>
      <Card className="w-1/2">
        <CardHeader>
          <CardTitle>Profile views</CardTitle>
        </CardHeader>
        <CardContent>
          <ChartContainer config={chartConfig}>
            <LineChart
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

              <Line
                dataKey="views"
                type="natural"
                stroke="var(--color-views)"
                strokeWidth={2}
                dot={false}
              />
              <ChartTooltip
                cursor={false}
                content={<ChartTooltipContent hideLabel />}
              />
            </LineChart>
          </ChartContainer>
        </CardContent>
      </Card>
    </div>
  );
}
