import { getItemsQueryOptions } from "@/queries/use-item";
import { createFileRoute } from "@tanstack/react-router";
import {
  Empty,
  EmptyContent,
  EmptyDescription,
  EmptyHeader,
  EmptyMedia,
  EmptyTitle,
} from "@/components/ui/empty";
import { PhilippinePeso } from "lucide-react";
import { Button } from "@/components/ui/button";

export const Route = createFileRoute("/debts/")({
  loader: ({ context }) => {
    return context.queryClient.ensureQueryData(getItemsQueryOptions);
  },
  component: RouteComponent,
});

function RouteComponent() {
  const { data: items } = Route.useLoaderData();
  return (
    <div>
      {!items?.length && (
        <Empty className="-mt-24 min-h-screen">
          <EmptyHeader>
            <EmptyMedia variant="icon">
              <PhilippinePeso />
            </EmptyMedia>
            <EmptyTitle>No Debts Yet</EmptyTitle>
            <EmptyDescription>
              There aren't any debts in your sari-sari store yet.
            </EmptyDescription>
          </EmptyHeader>
          <EmptyContent>
            <Button>Create Debt</Button>
          </EmptyContent>
        </Empty>
      )}
      {items?.map((item) => {
        return <div key={item.id}></div>;
      })}
    </div>
  );
}
