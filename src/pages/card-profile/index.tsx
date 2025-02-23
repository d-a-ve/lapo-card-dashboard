import { PencilIcon } from "@/components/icons/pencil-icon";
import { TrashIcon } from "@/components/icons/trash-icon";
import { PageLayout } from "@/components/layout";
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
import { CARD_PROFILES, URL_PATH_SEGMENTS } from "@/constants";
import { DeleteCardProfileDialog } from "@/domains/card-profile/delete-card-profile-dialog";
import { PlusIcon, Search } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router";

export default function CardProfilePage() {
  const [cardProfiles, setCardProfiles] = useState(CARD_PROFILES);

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
          {cardProfiles.map(
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
                    <DeleteCardProfileDialog
                      trigger={
                        <button className="cursor-pointer rounded-lg p-1 text-base text-gray-600 hover:text-red-500">
                          <TrashIcon />
                        </button>
                      }
                      cardName={cardName}
                      deleteFn={() => {
                        setCardProfiles(
                          cardProfiles.filter((profile) => profile.id !== id),
                        );
                      }}
                    />
                    <Link
                      to={{
                        pathname: `/${URL_PATH_SEGMENTS.CARD_PROFILE_EDIT}`,
                        search: `?id=${id}`,
                      }}
                    >
                      <button className="cursor-pointer rounded-lg p-1 text-base text-gray-600 hover:bg-primary-200">
                        <PencilIcon />
                      </button>
                    </Link>
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
