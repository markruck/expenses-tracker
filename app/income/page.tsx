'use client'
import { Income, IncomeForm } from "@/components/income";
import IncomeCharts from "@/components/income/incomeCharts";

/**
 * Income page. Returns the Income form and the Income list.
 * @example
 * <Page />
 * @returns {React.Component} The Income page
 */

const Page = () => {
    return (
        <>
            <IncomeForm />
            <IncomeCharts />
            <Income />
        </>
    );
}

export default Page;