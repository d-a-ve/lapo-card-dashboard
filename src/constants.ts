export const URL_PATH_SEGMENTS = {
  HOME: "/",
  CARD_PROFILE: "card-profile",
  CARD_PROFILE_CREATE: "card-profile/create",
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
