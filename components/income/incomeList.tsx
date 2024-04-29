'use client'

import { useIncomeStore } from "../../lib/stores/incomeStore";
import { currencyFormatDE } from "@/lib/utils";
import LoadingScreen from "../ui/loadingScreen";
import Link from "next/link";
import IncomeEntry from "./incomeEntry";

/**
 * Income component. Returns a list of income entries
 * @example
 * <Income />
 * @returns {React.Component} The Income component
 */

const Income = () => {
    const { income, totalIncome, loading } = useIncomeStore();
    if (loading) return <LoadingScreen />

    return (
        <>
            <div className="list-container">
                {income.value.map((entry, index) => {
                    return <IncomeEntry key={`income_${index}`} {...entry} index={index} />
                })}
                <p className="flex flex-end bold margin-1-0">Total Income: {currencyFormatDE.format(totalIncome)}</p>
            </div>
            <div className="flex flex-1 justify-end">
                <Link className="button button-danger" href="/income/error" title="Home">Throw test error</Link>
            </div>
        </>
    );
}

export default Income;