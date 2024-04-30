import React from "react";
import { signal, computed } from "@preact/signals-react";
import useLocalStorage from "./localStorage";
import { sortBy } from "lodash"
import { useMonthStore } from "./monthStore";

export type ExpenseProps = {
  date: Date;
  amount: number;
  category: string;
  description: string;
}

export const expenses = signal<ExpenseProps[] | []>([]);

/**
 * Expenses store. Provides functions to add and delete expenses. Handles storing and getting the expenses from the local storage
 * @example
 * const { getExpenses, addExpense, deleteExpense } = useExpensesStore();
 * @returns {function} The getExpenses function
 * @returns {function} The addExpense function
 * @returns {function} The deleteExpense function
 * @returns {boolean} The loading state
 */

export const useExpensesStore = () => {
  const { month } = useMonthStore();
  const { getStoredValue, setStoredValue } = useLocalStorage();
  const [loading, setLoading] = React.useState(true);

  React.useEffect(() => {
    expenses.value = getStoredValue('expenses', []);
    setLoading(false);
  }, []);

  const addExpense = (value: ExpenseProps) => {
    expenses.value = [...expenses.value, value];
    setStoredValue('expenses', expenses.value);
  }

  const deleteExpense = ({ date, category, amount }: Partial<ExpenseProps>) => {
    expenses.value = expenses.value.filter((entry, index) => {
      return !(entry.date === date && entry.category === category && entry.amount === amount)
    });
    setStoredValue('expenses', expenses.value);
  }

  const getExpenses = (category?: string) => {
    return computed(() => {
      const currentExpenses = expenses.value.filter((entry) => {
        const expenseDate = new Date(entry.date);
        const currentYear = new Date().getFullYear();

        if (category === undefined || category === 'all') {
          return expenseDate.getMonth() === month.value;
        }

        return (
          entry.category === category
          && expenseDate.getMonth() === month.value
          && expenseDate.getFullYear() === currentYear
        );
      });

      if (currentExpenses.length === 0) {
        return {
          expenses: [{ date: new Date(), amount: 0, category: '', description: '' }],
          totalExpenses: 0
        };
      }

      return {
        expenses: sortBy(currentExpenses, ['category', 'date']),
        totalExpenses: currentExpenses.reduce((a, b) => a + (b.amount), 0)
      };
    })
  }

  return { addExpense, deleteExpense, getExpenses, loading };
}