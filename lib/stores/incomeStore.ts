import React from "react";
import { computed, signal } from "@preact/signals-react";
import useLocalStorage from "./localStorage";
import { useMonthStore } from "./monthStore";

export type IncomeProps = {
    date: Date;
    amount: number;
    type: string;
    description: string;
}

export const income = signal<IncomeProps[] | []>([]);

/**
 * Income store. Sets the income from local storage and provides functions to add and delete income
 * @example
 * const { income, addIncome, deleteIncome } = useIncomeStore();
 * @returns {object} The income array
 * @returns {function} The addIncome function
 * @returns {function} The deleteIncome function
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
        income.value = income.value.filter((entry, index) => {
            if (entry.date === date && entry.type === type && entry.amount === amount) {
                return false;
            }
            return true;
        });
        setStoredValue('income', income.value);
    }
    const totalIcome = (income: IncomeProps[]) => income.reduce((a, b) => a + (b.amount), 0);

    const getIncome = () => {
        return computed(() => {
            const currentMonth = month || new Date().getMonth();
            const currentYear = new Date().getFullYear();
            const currentIncome = income.value.filter((i) => {
                const incomeDate = new Date(i.date);
                return incomeDate.getMonth() === currentMonth.value && incomeDate.getFullYear() === currentYear;
            });

            if (currentIncome.length > 0) {
                return { income: currentIncome, totalIncome: totalIcome(currentIncome) };
            }

            const previousIncome = income.value.filter((i) => {
                const incomeDate = new Date(i.date);
                return incomeDate.getMonth() < currentMonth.value && incomeDate.getFullYear() === currentYear;
            });

            return { income: previousIncome, totalIncome: totalIcome(previousIncome) };
        });
    }


    return { getIncome, addIncome, deleteIncome, loading };
}