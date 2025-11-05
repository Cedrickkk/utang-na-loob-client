"use client";

import * as React from "react";
import { StoreIcon } from "lucide-react";

import {
  Sidebar,
  SidebarContent,
  SidebarHeader,
  SidebarRail,
} from "@/components/ui/sidebar";
import NavMain from "./nav-main";

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar collapsible="icon" {...props}>
      <SidebarHeader className="flex flex-col gap-2 p-2">
        <div className="flex items-center justify-center">
          <div className="bg-sidebar-primary text-sidebar-primary-foreground hidden aspect-square size-8 items-center justify-center rounded-lg group-data-[collapsible=icon]:flex group-data-[collapsible=offcanvas]:hidden">
            <StoreIcon className="size-4" />
          </div>
          <img
            src="/utangnaloob-logo.png"
            alt="Utang Na Loob"
            className="m-4 h-10 w-auto group-data-[collapsible=icon]:hidden group-data-[collapsible=offcanvas]:block"
          />
        </div>
      </SidebarHeader>
      <SidebarContent>
        <NavMain />
      </SidebarContent>
      <SidebarRail />
    </Sidebar>
  );
}
