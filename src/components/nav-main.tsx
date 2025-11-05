import {
  ChevronRight,
  LayoutDashboard,
  Package,
  PhilippinePeso,
  Users,
} from "lucide-react";
import {
  SidebarGroup,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSub,
  SidebarMenuSubButton,
  SidebarMenuSubItem,
} from "@/components/ui/sidebar";
import { Link } from "@tanstack/react-router";
import { Collapsible, CollapsibleContent } from "./ui/collapsible";
import { CollapsibleTrigger } from "@radix-ui/react-collapsible";

export default function NavMain() {
  return (
    <SidebarGroup>
      <SidebarGroupLabel>Application</SidebarGroupLabel>
      <SidebarMenu>
        <Link to="/dashboard">
          {({ isActive }) => (
            <SidebarMenuItem>
              <SidebarMenuButton tooltip="Dashboard" isActive={isActive}>
                <LayoutDashboard />
                <span>Dashboard</span>
              </SidebarMenuButton>
            </SidebarMenuItem>
          )}
        </Link>
        <Link to="/debts">
          {({ isActive }) => (
            <SidebarMenuItem>
              <SidebarMenuButton tooltip="Debts" isActive={isActive}>
                <PhilippinePeso />
                <span>Debts</span>
              </SidebarMenuButton>
            </SidebarMenuItem>
          )}
        </Link>
        <Link to="/debtors">
          {({ isActive }) => (
            <SidebarMenuItem>
              <SidebarMenuButton tooltip="Debtors" isActive={isActive}>
                <Users />
                <span>Debtors</span>
              </SidebarMenuButton>
            </SidebarMenuItem>
          )}
        </Link>
        <Link to="/items">
          {({ isActive }) => (
            <Collapsible className="group/collapsible">
              <SidebarMenuItem>
                <CollapsibleTrigger asChild>
                  <SidebarMenuButton tooltip="Items" isActive={isActive}>
                    <Package />
                    <span>Items</span>
                    <ChevronRight className="ml-auto transition-transform duration-200 group-data-[state=open]/collapsible:rotate-90" />
                  </SidebarMenuButton>
                </CollapsibleTrigger>
                <CollapsibleContent>
                  <SidebarMenuSub>
                    <Link to="/items/create">
                      <SidebarMenuSubItem>
                        <SidebarMenuSubButton>Create</SidebarMenuSubButton>
                      </SidebarMenuSubItem>
                    </Link>
                  </SidebarMenuSub>
                </CollapsibleContent>
              </SidebarMenuItem>
            </Collapsible>
          )}
        </Link>
      </SidebarMenu>
    </SidebarGroup>
  );
}
