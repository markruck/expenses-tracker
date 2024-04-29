import { signal } from "@preact/signals-react";

export const months = [
  "January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"
];

const month = signal(new Date().getMonth());

export const useMonthStore = () => {
  const setMonth = (selectedMonth: number) => {
    month.value = selectedMonth;
  }

  return { month, setMonth }
}