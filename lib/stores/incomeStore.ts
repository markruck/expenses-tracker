import React from "react";
import { computed, signal } from "@preact/signals-react";
import useLocalStorage from "./localStorage";
import { useMonthStore } from "./monthStore";
import { sortBy } from "lodash";

export type IncomeProps = {
    id?: number;
    date: Date;
    amount: number;
    type: string;
    description: string;
}

export const income = signal<IncomeProps[] | []>([]);
/**
 * Income store. Provides functions to add and delete income. Handles storing and getting the income from the local storage
 * @example
 * const { getIncome, addIncome, deleteIncome, loading } = useIncomeStore();
 * @returns An object with the getIncome, addIncome, deleteIncome and loading properties
 */

export const useIncomeStore = () => {
    const { month } = useMonthStore();
    const { getStoredValue, setStoredValue } = useLocalStorage();
    const [loading, setLoading] = React.useState(true);

    React.useEffect(() => {
        income.value = getStoredValue('income', []);
        setLoading(false);
    }, []);

    /**
     * Add an income
     * @param {object} value The income object
     * @param {Date} value.date The date of the income
     * @param {string} value.type The type of the income
     * @param {number} value.amount The amount of the income
     * @param {string} value.description The description of the income
     * @example
     * addIncome({ date: new Date(), type: 'main', amount: 100, description: 'Salary' })
     */
    const addIncome = (value: IncomeProps) => {
        value.id = new Date().getTime();
        income.value = [...income.value, value];
        setStoredValue('income', income.value);
    }

    /**
     * Delete an income
     * @param {number} value.id The id of the income
     * @example
     * deleteIncome({ id: 1 })
     */
    const deleteIncome = ({ id }: Partial<IncomeProps>) => {
        income.value = income.value.filter((entry) => {
            return !(entry.id === id);
        });
        setStoredValue('income', income.value);
    }

    /**
     * Get the income for the selected month
     * @returns An object with the income and the total income for the selected month
     * @example
     * const { income, totalIncome } = getIncome();
    */

    const getIncome = () => {
        return computed(() => {
            const currentMonth = month || new Date().getMonth();
            const currentYear = new Date().getFullYear();

            const currentIncome = income.value.filter((entry) => {

                // The date is stored as a string in the local storage, it is not a Date object. We need to convert it to a Date object
                const incomeDate = new Date(entry.date);
                return incomeDate.getMonth() === currentMonth.value
                    && incomeDate.getFullYear() === currentYear;
            });

            if (currentIncome.length === 0) {
                return { income: [{ date: new Date(), amount: 0, type: '', description: '' }], totalIncome: 0 };
            }

            return {
                income: sortBy(currentIncome, ['type', 'date']),
                totalIncome: currentIncome.reduce((a, b) => a + (b.amount), 0)
            };
        });
    }


    return { getIncome, addIncome, deleteIncome, loading };
}