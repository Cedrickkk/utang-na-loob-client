import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { debtorQueries, useGetDebtors } from "@/queries/use-debtor";
import { createFileRoute, Link } from "@tanstack/react-router";
import { Hash, Mail, MapPin, Phone } from "lucide-react";

export const Route = createFileRoute("/debtors/")({
  loader: ({ context }) =>
    context.queryClient.ensureQueryData(debtorQueries.list()),
  component: RouteComponent,
});

function RouteComponent() {
  const { data: debtors, isPending } = useGetDebtors();

  if (isPending) {
    return "Pending...";
  }

  return (
    <div className="my-4 grid grid-cols-3 gap-2">
      {debtors?.data?.map((debtor) => (
        <Link
          to="/debtors/$debtorId"
          params={{ debtorId: debtor.id.toString() }}
        >
          <Card className="rounded-xs">
            <CardHeader>
              <Avatar className="rounded-lg">
                <AvatarImage
                  src="https://github.com/evilrabbit.png"
                  alt="@evilrabbit"
                />
                <AvatarFallback>{debtor.name}</AvatarFallback>
              </Avatar>
              <CardTitle>{debtor.name}</CardTitle>
              <CardDescription>{debtor.email}</CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="text-muted-foreground space-y-2 text-sm">
                <li className="flex items-center gap-2">
                  <Mail className="size-4" />
                  <span>{debtor.email}</span>
                </li>
                <li className="flex items-center gap-2">
                  <Phone className="size-4" />
                  <span>{debtor.contactNumber}</span>
                </li>
                <li className="flex items-center gap-2">
                  <MapPin className="size-4" />
                  <span>
                    {debtor.address.houseNumber} {debtor.address.street},&nbsp;
                    {debtor.address.city}
                  </span>
                </li>
              </ul>
            </CardContent>
          </Card>
        </Link>
      ))}
    </div>
  );
}
