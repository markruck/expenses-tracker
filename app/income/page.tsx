'use client'
import { Income, IncomeForm } from "@/components/income";
import ChartComponent from "@/components/ui/chart";
import { useIncomeStore } from "@/lib/stores/incomeStore";
import Link from "next/link";

/**
 * Income page. Returns the Income form and the Income list.
 * @example
 * <Page />
 * @returns {React.Component} The Income page
 */

const Page = () => {
    const { income, deleteIncome, totalIncome, loading } = useIncomeStore();
    if (!income.value.length) {
        return (
            <div className="list-container">
                <p>No income entries</p>
            </div>
        )
    }
    const chartData = [
        ["Category", "Amount"],
        ...income.value.map(({ type, amount }) => [type, amount])
    ];

    return (
        <div>
            <IncomeForm />
            <div className="flex flex-1 flex-row space-between">
                <div style={{ width: '49.5%' }}>
                    <ChartComponent data={chartData} chartType="PieChart" width="100%" height="300px" options={{
                        title: "Expenses by Category",
                        is3D: true,
                    }} className="chart" />
                </div>
                <div style={{ width: '49.5%' }}>
                    <ChartComponent data={chartData} chartType="BarChart" width="100%" height="300px" options={{
                        title: "Expenses by Category",
                        is3D: true,
                    }} className="chart" />
                </div>
            </div>
            <Income />
            <div className="flex flex-1 justify-end">
                <Link className="button button-danger" href="/income/error" title="Home">Throw test error</Link>
            </div>
        </div>
    );
}

export default Page;