import { PageLayout } from "@/components/ layout";
import { PencilIcon } from "@/components/icons/pencil-icon";
import { TrashIcon } from "@/components/icons/trash-icon";
import { Input } from "@/components/ui/input";
import { LinkButton } from "@/components/ui/link-button";
import { Separator } from "@/components/ui/separator";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { URL_PATH_SEGMENTS } from "@/constants";
import { PlusIcon, Search } from "lucide-react";

const CARD_PROFILES = [
  {
    id: "card-profile-1",
    cardName: "Verve-1",
    currency: "NGN",
    expiration: "40 months",
    binPrefix: 50611234,
    dateCreated: "11/10/2024 23:21:03",
  },
  {
    id: "card-profile-2",
    cardName: "Verve-2",
    currency: "USD",
    expiration: "36 months",
    binPrefix: 50611235,
    dateCreated: "11/10/2024 23:22:15",
  },
  {
    id: "card-profile-3",
    cardName: "Mastercard-1",
    currency: "EUR",
    expiration: "48 months",
    binPrefix: 50611236,
    dateCreated: "11/10/2024 23:23:45",
  },
  {
    id: "card-profile-4",
    cardName: "Visa-1",
    currency: "GBP",
    expiration: "24 months",
    binPrefix: 50611237,
    dateCreated: "11/10/2024 23:24:30",
  },
  {
    id: "card-profile-5",
    cardName: "Amex-1",
    currency: "USD",
    expiration: "36 months",
    binPrefix: 50611238,
    dateCreated: "11/10/2024 23:25:12",
  },
  {
    id: "card-profile-6",
    cardName: "Discover-1",
    currency: "CAD",
    expiration: "48 months",
    binPrefix: 50611239,
    dateCreated: "11/10/2024 23:26:03",
  },
];

export function CardProfilePage() {
  return (
    <PageLayout
      className="space-y-2.5"
      title="Card Profile"
      subtitle="Create, view and edit card profiles here."
    >
      <Separator />
      <div className="flex items-center justify-between gap-4">
        <Input
          leftIcon={<Search className="size-5 stroke-grey" />}
          placeholder="Search by card name"
          className="w-full max-w-[18.25rem]"
        />
        <LinkButton
          href={`/${URL_PATH_SEGMENTS.CARD_PROFILE_CREATE}`}
          leftIcon={<PlusIcon className="size-5" />}
          label="Add Profile"
        />
      </div>
      <Separator />
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[12.18rem]">Card Name</TableHead>
            <TableHead className="w-[12.18rem] text-center">Currency</TableHead>
            <TableHead className="w-[12.18rem] text-center">
              Expiration
            </TableHead>
            <TableHead className="w-[12.18rem] text-center">
              Bin Prefix
            </TableHead>
            <TableHead className="w-[12.18rem] text-center">
              Date Created
            </TableHead>
            <TableHead className="w-[12.18rem] text-center">Action</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {CARD_PROFILES.map(
            ({
              cardName,
              currency,
              expiration,
              binPrefix,
              dateCreated,
              id,
            }) => (
              <TableRow key={id}>
                <TableCell>{cardName}</TableCell>
                <TableCell className="text-center">{currency}</TableCell>
                <TableCell className="text-center">{expiration}</TableCell>
                <TableCell className="text-center">{binPrefix}</TableCell>
                <TableCell className="text-center">{dateCreated}</TableCell>
                <TableCell className="text-center">
                  <div className="flex items-center justify-center gap-2">
                    <button className="cursor-pointer rounded-lg p-1 text-base text-gray-600 hover:text-red-500">
                      <TrashIcon />
                    </button>
                    <button className="cursor-pointer rounded-lg p-1 text-base text-gray-600 hover:bg-primary-200">
                      <PencilIcon />
                    </button>
                  </div>
                </TableCell>
              </TableRow>
            ),
          )}
        </TableBody>
      </Table>
    </PageLayout>
  );
}
