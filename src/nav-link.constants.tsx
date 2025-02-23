import { BuildingIcon } from "@/components/icons/building-icon";
import {
  ATMCard2Icon,
  CardCheckIcon,
  CardInclinedIcon,
} from "@/components/icons/card-icons";
import { GraphIcon } from "@/components/icons/graph-icon";
import { StackedLayerIcon } from "@/components/icons/layers-icon";
import { ListIcon } from "@/components/icons/list-icon";
import { MapIcon } from "@/components/icons/map-icon";
import { SliderHorizontalIcon } from "@/components/icons/sliders-icon";
import {
  User2Icon,
  UserGroupIcon,
  UserShieldIcon,
} from "@/components/icons/user-icon";
import { URL_PATH_SEGMENTS } from "@/constants";
import { ReactNode } from "react";
import { HomeIcon } from "./components/icons/home-icon";

export const NAV_LINKS = [
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
    icon: (
      <span className="-mr-0.5 text-lg">
        <GraphIcon />
      </span>
    ),
  },
  {
    label: "Cards",
    href: "/cards",
    icon: (
      <span className="-mr-0.5 text-lg">
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

export const BREADCRUMBS_NAV_LINKS: Record<
  string,
  { label: string; href: string; icon?: ReactNode }
> = {
  overview: {
    label: "Dashboard",
    href: `/${URL_PATH_SEGMENTS.HOME}`,
    icon: <HomeIcon />,
  },
  branches: {
    label: "Branches",
    href: "/branches",
    icon: <BuildingIcon />,
  },
  roles: {
    label: "Roles",
    href: "/roles",
    icon: <UserShieldIcon />,
  },
  users: {
    label: "Users",
    href: "/users",
    icon: (
      <span className="-mr-0.5 text-lg">
        <UserGroupIcon />
      </span>
    ),
  },
  "card-scheme": {
    label: "Card Scheme",
    href: "/card-scheme",
    icon: <SliderHorizontalIcon />,
  },
  "card-profile": {
    label: "Card Profile",
    href: `/${URL_PATH_SEGMENTS.CARD_PROFILE}`,
    icon: (
      <span className="-mr-0.5 text-lg">
        <CardInclinedIcon />
      </span>
    ),
  },
  create: {
    label: "Create Profile",
    href: `/${URL_PATH_SEGMENTS.CARD_PROFILE_CREATE}`,
  },
  edit: {
    label: "Edit Profile",
    href: `/${URL_PATH_SEGMENTS.CARD_PROFILE_EDIT}`,
  },
  "card-request": {
    label: "Card Request",
    href: `/${URL_PATH_SEGMENTS.CARD_REQUEST}`,
    icon: <CardCheckIcon />,
  },
  view: {
    label: "Request Details",
    href: `/${URL_PATH_SEGMENTS.CARD_REQUEST_VIEW}`,
  },
  stock: {
    label: "Stock",
    href: "/stock",
    icon: (
      <span className="-mr-0.5 text-lg">
        <GraphIcon />
      </span>
    ),
  },
  cards: {
    label: "Cards",
    href: "/cards",
    icon: (
      <span className="-mr-0.5 text-lg">
        <ATMCard2Icon />
      </span>
    ),
  },
  "authorization-list": {
    label: "Authorization List",
    href: "/authorization-list",
    icon: <ListIcon />,
  },
  "authorization-queue": {
    label: "Authorization Queue",
    href: "/authorization-queue",
    icon: <StackedLayerIcon />,
  },
  trail: {
    label: "Trail",
    href: "/trail",
    icon: <MapIcon />,
  },
  account: {
    label: "Account",
    href: "/account",
    icon: <User2Icon />,
  },
};
