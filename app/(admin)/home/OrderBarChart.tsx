"use client"
import { TrendingUp } from "lucide-react"
import { Bar, BarChart, CartesianGrid, XAxis } from "recharts"

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
import { useLayout } from "@/app/features/SidebarProvider/SidebarProvider"

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

export function OrderBarChart() {
 const {sidebar} =useLayout()  
  return (
    <Card className="bg-white dark:bg-[#2d275f]  px-5 py-5 border-none">
      <CardHeader className="px-0">
        <CardTitle>Order Statistics</CardTitle>
        <CardDescription>January - June 2025</CardDescription>
      </CardHeader>
      <CardContent className="px-0">
        <ChartContainer 
        config={chartConfig}
        className={`w-full h-auto ${sidebar===true?'lg:h-[290px] xl:h-[350px] 2xl:h-[500px]':'lg:h-[370px] xl:h-[420px] 2xl:h-[580px]'}`}
        >
          <BarChart accessibilityLayer data={chartData}>
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey="month"
              tickLine={false}
              tickMargin={10}
              axisLine={false}
              tickFormatter={(value) => value.slice(0, 3)}
            />
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent indicator="dashed" />}
            />
            {/* Delivered Bar */}
            <Bar 
              dataKey="delivered" 
              fill="var(--color-delivered)" 
              height={12}
              radius={4}
            />
            {/* Pending Bar */}
            <Bar 
              dataKey="pending" 
              fill="var(--color-pending)" 
              height={12}
              radius={4} 
            />
          </BarChart>
        </ChartContainer>
      </CardContent>
      <CardFooter className="flex-col items-start gap-2 text-sm px-0">
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