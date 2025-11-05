import { itemQueries, useGetItemById } from "@/queries/use-item";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/items/$itemId")({
  loader: ({ context, params }) => {
    const itemId = Number(params.itemId);
    return context.queryClient.ensureQueryData(itemQueries.detail(itemId));
  },
  component: RouteComponent,
});

function RouteComponent() {
  const { itemId } = Route.useParams();
  const { data: item } = useGetItemById(Number(itemId));

  if (!item) {
    return <div>Item not available.</div>;
  }

  return (
    <div>
      <h1>{item?.data?.name}</h1>
      <p>{item?.data?.price}</p>
    </div>
  );
}
