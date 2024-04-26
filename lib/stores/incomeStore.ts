import { signal } from "@preact/signals-react";

type IncomeProps = {
    amount: number;
    type: string;
    description: string;
}
export const income = signal<IncomeProps[] | []>([]);

export const useIncomeStore = () => {
    const addIncome = (value: IncomeProps) => {
        income.value = [...income.value, value];
    }

    const deleteIncome = (index: number) => {
        income.value = income.value.filter((_, i) => i !== index);
    }

    const totalIncome = income.value.reduce((a, b) => a + (b.amount), 0);

    return { income, addIncome, deleteIncome, totalIncome };
}