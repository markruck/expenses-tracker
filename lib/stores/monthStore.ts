import { signal } from "@preact/signals-react";

const month = signal(new Date().getMonth());

export const useMonthStore = () => {
  const setMonth = (selectedMonth: number) => {
    month.value = selectedMonth;
  }

  return { month, setMonth }
}