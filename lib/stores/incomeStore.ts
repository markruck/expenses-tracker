import React from "react";
import { computed, signal } from "@preact/signals-react";
import useLocalStorage from "./localStorage";
import { useMonthStore } from "./monthStore";
import { sortBy } from "lodash";

export type IncomeProps = {
    date: Date;
    amount: number;
    type: string;
    description: string;
}

export const income = signal<IncomeProps[] | []>([]);
/**
 * Income store. Provides functions to add and delete income. Handles storing and getting the income from the local storage
 * @example
 * const { getIncome, addIncome, deleteIncome } = useIncomeStore();
 * @returns {function} The getIncome function
 * @returns {function} The addIncome function
 * @returns {function} The deleteIncome function
 * @returns {boolean} The loading state
 */

export const useIncomeStore = () => {
    const { month } = useMonthStore();
    const { getStoredValue, setStoredValue } = useLocalStorage();
    const [loading, setLoading] = React.useState(true);

    React.useEffect(() => {
        income.value = getStoredValue('income', []);
        setLoading(false);
    }, []);

    const addIncome = (value: IncomeProps) => {
        income.value = [...income.value, value];
        setStoredValue('income', income.value);
    }

    const deleteIncome = ({ date, type, amount }: Partial<IncomeProps>) => {
        income.value = income.value.filter((entry) => {
            return !(entry.date === date && entry.type === type && entry.amount === amount)
        });
        setStoredValue('income', income.value);
    }

    const getIncome = () => {
        return computed(() => {
            const currentMonth = month || new Date().getMonth();
            const currentYear = new Date().getFullYear();

            const currentIncome = income.value.filter((entry) => {
                const incomeDate = new Date(entry.date);
                return incomeDate.getMonth() === currentMonth.value
                    && incomeDate.getFullYear() === currentYear;
            });

            if (currentIncome.length === 0) {
                return { income: [{ date: null, amount: 0, type: '', description: '' }], totalIncome: 0 };
            }

            return {
                income: sortBy(currentIncome, ['type', 'date']),
                totalIncome: currentIncome.reduce((a, b) => a + (b.amount), 0)
            };
        });
    }


    return { getIncome, addIncome, deleteIncome, loading };
}