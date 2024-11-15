import { geistMono } from "@/app/layout";
import MaterialDataChart from "./material-data-chart";
import { cn } from "@/lib/utils";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { CircleHelp } from "lucide-react";

import React from "react";

type Props = {};

const MaterialDataContainer = (props: Props) => {
  return (
    <div className="space-y-6">
      <div className="mx-6 mb-12 grid gap-12 md:grid-cols-2">
        <div className="space-y-6">
          <h4 className="text-lg font-medium">Material Validity Guide</h4>
          <p className="text-sm text-muted-foreground">
            The list below separates the compostable materials from
            non-compostable ones. Keeping your compost healthy ensures efficient
            breakdown and nutrient recycling for a healthy plant soil.
          </p>
          <div className="space-y-6">
            <div>
              <div className="flex flex-row items-center gap-2">
                <h5 className={cn("text-sm", geistMono.className)}>
                  FRUIT WASTE
                </h5>
                <TooltipProvider>
                  <Tooltip>
                    <TooltipTrigger>
                      <CircleHelp
                        size={12}
                        className="text-muted-foreground hover:cursor-pointer"
                      />
                    </TooltipTrigger>
                    <TooltipContent>
                      Avoid citrus fruits as they can be too acidic for worms
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
              </div>
              <div className="mt-3 grid list-disc grid-cols-4 justify-end gap-x-4 gap-y-2 decoration-emerald-500">
                {[
                  "Apple cores",
                  "Banana peels",
                  "Melon rinds",
                  "Mango skins",
                  "Grape stems",
                  "Pear and peach peels",
                  "Pineapple tops",
                ].map((item) => (
                  <div
                    key={item}
                    className={`flex items-center gap-1.5 text-[10px] transition-all delay-150 hover:animate-pulse hover:cursor-pointer ${geistMono.className}`}
                  >
                    <div className="h-3 w-1.5 rounded-md bg-amber-400" />
                    {item}
                  </div>
                ))}
              </div>
            </div>
            <div>
              <div className="flex flex-row items-center gap-2">
                <h5 className={cn("text-sm", geistMono.className)}>
                  VEGETABLE WASTE
                </h5>
              </div>
              <div className="mt-3 grid list-disc grid-cols-4 justify-end gap-x-4 gap-y-2 decoration-emerald-500">
                {[
                  "Carrot peels",
                  "Potato skins",
                  "Lettuce leaves",
                  "Broccoli stems",
                  "Cucumber peels",
                  "Bell pepper",
                  "Leafy greens",
                ].map((item) => (
                  <div
                    key={item}
                    className={`flex items-center gap-1.5 text-[10px] transition-all delay-150 hover:animate-pulse hover:cursor-pointer ${geistMono.className}`}
                  >
                    <div className="h-3 w-1.5 truncate rounded-md bg-emerald-400" />
                    {item}
                  </div>
                ))}
              </div>
            </div>
            <div>
              <div className="flex flex-row items-center gap-2">
                <h5 className={cn("text-sm", geistMono.className)}>
                  OTHER COMPOSTABLE MATERIALS
                </h5>
              </div>
              <div className="mt-3 grid list-disc grid-cols-4 justify-end gap-x-4 gap-y-2 decoration-emerald-500">
                {[
                  "Eggshells",
                  "Leaves/Dry Leaves",
                  "Shredded Cardboard",
                  "Paper Towels",
                  "Tea/Coffee Grounds",
                  "Plain Papers",
                  "Herbs clippings",
                ].map((item) => (
                  <div
                    key={item}
                    className={`flex items-center gap-1.5 text-[10px] text-muted-foreground transition-all hover:animate-pulse hover:cursor-pointer hover:text-foreground ${geistMono.className}`}
                  >
                    <div className="h-3 w-1.5 truncate rounded-md bg-slate-400" />
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
        {/* Chart */}
        <div>
          <MaterialDataChart />
        </div>
      </div>
    </div>
  );
};

export default MaterialDataContainer;
