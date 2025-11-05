import { createFileRoute } from "@tanstack/react-router";
import { debtQueries } from "@/queries/use-debt";
import { useQuery } from "@tanstack/react-query";
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
import { Card } from "@/components/ui/card";

export const Route = createFileRoute("/debts/")({
  loader: ({ context }) => {
    context.queryClient.ensureQueryData(debtQueries.list());
  },
  component: RouteComponent,
});

function RouteComponent() {
  const { data: debts } = useQuery(debtQueries.list());

  return (
    <div>
      {!debts?.data?.length && (
        <Card>
          <Empty className="-mt-24 min-h-screen">
            <EmptyHeader>
              <EmptyMedia variant="icon">
                <PhilippinePeso className="text-primary" />
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
        </Card>
      )}
    </div>
  );
}
