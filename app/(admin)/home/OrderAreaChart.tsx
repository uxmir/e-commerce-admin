"use client"
import { TrendingUp } from "lucide-react"
import { Area, AreaChart, CartesianGrid, XAxis, YAxis } from "recharts"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../../components/ui/chart/card"
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
  type ChartConfig,
} from "../../components/ui/chart/chart"

const chartData = [
  { month: "January", delivered: 186, pending: 80 },
  { month: "February", delivered: 305, pending: 200 },
  { month: "March", delivered: 237, pending: 120 },
  { month: "April", delivered: 73, pending: 190 },
  { month: "May", delivered: 209, pending: 130 },
  { month: "June", delivered: 214, pending: 140 },
]

const chartConfig = {
  delivered: {
    label: "Delivered",
    color: "#34D399", 
  },
  pending: {
    label: "Pending",
    color: "#38BDF8",
  },
} satisfies ChartConfig

export function OrderAreaChart() { 
  return (
    <Card className="bg-white dark:bg-[#2d275f] px-5 py-5 border-none shadow-none">
      <CardHeader className="px-0">
        <CardTitle>Order Statistics</CardTitle>
        <CardDescription>January - June 2025</CardDescription>
      </CardHeader>
      <CardContent className="px-0">
        <ChartContainer 
          config={chartConfig}
          className="w-full lg:h-[380px] xl:h-[425px]"
        >
          <AreaChart
            accessibilityLayer
            data={chartData}
            margin={{
              left: 12,
              right: 12,
            }}
          >
            <CartesianGrid vertical={false} strokeDasharray="3 3" />
            <XAxis
              dataKey="month"
              tickLine={false}
              axisLine={false}
              tickMargin={10}
              tickFormatter={(value) => value.slice(0, 3)}
            />
            <YAxis hide /> 
            
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent indicator="dot" />}
            />

            {/* Delivered Area (Greenish) */}
            <Area
              dataKey="delivered"
              type="monotone" 
              fill="var(--color-delivered)"
              fillOpacity={0.4}
              stroke="var(--color-delivered)"
              stackId="a" 
            />

            {/* Pending Area (Sky Blue) */}
            <Area
              dataKey="pending"
              type="monotone"
              fill="var(--color-pending)"
              fillOpacity={0.4}
              stroke="var(--color-pending)"
              stackId="a"
            />
          </AreaChart>
        </ChartContainer>
      </CardContent>
      <CardFooter className="flex-col items-start gap-2 text-sm px-0 pt-4">
        <div className="flex gap-2 leading-none font-medium">
          Trending up by 5.2% this month <TrendingUp className="h-4 w-4" />
        </div>
        <div className="text-muted-foreground leading-none">
          Showing total order status for the last 6 months
        </div>
      </CardFooter>
    </Card>
  )
}