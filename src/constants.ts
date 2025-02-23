import { formatInNGNFull } from "./lib/utils";

export const URL_PATH_SEGMENTS = {
  HOME: "/",
  CARD_PROFILE: "card-profile",
  CARD_PROFILE_CREATE: "card-profile/create",
  CARD_PROFILE_EDIT: "card-profile/edit",
  CARD_REQUEST: "card-request",
  CARD_REQUEST_VIEW: "card-request/view",
};

export const CARD_SCHEMES = {
  VERVE: "Verve",
  MASTERCARD: "Mastercard",
  VISA: "Visa",
} as const;

export const CURRENCY = {
  NAIRA: "NGN",
  DOLLAR: "USD",
} as const;

export const FEE_FREQUENCY = {
  ONE_OFF: "One Off",
  MONTHLY: "Monthly",
} as const;

export const FEE_IMPACT = {
  ISSURANCE: "Issurance",
  REISSUE: "Pin Reissue",
} as const;

export const ACCOUNT_PAD = {
  NONE: "None",
  PREFIX: "Branch Code Prefix",
  SUFFIX: "Branch Code Suffix",
} as const;

export const CARD_REQUEST_STATUS = {
  PENDING: "pending",
  ACKNOWLEDGED: "acknowledged",
  IN_PROGRESS: "in-progress",
  READY: "ready",
  DISPATCHED: "dispatched",
} as const;

export const CARD_REQUESTS_MAP = new Map([
  [
    "card-profile-1",
    {
      id: "card-profile-1",
      branch: "corporate",
      initiator: "RootUser",
      quantity: "10",
      batch: 50611234,
      dateRequested: "11/10/2024 23:21:03",
      cardType: "Classic Debit",
      cardCharges: formatInNGNFull(1500),
      status: CARD_REQUEST_STATUS.DISPATCHED,
    },
  ],
  [
    "card-profile-2",
    {
      id: "card-profile-2",
      branch: "retail",
      initiator: "BranchManager",
      quantity: "25",
      batch: 50611235,
      dateRequested: "11/10/2024 23:45:12",
      cardType: "Premium Debit",
      cardCharges: formatInNGNFull(2500),
      status: CARD_REQUEST_STATUS.READY,
    },
  ],
  [
    "card-profile-3",
    {
      id: "card-profile-3",
      branch: "commercial",
      initiator: "SupervisorUser",
      quantity: "50",
      batch: 50611236,
      dateRequested: "11/11/2024 09:15:00",
      cardType: "Business Credit",
      cardCharges: formatInNGNFull(5090),
      status: CARD_REQUEST_STATUS.IN_PROGRESS,
    },
  ],
  [
    "card-profile-4",
    {
      id: "card-profile-4",
      branch: "digital",
      initiator: "SystemAdmin",
      quantity: "100",
      batch: 50611237,
      dateRequested: "11/11/2024 10:30:45",
      cardType: "Virtual Card",
      cardCharges: formatInNGNFull(1000),
      status: CARD_REQUEST_STATUS.PENDING,
    },
  ],
  [
    "card-profile-5",
    {
      id: "card-profile-5",
      branch: "private",
      initiator: "RelationshipManager",
      quantity: "5",
      batch: 50611238,
      dateRequested: "11/11/2024 11:45:30",
      cardType: "Platinum Credit",
      cardCharges: formatInNGNFull(10000),
      status: CARD_REQUEST_STATUS.ACKNOWLEDGED,
    },
  ],
  [
    "card-profile-6",
    {
      id: "card-profile-6",
      branch: "international",
      initiator: "BranchOps",
      quantity: "30",
      batch: 50611239,
      dateRequested: "11/11/2024 13:20:15",
      cardType: "Travel Card",
      cardCharges: formatInNGNFull(3000),
      status: CARD_REQUEST_STATUS.IN_PROGRESS,
    },
  ],
]);

export const CARD_REQUESTS: {
  id: string;
  branch: string;
  initiator: string;
  quantity: string;
  batch: number;
  dateRequested: string;
  cardType: string;
  cardCharges: string;
  status: string;
}[] = Array.from(CARD_REQUESTS_MAP, ([, value]) => value);
