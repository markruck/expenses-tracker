'use client'
import { Income, IncomeForm } from "@/components/income";
import IncomeCharts from "@/components/income/incomeCharts";
import Link from "next/link";

/**
 * Income page. Returns the Income form and the Income list.
 * @example
 * <Page />
 * @returns {React.Component} The Income page
 */

const Page = () => {
    return (
        <div>
            <IncomeForm />
            <IncomeCharts />
            <Income />
            <div className="flex flex-1 justify-end">
                <Link className="button button-danger" href="/income/error" title="Home">Throw test error</Link>
            </div>
        </div>
    );
}

export default Page;