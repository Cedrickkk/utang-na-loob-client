import { createFileRoute, Outlet } from "@tanstack/react-router";

export const Route = createFileRoute("/items")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <div className="p-6">
      <h1 className="text-xl font-bold tracking-tight lg:text-2xl">Items</h1>
      <Outlet />
    </div>
  );
}
