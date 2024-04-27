import React from "react";
import { signal } from "@preact/signals-react";
import useLocalStorage from "./localStorage";

type IncomeStoreProps = {
    amount: number;
    type: string;
    description: string;
}

export const income = signal<IncomeStoreProps[] | []>([]);

export const useIncomeStore = () => {
    const { getStoredValue, setStoredValue } = useLocalStorage();
    const [loading, setLoading] = React.useState(true);

    React.useEffect(() => {
        income.value = getStoredValue('income', []);
        setLoading(false);
    }, []);

    const addIncome = (value: IncomeStoreProps) => {
        income.value = [...income.value, value];
        setStoredValue('income', income.value);
    }

    const deleteIncome = (index: number) => {
        income.value = income.value.filter((_, i) => i !== index);
        setStoredValue('income', income.value);
    }

    const totalIncome = income.value.reduce((a, b) => a + (b.amount), 0);

    return { income, addIncome, deleteIncome, totalIncome, loading };
}