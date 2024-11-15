"use client";

import {
  Select,
  SelectContent,
  SelectTrigger,
  SelectValue,
  SelectItem,
} from "@/components/ui/select";
import { cn } from "@/lib/utils";
import React from "react";
import SensorDataCard from "./sensor-data-card";
import {
  nitrogenData,
  phosphorusData,
  potassiumData,
} from "../(constant)/nitrogen-seed";
import {
  Banana,
  Bone,
  Droplet,
  Sun,
  Thermometer,
  ThermometerSun,
  Waves,
} from "lucide-react";

type Props = {};

const DataContainer = (props: Props) => {
  return (
    <div className="mx-6">
      <div className="space-y-6">
        <div className="flex w-min flex-row items-center gap-x-2">
          <Select defaultValue="60min">
            <SelectTrigger className={cn("h-6 py-1 text-xs leading-none")}>
              <SelectValue placeholder="" />
            </SelectTrigger>
            <SelectContent className={cn("text-xs")}>
              <SelectItem value="60min" className={cn("text-xs")}>
                60 minutes
              </SelectItem>
              <SelectItem value="24hrs" className={cn("text-xs")}>
                24 hours
              </SelectItem>
              <SelectItem value="7days" className={cn("text-xs")}>
                7 days
              </SelectItem>
            </SelectContent>
          </Select>
          <span className="text-nowrap text-xs text-muted-foreground">
            Statistics for the past 60 minutes
          </span>
        </div>
        {/* Sensor Values */}
        <div className="grid grid-cols-1 md:grid-cols-2 md:gap-4 lg:grid-cols-3">
          <SensorDataCard
            title="Nitrogen"
            currentValue={115}
            chartData={nitrogenData}
            icon={Sun}
          />
          <SensorDataCard
            title="Phosphorus"
            currentValue={223}
            chartData={phosphorusData}
            icon={Bone}
          />
          <SensorDataCard
            title="Potassium"
            currentValue={78}
            chartData={potassiumData}
            icon={Banana}
          />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 md:gap-4 lg:grid-cols-4">
          <SensorDataCard
            title="Temperature"
            currentValue={115}
            chartData={nitrogenData}
            icon={ThermometerSun}
          />
          <SensorDataCard
            title="Humidity"
            currentValue={223}
            chartData={phosphorusData}
            icon={Droplet}
          />
          <SensorDataCard
            title="Water Level"
            currentValue={115}
            chartData={nitrogenData}
            icon={Waves}
          />
          <SensorDataCard
            title="Water Temp."
            currentValue={223}
            chartData={phosphorusData}
            icon={Thermometer}
          />
        </div>
      </div>
    </div>
  );
};

export default DataContainer;
