import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const currencyFormatDE = new Intl.NumberFormat("de-DE", {
  style: "currency",
  currency: "EUR",
});
