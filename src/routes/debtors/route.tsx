import { createFileRoute, Outlet } from "@tanstack/react-router";

export const Route = createFileRoute("/debtors")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <div className="p-6">
      <h1>This is from the debtors layout</h1>
      <Outlet />
    </div>
  );
}
