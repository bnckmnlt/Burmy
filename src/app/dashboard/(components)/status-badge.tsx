import { cn } from "@/lib/utils";
import React from "react";

type StatusBadgeProps = {
  title: string;
  status: boolean;
};

const StatusBadge = ({ title, status }: StatusBadgeProps) => {
  return (
    <div className="flex items-center gap-2 rounded-md border bg-background px-2.5 py-1 hover:cursor-pointer hover:border-slate-500 hover:bg-secondary">
      <div
        className={cn(
          "h-2 w-2 rounded-full",
          status ? "bg-emerald-400" : "bg-rose-400",
        )}
      />
      <span className="text-[10px] font-medium leading-normal">{title}</span>
    </div>
  );
};

export default StatusBadge;
