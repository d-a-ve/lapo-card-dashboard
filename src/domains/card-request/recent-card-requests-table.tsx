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
import { Link } from "react-router";

export function RecentCardRequestsTable() {
  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead className="bg-primary-200 text-center whitespace-nowrap">
            Branch
          </TableHead>
          <TableHead className="bg-primary-200 text-center whitespace-nowrap">
            Card Type
          </TableHead>
          <TableHead className="bg-primary-200 text-center whitespace-nowrap">
            Quantity
          </TableHead>
          <TableHead className="bg-primary-200 text-center whitespace-nowrap">
            Status
          </TableHead>
          <TableHead className="bg-primary-200 text-center whitespace-nowrap">
            Action
          </TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {CARD_REQUESTS.slice(0, 5).map(
          ({ branch, quantity, status, id, cardType }) => (
            <TableRow key={id}>
              <TableCell className="border-none text-center whitespace-nowrap capitalize">
                {branch}
              </TableCell>
              <TableCell className="border-none text-center whitespace-nowrap">
                {cardType}
              </TableCell>
              <TableCell className="border-none text-center whitespace-nowrap">
                {quantity}
              </TableCell>
              <TableCell className="border-none text-center whitespace-nowrap">
                <CardRequestStatus status={status} className="mx-auto" />
              </TableCell>
              <TableCell className="border-none text-center whitespace-nowrap">
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
  );
}
