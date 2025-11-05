import { createFileRoute, Outlet } from "@tanstack/react-router";

export const Route = createFileRoute("/dashboard")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <div className="p-6">
      <h1 className="mb-6 text-xl font-bold tracking-tight text-white lg:text-2xl">
        Dashboard
      </h1>
      <Outlet />
    </div>
  );
}
