'use client'

import { useIncomeStore } from "../../lib/stores/incomeStore";
import { currencyFormatDE } from "@/lib/utils";
import LoadingScreen from "../ui/loadingScreen";
import Link from "next/link";
import IncomeEntry from "./incomeEntry";
import MonthSelector from "../monthSelector";
import IncomeCharts from "./incomeCharts";

/**
 * Income component. Returns a list of income entries
 * @example
 * <Income />
 */

const IncomeList = () => {
    const { getIncome, loading } = useIncomeStore();
    const { value: { income, totalIncome } } = getIncome();

    if (loading) return <LoadingScreen />

    return (
        <>
            <MonthSelector />
            <IncomeCharts />
            <div className="list-container">
                <h2 className="margin-1-0">Income list</h2>
                {income.map((entry, index) => {
                    return <IncomeEntry key={`income_${index}`} {...entry} />
                })}
                <p className="flex flex-end bold margin-1-0">Total Income: {currencyFormatDE.format(totalIncome)}</p>
            </div>
            <div className="flex flex-1 justify-end">
                <Link className="button button-danger" href="/income/error" title="Home">Throw test error</Link>
            </div>
        </>
    );
}

export default IncomeList;