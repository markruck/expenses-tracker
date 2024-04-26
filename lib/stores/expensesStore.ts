import { signal } from "@preact/signals-react";

type ExpensePorps = {
    date: Date;
    amount: number;
    type: string;
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

    const totalExpenses = expenses.value.reduce((a, b) => a + (b.amount), 0);

    return { expenses, addExpense, deleteExpense, totalExpenses };
}