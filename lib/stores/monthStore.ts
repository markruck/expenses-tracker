import { signal } from "@preact/signals-react";

/**
 * Months array
 */
export const months = [
  "January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"
];

const month = signal(new Date().getMonth());

/**
 * Month store. Provides the month signal and a setter function
 * @example
 * const { month, setMonth } = useMonthStore();
 * @returns An object with the month signal and a setter function { month, setMonth }
 */

export const useMonthStore = () => {
  const setMonth = (selectedMonth: number) => {
    month.value = selectedMonth;
  }

  return { month, setMonth }
}