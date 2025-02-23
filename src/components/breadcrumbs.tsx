import { cn } from "@/lib/utils";
import { BREADCRUMBS_NAV_LINKS } from "@/nav-link.constants";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useLocation, useNavigate } from "react-router";

export function Breadcrumbs() {
  const navigate = useNavigate();
  const path = useLocation().pathname;
  const splitPath = path.split("/").slice(1);
  console.log(splitPath);

  if (splitPath.length <= 1) {
    const link = splitPath[0] || "overview";
    return (
      <div className="flex items-center gap-3 text-primary-400">
        {BREADCRUMBS_NAV_LINKS[link].icon}
        <p className="text-xs">{BREADCRUMBS_NAV_LINKS[link].label}</p>
      </div>
    );
  }

  return (
    <div className="flex items-center gap-3 text-xs">
      <button
        className="group/back-breadcrumb flex cursor-pointer items-center gap-3 text-gray-600 [&_p_~_*]:text-sm"
        onClick={() => navigate(-1)}
      >
        <ChevronLeft className="size-6" />
        <p className="leading-none duration-150 group-hover/back-breadcrumb:-translate-x-1">
          Back
        </p>
        {/* <span className="text-sm"> */}
        {BREADCRUMBS_NAV_LINKS[splitPath[0]].icon}
        {/* </span> */}
      </button>
      {splitPath.map((p, idx, arr) => (
        <div className="flex items-center gap-3">
          <ChevronRight className="size-5 stroke-gray-300" />
          <p
            className={cn("text-gray-600", {
              "font-bold": idx === arr.length - 1,
            })}
          >
            {BREADCRUMBS_NAV_LINKS[p].label}
          </p>
        </div>
      ))}
    </div>
  );
}
