import React from "react";
import { signal, computed } from "@preact/signals-react";
import useLocalStorage from "./localStorage";
import { sortBy } from "lodash"

export type ExpensePorps = {
  date: Date;
  amount: number;
  category: string;
  description: string;
}

export const expenses = signal<ExpensePorps[] | []>([]);

export const useExpensesStore = () => {
  const { getStoredValue, setStoredValue } = useLocalStorage();
  const [loading, setLoading] = React.useState(true);

  React.useEffect(() => {
    expenses.value = getStoredValue('expenses', []);
    setLoading(false);
  }, []);

  const addExpense = (value: ExpensePorps) => {
    expenses.value = [...expenses.value, value];
    setStoredValue('expenses', expenses.value);
  }

  const deleteExpense = (index: number) => {
    expenses.value = expenses.value.filter((_, i) => i !== index);
    setStoredValue('expenses', expenses.value);
  }

  const totalExpenses = (expenses: ExpensePorps[]) => expenses.reduce((a, b) => a + (b.amount), 0);

  const getExpenses = (month: number, category?: string) => {
    return computed(() => {
      const getExpensesByCategoryAndMonth = expenses.value.filter((entry) => {
        // Check if entry.date is a javascript date object and if not convert it to a date object
        if (!(entry.date instanceof Date)) entry.date = new Date(entry.date);
        if (category === undefined || category === 'all') return entry.date.getMonth() === month;
        return entry.category === category && entry.date.getMonth() === month
      });
      const totalExpensesByCategoryAndMonth = totalExpenses(getExpensesByCategoryAndMonth);
      return {
        expenses: sortBy(getExpensesByCategoryAndMonth, ['category', 'date']),
        totalExpenses: totalExpensesByCategoryAndMonth
      };
    })
  }

  return { expenses, addExpense, deleteExpense, getExpenses, loading };
}