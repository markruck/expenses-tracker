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
 * Month store
 * @example
 * const { month, setMonth } = useMonthStore();
 * @returns {object} The month signal
 * @returns {function} The setMonth function
 */

export const useMonthStore = () => {
  const setMonth = (selectedMonth: number) => {
    month.value = selectedMonth;
  }

  return { month, setMonth }
}