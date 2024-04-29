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

/**
 * ExpenseCategory component. Returns a single expense category with a colapsed list of expenses
 * @example
 * <ExpenseCategory category="Groceries" expenses={[{ date: new Date(), amount: 100, category: "Groceries", description: "Some description", index: 1 }]} />
 * @param {string} category - The category of the expense
 * @param {object[]} expenses - The expenses array
 */

const ExpenseCategory = ({ category, expenses }: { category: string, expenses: ExpensePorps[] }) => {

  const [isCollapsed, setIsCollapsed] = useState(true);
  const totalExpensesByCategory = expenses.reduce((a, b) => a + b.amount, 0);

  return (
    <div className={`cursor-pointer ${styles.categoryContanier}`}>
      <div className="flex flex-1 space-between align-center" onClick={() => setIsCollapsed(!isCollapsed)}>
        <h3 className="capitalize bold">{category}</h3>
        <p className="flex flex-end bold margin-1-0">{currencyFormatDE.format(totalExpensesByCategory)}</p>
      </div>
      {isCollapsed
        ? null
        : <div className={styles.category}>
          {expenses.map((entry, index) => {
            return (
              <Expense key={`expense_${index}`} {...entry} />
            )
          })}
        </div>}
    </div>
  )
}

export default ExpenseCategory;
