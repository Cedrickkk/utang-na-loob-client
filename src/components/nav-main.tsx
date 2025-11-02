import { LayoutDashboard, Package, PhilippinePeso, Users } from "lucide-react";
import {
  SidebarGroup,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import { Link } from "@tanstack/react-router";

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
            <SidebarMenuItem>
              <SidebarMenuButton tooltip="Items" isActive={isActive}>
                <Package />
                <span>Items</span>
              </SidebarMenuButton>
            </SidebarMenuItem>
          )}
        </Link>
      </SidebarMenu>
    </SidebarGroup>
  );
}
