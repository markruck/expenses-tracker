'use client'

import { Expenses, ExpensesForm } from "@/components/expenses";
import ExpensesCharts from "@/components/expenses/expensesCharts";
import React from "react";

/**
 * Expenses page. Returns the Expenses form and the Expenses list.
 * @example
 * <Page />
 * @returns {React.Component} The Expenses page
 */

const Page = () => {
    return (
        <div>
            <ExpensesForm />
            <ExpensesCharts />
            <Expenses />
        </div>
    );
}

export default Page;