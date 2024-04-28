import React from "react";
import { signal } from "@preact/signals-react";
import useLocalStorage from "./localStorage";

type IncomeStoreProps = {
    amount: number;
    type: string;
    description: string;
}

export const income = signal<IncomeStoreProps[] | []>([]);

/**
 * Income store. Sets the income from local storage and provides functions to add and delete income
 * @example
 * const { income, addIncome, deleteIncome } = useIncomeStore();
 * @returns {object} The income array
 * @returns {function} The addIncome function
 * @returns {function} The deleteIncome function
 */

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