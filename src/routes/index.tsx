import { createFileRoute, redirect } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
  loader: () => redirect({ to: "/dashboard" }),
  component: RouteComponent,
});

function RouteComponent() {
  return <div>Hello "/"!</div>;
}
