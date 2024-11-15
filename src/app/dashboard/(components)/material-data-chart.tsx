"use client";

import * as React from "react";
import { Apple, Nut, Salad, TrendingUp } from "lucide-react";
import { Label, Pie, PieChart, Sector } from "recharts";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  ChartConfig,
  ChartContainer,
  ChartLegend,
  ChartLegendContent,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
import { PieSectorDataItem } from "recharts/types/polar/Pie";

export const description = "A donut chart with text";

const chartData = [
  { category: "fruits", materials: 275, fill: "var(--color-fruits)" },
  { category: "vegetables", materials: 200, fill: "var(--color-vegetables)" },
  { category: "others", materials: 287, fill: "var(--color-others)" },
];

const chartConfig = {
  materials: {
    label: "Processed Materials",
  },
  fruits: {
    label: "Fruits",
    color: "hsl(var(--chart-fruits))",
    icon: Apple,
  },
  vegetables: {
    label: "Vegetables",
    color: "hsl(var(--chart-vegetables))",
    icon: Salad,
  },
  others: {
    label: "Others",
    color: "hsl(var(--chart-others))",
    icon: Nut,
  },
} satisfies ChartConfig;

function MaterialDataChart() {
  const totalMaterials = React.useMemo(() => {
    return chartData.reduce((acc, curr) => acc + curr.materials, 0);
  }, []);

  return (
    <Card className="p-0! flex h-full flex-col border-none bg-secondary/10 shadow-none">
      <CardHeader className="items-center pb-0">
        <CardTitle>Processed Materials Chart</CardTitle>
        <CardDescription>October - November 2024</CardDescription>
      </CardHeader>
      <CardContent className="flex-1 pb-0">
        <ChartContainer
          config={chartConfig}
          className="mx-auto aspect-square max-h-[300px]"
        >
          <PieChart>
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent hideLabel />}
            />
            <Pie
              data={chartData}
              dataKey="materials"
              nameKey="category"
              innerRadius={70}
              strokeWidth={5}
              activeIndex={0}
              activeShape={({
                outerRadius = 0,
                ...props
              }: PieSectorDataItem) => (
                <Sector {...props} outerRadius={outerRadius + 10} />
              )}
            >
              <Label
                content={({ viewBox }) => {
                  if (viewBox && "cx" in viewBox && "cy" in viewBox) {
                    return (
                      <text
                        x={viewBox.cx}
                        y={viewBox.cy}
                        textAnchor="middle"
                        dominantBaseline="middle"
                      >
                        <tspan
                          x={viewBox.cx}
                          y={viewBox.cy}
                          className="fill-foreground text-3xl font-bold"
                        >
                          {totalMaterials.toLocaleString()}
                        </tspan>
                        <tspan
                          x={viewBox.cx}
                          y={(viewBox.cy || 0) + 24}
                          className="fill-muted-foreground"
                        >
                          Total Materials
                        </tspan>
                      </text>
                    );
                  }
                }}
              />
            </Pie>
            <ChartLegend
              content={<ChartLegendContent nameKey="category" />}
              className="-translate-y-2 flex-wrap gap-2 [&>*]:basis-1/4 [&>*]:justify-center"
            />
          </PieChart>
        </ChartContainer>
      </CardContent>
      <CardFooter className="flex-col gap-2 text-sm">
        <div className="flex items-center gap-2 font-medium leading-none">
          Materials Breakdown in Vermicomposting
        </div>
        <div className="text-xs leading-none text-muted-foreground">
          Showing compostable materials by category: Fruits, Vegetables, Other
        </div>
      </CardFooter>
    </Card>
  );
}

export default MaterialDataChart;
