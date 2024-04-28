import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

/**
 * A function to format a number as a currency in the German locale
 * @example
 * currencyFormatDE.format(1000) // returns "1.000,00 €"
 * @param {number} amount - The amount to format
 * @returns {string} The formatted currency string
 * @see {@link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/NumberFormat}
 */

export const currencyFormatDE = new Intl.NumberFormat("de-DE", {
  style: "currency",
  currency: "EUR",
});
