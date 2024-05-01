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
 */

export const useExpensesStore = () => {
  const { month } = useMonthStore();
  const { getStoredValue, setStoredValue } = useLocalStorage();
  const [loading, setLoading] = React.useState(true);

  React.useEffect(() => {
    expenses.value = getStoredValue('expenses', []);
    setLoading(false);
  }, []);

  /**
   * Add an expense
   * @param {object} value The expense object
   * @param {Date} value.date The date of the expense
   * @param {string} value.category The category of the expense
   * @param {number} value.amount The amount of the expense
   * @example
   * addExpense({ date: new Date(), category: 'Groceries', amount: 100 })
   */
  const addExpense = (value: ExpenseProps) => {
    expenses.value = [...expenses.value, value];
    setStoredValue('expenses', expenses.value);
  }

  /**
   * Delete an expense
   * @param {object} value The expense object
   * @param {Date} value.date The date of the expense
   * @param {string} value.category The category of the expense
   * @param {number} value.amount The amount of the expense
   * @example
   * deleteExpense({ date: new Date(), category: 'Groceries', amount: 100 })
   */
  const deleteExpense = ({ date, category, amount }: Partial<ExpenseProps>) => {
    expenses.value = expenses.value.filter((entry, index) => {
      return !(entry.date === date && entry.category === category && entry.amount === amount)
    });
    setStoredValue('expenses', expenses.value);
  }

  /**
   * Get the expenses
   * @param {string} category The category of the expense
   * @returns {object} The expenses array
   * @example
   * const { expenses, totalExpenses } = getExpenses('Groceries')
   * const { expenses, totalExpenses } = getExpenses()
   */
  const getExpenses = (category?: string) => {
    return computed(() => {
      const currentExpenses = expenses.value.filter((entry) => {
        const expenseDate = new Date(entry.date);
        const currentYear = new Date().getFullYear();

        // The date is stored as a string in the local storage, it is not a Date object. We need to convert it to a Date object
        entry.date = new Date(entry.date);

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