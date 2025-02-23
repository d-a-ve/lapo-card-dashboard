import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatInNGN(amount: number) {
  return new Intl.NumberFormat(undefined, {
    currency: "NGN",
    style: "currency",
    currencyDisplay: "narrowSymbol",
    notation: "compact",
    compactDisplay: "short",
  }).format(amount);
}

export function formatInNGNFull(amount: number) {
  return new Intl.NumberFormat(undefined, {
    currency: "NGN",
    style: "currency",
    currencyDisplay: "narrowSymbol",
    maximumFractionDigits: 0,
  }).format(amount);
}
