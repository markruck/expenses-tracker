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

type ClassValue = string | number | boolean | null | undefined;

export const cn = (...classNames: ClassValue[]) => {
  return classNames.filter(Boolean).join(" ");
};

export const parseDateInputValue = (value: string) => {
  const [year, month, day] = value.split("-").map(Number);
  return new Date(year, month - 1, day);
};

export const formatDateInputValue = (date: Date) => {
  const year = date.getFullYear();
  const month = `${date.getMonth() + 1}`.padStart(2, "0");
  const day = `${date.getDate()}`.padStart(2, "0");

  return `${year}-${month}-${day}`;
};
