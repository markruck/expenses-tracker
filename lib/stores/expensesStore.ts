import { signal, computed } from "@preact/signals-react";
import { sortBy } from "lodash"

type ExpensePorps = {
  date: Date;
  amount: number;
  category: string;
  description: string;
}
export const expenses = signal<ExpensePorps[] | []>([]);

export const useExpensesStore = () => {
  const addExpense = (value: ExpensePorps) => {
    expenses.value = [...expenses.value, value];
  }

  const deleteExpense = (index: number) => {
    expenses.value = expenses.value.filter((_, i) => i !== index);
  }

  const totalExpenses = (expenses: ExpensePorps[]) => expenses.reduce((a, b) => a + (b.amount), 0);

  const getExpenses = (month: number, category?: string) => {
    return computed(() => {
      const getExpensesByCategoryAndMonth = expenses.value.filter((entry) => {
        if (category === undefined || category === 'all') return entry.date.getMonth() === month;
        return entry.category === category && entry.date.getMonth() === month
      });
      const totalExpensesByCategoryAndMonth = totalExpenses(getExpensesByCategoryAndMonth);
      return { expenses: sortBy(getExpensesByCategoryAndMonth, ['category', 'date']), totalExpenses: totalExpensesByCategoryAndMonth };
    })
  }

  return { expenses, addExpense, deleteExpense, getExpenses };
}