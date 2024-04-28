'use client'

import { Expenses, ExpensesForm } from "@/components/expenses";

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
            <Expenses />
        </div>
    );
}

export default Page;