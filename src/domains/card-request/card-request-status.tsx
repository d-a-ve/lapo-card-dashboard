import { CARD_REQUEST_STATUS } from "@/constants";
import { cn } from "@/lib/utils";

// I turned this off because I am only using it for my types and for some reason I canno directly type it in the type parameter and I must save it to a variable first.
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const statusType = Object.values(CARD_REQUEST_STATUS);

type CardStatus = (typeof statusType)[number];

const statusLabel = {
  [CARD_REQUEST_STATUS.READY]: "Ready",
  [CARD_REQUEST_STATUS.ACKNOWLEDGED]: "Acknowledged",
  [CARD_REQUEST_STATUS.IN_PROGRESS]: "In Progress",
  [CARD_REQUEST_STATUS.PENDING]: "Pending",
  [CARD_REQUEST_STATUS.DISPATCHED]: "Dispatched",
};

export function CardRequestStatus({
  status,
  className,
}: {
  status: string;
  className?: string;
}) {
  return (
    <p
      className={cn(
        "w-fit rounded-full border px-2 py-0.5 font-medium",
        {
          "border-success-200 bg-success-50 text-success-700":
            status === CARD_REQUEST_STATUS.READY,
          "border-primary-200 bg-primary-50 text-primary-700":
            status === CARD_REQUEST_STATUS.ACKNOWLEDGED,
          "border-warning-200 bg-warning-50 text-warning-700":
            status === CARD_REQUEST_STATUS.IN_PROGRESS,
          "border-gray-200 bg-gray-50 text-gray-700":
            status === CARD_REQUEST_STATUS.PENDING,
          "border-[#8020E7] bg-[#8020E7]/10 text-[#8020E7]":
            status === CARD_REQUEST_STATUS.DISPATCHED,
        },
        className,
      )}
    >
      {statusLabel[status as CardStatus]}
    </p>
  );
}
