import { AppSidebar } from "@/components/app-sidebar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Separator } from "@/components/ui/separator";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { cn } from "@/lib/utils";
import { CircleHelp, Inbox } from "lucide-react";
import { cookies } from "next/headers";
import React from "react";

type Props = {
  children: React.ReactNode;
};

const DashboardLayout = async ({ children }: Props) => {
  const cookieStore = await cookies();
  const defaultOpen = cookieStore.get("sidebar:state")?.value === "true";

  return (
    <div className="flex min-h-screen w-full">
      <SidebarProvider defaultOpen={defaultOpen}>
        <AppSidebar />
        <div className={cn("flex h-full w-full py-4 pr-4")}>
          <main className="flex w-full flex-col rounded-md border">
            <header className="z-50 flex h-[53px] items-center justify-between gap-1 border-b px-4">
              <div className="flex h-5 items-center gap-2">
                <SidebarTrigger />
                <Separator orientation="vertical" />
                <span className="text-sm font-medium text-muted-foreground">
                  Home
                </span>
              </div>
              <div className="flex flex-row items-center gap-1">
                <Popover>
                  <PopoverTrigger asChild>
                    <div className="h-min rounded-md p-1 hover:bg-secondary">
                      <Inbox size={14} />
                    </div>
                  </PopoverTrigger>
                  <PopoverContent align="end" className="w-[348px]">
                    <span className="text-sm">Notifications</span>
                  </PopoverContent>
                </Popover>
                <Popover>
                  <PopoverTrigger asChild>
                    <div className="h-min rounded-md p-1 hover:bg-secondary">
                      <CircleHelp size={14} />
                    </div>
                  </PopoverTrigger>
                  <PopoverContent align="end" className="w-[348]">
                    <span className="text-sm">Help and Support</span>
                  </PopoverContent>
                </Popover>
              </div>
            </header>
            <div>{children}</div>
          </main>
        </div>
      </SidebarProvider>
    </div>
  );
};

export default DashboardLayout;
