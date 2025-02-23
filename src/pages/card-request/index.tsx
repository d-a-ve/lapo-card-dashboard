import { PageLayout } from "@/components/ layout";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { CARD_REQUESTS, URL_PATH_SEGMENTS } from "@/constants";
import { CardRequestStatus } from "@/domains/card-request/card-request-status";
import { Search } from "lucide-react";
import { Link } from "react-router";

export function CardRequestPage() {
  return (
    <PageLayout
      className="space-y-2.5"
      title="Card Request"
      subtitle="View and attend to card requests here."
    >
      <Separator />
      <Input
        leftIcon={<Search className="size-5 stroke-grey" />}
        placeholder="Search by branch"
        className="w-full max-w-[18.25rem]"
      />
      <Separator />
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[10.44rem]">Branch</TableHead>
            <TableHead className="w-[10.44rem] text-center">
              Initiator
            </TableHead>
            <TableHead className="w-[10.44rem] text-center">Quantity</TableHead>
            <TableHead className="w-[10.44rem] text-center">Batch</TableHead>
            <TableHead className="w-[10.44rem] text-center">
              Date Requested
            </TableHead>
            <TableHead className="w-[10.44rem] text-center">Status</TableHead>
            <TableHead className="w-[10.44rem] text-center">Action</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {CARD_REQUESTS.map(
            ({
              branch,
              initiator,
              quantity,
              batch,
              dateRequested,
              status,
              id,
            }) => (
              <TableRow key={id}>
                <TableCell>{branch}</TableCell>
                <TableCell className="text-center">{initiator}</TableCell>
                <TableCell className="text-center">{quantity}</TableCell>
                <TableCell className="text-center">{batch}</TableCell>
                <TableCell className="text-center">{dateRequested}</TableCell>
                <TableCell className="text-center">
                  <CardRequestStatus status={status} className="mx-auto" />
                </TableCell>
                <TableCell className="text-center">
                  <Link
                    to={{
                      pathname: `/${URL_PATH_SEGMENTS.CARD_REQUEST_VIEW}`,
                      search: `?id=${id}`,
                    }}
                    className="font-bold text-primary"
                  >
                    View
                  </Link>
                </TableCell>
              </TableRow>
            ),
          )}
        </TableBody>
      </Table>
    </PageLayout>
  );
}
