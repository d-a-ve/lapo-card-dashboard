import { URL_PATH_SEGMENTS } from "@/constants";
import { cn } from "@/lib/utils";
import { NavLink } from "react-router";
import { BuildingIcon } from "./icons/building-icon";
import {
  ATMCard2Icon,
  CardCheckIcon,
  CardInclinedIcon,
} from "./icons/card-icons";
import { GraphIcon } from "./icons/graph-icon";
import { HomeIcon } from "./icons/home-icon";
import { StackedLayerIcon } from "./icons/layers-icon";
import { ListIcon } from "./icons/list-icon";
import { LogoutIcon } from "./icons/logout-icon";
import { MapIcon } from "./icons/map-icon";
import { SliderHorizontalIcon } from "./icons/sliders-icon";
import { User2Icon, UserGroupIcon, UserShieldIcon } from "./icons/user-icon";

const NAV_LINKS = [
  {
    label: "Branches",
    href: "/branches",
    icon: <BuildingIcon />,
  },
  {
    label: "Roles",
    href: "/roles",
    icon: <UserShieldIcon />,
  },
  {
    label: "Users",
    href: "/users",
    icon: (
      <span className="-mr-0.5 text-lg">
        <UserGroupIcon />
      </span>
    ),
  },
  {
    label: "Card Scheme",
    href: "/card-scheme",
    icon: <SliderHorizontalIcon />,
  },
  {
    label: "Card Profile",
    href: `/${URL_PATH_SEGMENTS.CARD_PROFILE}`,
    icon: (
      <span className="-mr-0.5 text-lg">
        <CardInclinedIcon />
      </span>
    ),
  },
  {
    label: "Card Request",
    href: `/${URL_PATH_SEGMENTS.CARD_REQUEST}`,
    icon: <CardCheckIcon />,
  },
  {
    label: "Stock",
    href: "/stock",
    icon: <span className="text-lg -mr-0.5"><GraphIcon /></span>,
  },
  {
    label: "Cards",
    href: "/cards",
    icon: (
      <span className="text-lg -mr-0.5">
        <ATMCard2Icon />
      </span>
    ),
  },
  {
    label: "Authorization List",
    href: "/authorization-list",
    icon: <ListIcon />,
  },
  {
    label: "Authorization Queue",
    href: "/authorization-queue",
    icon: <StackedLayerIcon />,
  },
  {
    label: "Trail",
    href: "/trail",
    icon: <MapIcon />,
  },
  {
    label: "Account",
    href: "/account",
    icon: <User2Icon />,
  },
];

export function Nav() {
  return (
    <nav className="h-full">
      <ul className="grid h-full grid-rows-[auto_1fr_auto]">
        <li>
          <NavLink
            to={URL_PATH_SEGMENTS.HOME}
            className={({ isActive }) =>
              cn(
                "flex items-center gap-3 rounded-lg border border-transparent px-3 py-2.5 text-grey transition-colors duration-150",
                {
                  "border-gray-100 bg-gray-150 text-primary": isActive,
                  "hover:text-primary": !isActive,
                },
              )
            }
          >
            <HomeIcon />
            <span className="text-xs">Dashboard</span>
          </NavLink>
        </li>
        <li>
          <ul className="space-y-1">
            <li className="pt-4 pl-4 pb-1 text-[0.53rem] text-gray-400">MAIN MENU</li>
            {NAV_LINKS.map(({ icon, label, href }) => (
              <li key={label}>
                <NavLink
                  to={href}
                  className={({ isActive }) =>
                    cn(
                      "flex items-center gap-3 rounded-lg border border-transparent px-3 py-2.5 text-grey transition-colors duration-150",
                      {
                        "border-gray-100 bg-gray-150 text-primary": isActive,
                        "hover:text-primary": !isActive,
                      },
                    )
                  }
                >
                  {icon}
                  <span className="text-xs">{label}</span>
                </NavLink>
              </li>
            ))}
          </ul>
        </li>
        <li>
          <button className="flex w-full cursor-pointer items-center gap-3 rounded-lg border border-transparent px-3 py-2.5 text-foreground transition-colors duration-150 hover:text-red-600">
            <LogoutIcon />
            <span className="text-xs">Logout</span>
          </button>
        </li>
      </ul>
    </nav>
  );
}
