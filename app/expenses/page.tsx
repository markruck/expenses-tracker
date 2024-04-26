'use client'

import { Expenses, ExpensesForm } from "@/components/expenses";

const Income = () => {
    return (
        <div>
            <h1>Expenses</h1>
            <ExpensesForm />
            <Expenses />
        </div>
    );
}

export default Income;