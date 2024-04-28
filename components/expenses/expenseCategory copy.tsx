// a component that renders a single expense category with a colapsed list of expenses
import { useState } from "react";
import { currencyFormatDE } from "../../lib/utils";
import Expense from "./expense";
import styles from "./expenses.module.css";

type ExpensePorps = {
  date: Date;
  amount: number;
  category: string;
  description: string;
}

const ExpenseCategory = ({ category, expenses }: { category: string, expenses: ExpensePorps[] }) => {
  const [isCollapsed, setIsCollapsed] = useState(true);
  const totalExpensesByCategory = expenses.reduce((a, b) => a + b.amount, 0);
  return (
    <div className={styles.container}>
      <div className="flex flex-1 space-between">
        <h3 className="capitalize bold">{category}</h3>
        <span onClick={() => setIsCollapsed(!isCollapsed)}>{">"}</span>
      </div>
      <div>
        {isCollapsed ? null : expenses.map((entry, index) => {
          return (
            <Expense key={`expense_${index}`} {...entry} index={index} />
          )
        })}
      </div>
      <p className="flex flex-end bold margin-1-0">Total Expenses: {currencyFormatDE.format(totalExpensesByCategory)}</p>
    </div>
  )
}

export default ExpenseCategory;
