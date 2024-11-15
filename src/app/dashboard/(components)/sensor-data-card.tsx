"use client";

import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
import { cn } from "@/lib/utils";
import { Loader2 } from "lucide-react";
import React from "react";
import { Bar, BarChart, XAxis } from "recharts";

type SensorDataCardProps = {
  title: string;
  icon: React.ElementType;
  currentValue: number;
  chartData: {
    timestamp: string;
    value: number;
  }[];
};

const SensorDataCard = ({
  title,
  icon: IconComponent,
  currentValue,
  chartData,
}: SensorDataCardProps) => {
  const chartConfig = {
    value: {
      label: `Avg. ${title}`,
      color: "#6366f1",
    },
  } satisfies ChartConfig;

  return (
    <div className="space-y-4 rounded-md border bg-white px-6 py-4 shadow-sm dark:bg-background">
      <div className="hover:text-gray-1200 flex cursor-pointer items-center space-x-3 opacity-80 transition hover:opacity-100">
        <div className="w-min rounded-md bg-secondary p-1.5 text-muted-foreground">
          <IconComponent size={16} />
        </div>
        <span>{title}</span>
      </div>
      <div className="flex flex-col gap-y-4">
        <div>
          <h3 className="text-sm text-muted-foreground">Avg. {title}</h3>
          <h5 className="font-medium text-foreground">{currentValue} mg/kg</h5>
        </div>
        {/* Charts */}
        {chartData ? (
          <ChartContainer
            config={chartConfig}
            className={cn("min-h-[200px] w-full")}
          >
            <BarChart accessibilityLayer data={chartData}>
              <XAxis
                dataKey="timestamp"
                tickLine={false}
                tickMargin={10}
                axisLine={false}
                tickFormatter={(value, index) => {
                  const first = 0;
                  const last = chartData.length - 1;

                  if (index === first || index === last) {
                    const date = new Date(value);
                    return date.toLocaleDateString("en-US", {
                      month: "short",
                      day: "numeric",
                    });
                  }

                  return "";
                }}
              />

              <ChartTooltip
                content={
                  <ChartTooltipContent
                    className="w-[150px]"
                    nameKey="value"
                    labelFormatter={(value) => {
                      return new Date(value).toLocaleDateString("en-US", {
                        month: "short",
                        day: "numeric",
                      });
                    }}
                  />
                }
              />
              <Bar dataKey="value" fill="#6366f1" radius={2} />
            </BarChart>
          </ChartContainer>
        ) : (
          <div className="flex h-44 w-full items-center justify-center rounded-md border border-dashed border-slate-500/30">
            <div className="flex flex-col items-center text-[10px] leading-tight text-muted-foreground">
              <Loader2
                size={18}
                className="mb-2 animate-spin delay-1000 duration-1000"
              />
              <span>No data to show</span>
              <span>It may take up to 24 hrs for data to show</span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default SensorDataCard;
