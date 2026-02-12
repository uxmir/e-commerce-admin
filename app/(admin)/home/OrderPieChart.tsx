"use client"

import { TrendingUp } from "lucide-react"
import { Pie, PieChart, Sector } from "recharts"
import { type PieSectorDataItem } from "recharts/types/polar/Pie"

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
  { category: "electronics", sales: 450, fill: "var(--color-electronics)" },
  { category: "fashion", sales: 380, fill: "var(--color-fashion)" },
  { category: "accessories", sales: 240, fill: "var(--color-accessories)" },
]

const chartConfig = {
  sales: {
    label: "Total Sales",
  },
  electronics: {
    label: "Electronics",
    color: "#38BDF8",
  },
  fashion: {
    label: "Fashion",
    color: "#34D399", 
  },
  accessories: {
    label: "Accessories",
    color: "#FBBF24",
  },
} satisfies ChartConfig

export function OrderPieChart() {
  return (
    <Card className="flex flex-col border-none shadow-none bg-white dark:bg-[#2d275f]  px-5 py-5">
      <CardHeader className="items-center pb-0 px-0">
        <CardTitle className="text-lg font-bold">Category Distribution</CardTitle>
        <CardDescription>Sales Share - 2025</CardDescription>
      </CardHeader>
      <CardContent className="flex-1 pb-0 px-0">
        <ChartContainer
          config={chartConfig}
          className="mx-auto aspect-square "
        >
          <PieChart>
            <ChartTooltip
              cursor={false}
              content={
                <ChartTooltipContent 
                   hideLabel 
                   className="bg-white text-black border-gray-200 shadow-md"
                />
              }
            />
            <Pie
              data={chartData}
              dataKey="sales"
              nameKey="category"
              innerRadius={0}
              strokeWidth={8}
              stroke="transparent" 
              activeIndex={0}
              activeShape={({
                outerRadius = 0,
                ...props
              }: PieSectorDataItem) => (
                <Sector {...props} outerRadius={outerRadius + 12} />
              )}
            />
          </PieChart>
        </ChartContainer>
      </CardContent>
      <CardFooter className="flex-col gap-2 text-sm px-0 pt-4">
        <div className="flex items-center gap-2 leading-none font-medium">
          Top performer: Electronics <TrendingUp className="h-4 w-4 text-emerald-500" />
        </div>
        <div className="text-center">
          Showing sales distribution across top 3 categories
        </div>
      </CardFooter>
    </Card>
  )
}