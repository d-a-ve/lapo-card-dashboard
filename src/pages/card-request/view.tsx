import { FileIcon } from "@/components/icons/file-icon";
import { LoadingIcon } from "@/components/icons/loading-icon";
import {
  PackageCheckIcon,
  PackageSendIcon,
} from "@/components/icons/package-icon";
import { PageLayout } from "@/components/layout";
import { Button } from "@/components/ui/button";
import {
  CARD_REQUEST_STATUS,
  CARD_REQUESTS,
  CARD_REQUESTS_MAP,
} from "@/constants";
import { CardRequestStatus } from "@/domains/card-request/card-request-status";
import { SuccessfulDialog } from "@/domains/card-request/successful-dialog";
import { DashboardCard } from "@/domains/home/dashboard-card";
import { CircleCheckBig } from "lucide-react";
import { useEffect, useState } from "react";
import { useSearchParams } from "react-router";

export default function CardRequestViewPage() {
  const [isDownloaded, setIsDownloaded] = useState(false);
  const [requestStatus, setRequestStatus] = useState<
    "done" | "loading" | "error"
  >("loading");
  const [request, setRequest] = useState<(typeof CARD_REQUESTS)[number]>();

  const [searchParams] = useSearchParams();

  useEffect(() => {
    if (request || requestStatus === "done") return;

    const id = searchParams.get("id");
    if (!id) return setRequestStatus("error");

    const cardRequest = CARD_REQUESTS_MAP.get(id);
    if (!cardRequest) return setRequestStatus("error");

    setRequest(cardRequest);
    setRequestStatus("done");
    console.log("running again.");
  }, [request, requestStatus, searchParams]);

  if (requestStatus === "error" || !request)
    return <p>Request details not found for this id.</p>;

  const handleChange = (key: keyof typeof request, value: unknown) =>
    setRequest((prev) => {
      if (!prev) return;

      return {
        ...prev,
        [key]: value,
      };
    });

  return (
    <PageLayout
      className="space-y-2.5"
      title="Request Details"
      subtitle="Perform predeterminded action in card requests here."
    >
      <DashboardCard className="space-y-7">
        <h2 className="text-lg font-medium">Card Request Details</h2>
        <div className="grid grid-cols-2 gap-x-[7.8125rem] gap-y-5">
          <div className="space-y-1.5">
            <p className="text-sm font-medium text-gray-700">Branch Name</p>
            <p className="rounded-lg border border-gray-300 bg-[#F5F5F7] px-3.5 py-2.5 text-gray-900 shadow-xs">
              {request.branch}
            </p>
          </div>
          <div className="space-y-1.5">
            <p className="text-sm font-medium text-gray-700">Initiator</p>
            <p className="rounded-lg border border-gray-300 bg-[#F5F5F7] px-3.5 py-2.5 text-gray-900 shadow-xs">
              {request.initiator}
            </p>
          </div>
          <div className="space-y-1.5">
            <p className="text-sm font-medium text-gray-700">Card Type</p>
            <p className="rounded-lg border border-gray-300 bg-[#F5F5F7] px-3.5 py-2.5 text-gray-900 shadow-xs">
              {request.cardType}
            </p>
          </div>
          <div className="space-y-1.5">
            <p className="text-sm font-medium text-gray-700">Card Charges</p>
            <p className="rounded-lg border border-gray-300 bg-[#F5F5F7] px-3.5 py-2.5 text-gray-900 shadow-xs">
              {request.cardCharges}
            </p>
          </div>
          <div className="space-y-1.5">
            <p className="text-sm font-medium text-gray-700">Quantity</p>
            <p className="rounded-lg border border-gray-300 bg-[#F5F5F7] px-3.5 py-2.5 text-gray-900 shadow-xs">
              {request.quantity}
            </p>
          </div>
          <div className="space-y-1.5">
            <p className="text-sm font-medium text-gray-700">Batch</p>
            <p className="rounded-lg border border-gray-300 bg-[#F5F5F7] px-3.5 py-2.5 text-gray-900 shadow-xs">
              {request.batch}
            </p>
          </div>
          <div className="space-y-1.5">
            <p className="text-sm font-medium text-gray-700">Date Requested</p>
            <p className="text-gray-900">{request.dateRequested}</p>
          </div>
          <div className="space-y-1.5">
            <p className="text-sm font-medium text-gray-700">Status</p>
            <p className="text-gray-900">
              <CardRequestStatus status={request.status} className="px-5" />
            </p>
          </div>
        </div>
        <div className="space-y-3">
          <h3 className="text-sm font-bold">Actions</h3>
          <div className="flex flex-wrap items-center gap-8">
            <SuccessfulDialog
              trigger={
                <Button
                  label="Download for Production"
                  leftIcon={<FileIcon />}
                  className="border-gray-700 bg-gray-700 text-white data-[disabled=false]:hover:bg-gray-600 data-[disabled=false]:hover:text-white"
                  disabled={
                    isDownloaded ||
                    request.status !== CARD_REQUEST_STATUS.PENDING
                  }
                  onClick={() => setIsDownloaded(true)}
                />
              }
              message="Production file has been downloaded."
            />
            <Button
              label="Mark as In Progress"
              leftIcon={
                <span className="text-lg">
                  <LoadingIcon />
                </span>
              }
              className="border-warning-700 bg-warning-700 text-white data-[disabled=false]:hover:bg-warning-700/80 data-[disabled=false]:hover:text-white"
              disabled={
                !isDownloaded || request.status !== CARD_REQUEST_STATUS.PENDING
              }
              onClick={() =>
                handleChange("status", CARD_REQUEST_STATUS.IN_PROGRESS)
              }
            />
            <Button
              label="Mark as Ready"
              leftIcon={
                <span className="text-base">
                  <PackageCheckIcon />
                </span>
              }
              className="border-success-700 bg-success-700 text-white data-[disabled=false]:hover:bg-success-700/80 data-[disabled=false]:hover:text-white"
              disabled={request.status !== CARD_REQUEST_STATUS.IN_PROGRESS}
              onClick={() => handleChange("status", CARD_REQUEST_STATUS.READY)}
            />
            <SuccessfulDialog
              trigger={
                <Button
                  label="Send to Dispatch"
                  leftIcon={
                    <span className="text-base">
                      <PackageSendIcon />
                    </span>
                  }
                  className="border-[#8020E7] bg-[#8020E7] text-white data-[disabled=false]:hover:bg-[#8020E7]/80 data-[disabled=false]:hover:text-white"
                  disabled={request.status !== CARD_REQUEST_STATUS.READY}
                  onClick={() =>
                    handleChange("status", CARD_REQUEST_STATUS.DISPATCHED)
                  }
                />
              }
              message="Card batch successfully sent to dispatch."
            />
            <Button
              label="Mark as Acknowledged"
              leftIcon={<CircleCheckBig className="size-4.5" />}
              disabled={request.status !== CARD_REQUEST_STATUS.DISPATCHED}
              onClick={() =>
                handleChange("status", CARD_REQUEST_STATUS.ACKNOWLEDGED)
              }
            />
          </div>
        </div>
      </DashboardCard>
    </PageLayout>
  );
}
