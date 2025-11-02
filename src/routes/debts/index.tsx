import { debtQueries, useGetDebts } from "@/queries/use-debt";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/debts/")({
  loader: ({ context }) =>
    context.queryClient.ensureQueryData(debtQueries.list()),
  component: RouteComponent,
});

function RouteComponent() {
  const { data: debts } = useGetDebts();

  console.log(debts);

  return (
    <div>
      <h1>Test</h1>
    </div>
  );
}
