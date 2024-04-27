'use client'

import { Expenses, ExpensesForm } from "@/components/expenses";

const Income = () => {
    return (
        <div>
            <ExpensesForm />
            <Expenses />
        </div>
    );
}

export default Income;