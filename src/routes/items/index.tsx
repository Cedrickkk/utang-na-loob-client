import { Button } from "@/components/ui/button";
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Empty,
  EmptyContent,
  EmptyDescription,
  EmptyHeader,
  EmptyMedia,
  EmptyTitle,
} from "@/components/ui/empty";
import { itemQueries, useGetItems } from "@/queries/use-item";
import { createFileRoute, Link } from "@tanstack/react-router";
import { Package } from "lucide-react";

export const Route = createFileRoute("/items/")({
  loader: ({ context }) =>
    context.queryClient.ensureQueryData(itemQueries.list("")),
  component: RouteComponent,
});

function RouteComponent() {
  const { data: items } = useGetItems();
  return (
    <div>
      {!items?.data?.length && (
        <Empty className="-mt-24 min-h-screen">
          <EmptyHeader>
            <EmptyMedia variant="icon">
              <Package />
            </EmptyMedia>
            <EmptyTitle>No Items Yet</EmptyTitle>
            <EmptyDescription>
              There aren't any items in your sari-sari store yet.
            </EmptyDescription>
          </EmptyHeader>
          <EmptyContent>
            <Button>Create Item</Button>
          </EmptyContent>
        </Empty>
      )}

      <div className="my-4 grid grid-cols-3 gap-2">
        {items?.data?.map((item) => (
          <Link to="/items/$itemId" params={{ itemId: item.id.toString() }}>
            <Card className="rounded-xs">
              <CardHeader>
                <CardTitle>{item.name}</CardTitle>
                <CardDescription>{item.price}</CardDescription>
              </CardHeader>
            </Card>
          </Link>
        ))}
      </div>
    </div>
  );
}
