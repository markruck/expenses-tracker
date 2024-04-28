'use client'

import { Expenses, ExpensesForm } from "@/components/expenses";
import ChartComponent from "@/components/ui/chart";
import { useExpensesStore } from "@/lib/stores/expensesStore";
import React from "react";

/**
 * Expenses page. Returns the Expenses form and the Expenses list.
 * @example
 * <Page />
 * @returns {React.Component} The Expenses page
 */

const Page = () => {
    const { getExpenses, loading } = useExpensesStore();
    const { value: { expenses, totalExpenses }
    } = getExpenses(3, 'all');
    const [month, setMonth] = React.useState(new Date().getMonth());
    const [category, setCategory] = React.useState<string>('all');
    const chartData = [
        ["Category", "Amount"],
        ...expenses.map(({ category, amount }) => [category, amount])
    ];
    const styles = {}

    return (
        <div>
            <ExpensesForm />
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
            <Expenses />
        </div>
    );
}

export default Page;