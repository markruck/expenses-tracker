import React, { use } from "react";
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
 * Expenses store. Sets the expenses from local storage and provides functions to add and delete expenses
 * @example
 * const { expenses, addExpense, deleteExpense, getExpenses } = useExpensesStore();
 * @returns {object} The expenses array
 * @returns {function} The addExpense function
 * @returns {function} The deleteExpense function
 * @returns {function} The getExpenses function
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
      if (entry.date === date && entry.category === category && entry.amount === amount) {
        console.log('Deleting entry:', entry);
        return false;
      }
      return true;
    });
    setStoredValue('expenses', expenses.value);
  }

  const totalExpenses = (expenses: ExpenseProps[]) => expenses.reduce((a, b) => a + (b.amount), 0);

  const getExpenses = (category?: string) => {
    return computed(() => {
      const getExpensesByCategoryAndMonth = expenses.value.filter((entry) => {
        // Check if entry.date is a javascript date object and if not convert it to a date object
        if (!(entry.date instanceof Date)) entry.date = new Date(entry.date);
        if (category === undefined || category === 'all') return entry.date.getMonth() === month.value;
        return entry.category === category && entry.date.getMonth() === month.value
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