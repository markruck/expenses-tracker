'use client'

import { useIncomeStore } from "../../lib/stores/incomeStore";
import { currencyFormatDE } from "@/lib/utils";
import styles from "./income.module.css";
import LoadingScreen from "../ui/loadingScreen";
import Image from "next/image";
import trashIcon from "@/public/assets/images/trash-outline-icon.svg";

/**
 * Income component. Returns a list of income entries
 * @example
 * <Income />
 * @returns {React.Component} The Income component
 */

const Income = () => {
    const { income, deleteIncome, totalIncome, loading } = useIncomeStore();
    if (loading) return <LoadingScreen />
    if (!income.value.length) {
        return (
            <div className="list-container">
                <p>No income entries</p>
            </div>
        )
    }
    return (
        <div className="list-container">
            {income.value.map((entry, index) => {
                return (
                    <div key={`income_${index}`} className="list-entry-container">
                        <div className={styles.entry}>
                            <p className="capitalize">{entry.type} income</p>
                            <p className="font-size-small">{entry.description}</p>
                            <p className="text-right">{currencyFormatDE.format(entry.amount)}</p>
                            <Image className="cursor-pointer" src={trashIcon} alt="delete" width={16} onClick={() => { deleteIncome(index) }} />
                        </div>
                    </div>
                )
            })}
            <p className="flex flex-end bold margin-1-0">Total Income: {currencyFormatDE.format(totalIncome)}</p>
        </div>
    );
}

export default Income;