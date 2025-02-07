// a component that renders a single expense category with a colapsed list of expenses
import { useState } from "react";
import { currencyFormatDE } from "../../lib/utils";
import ExpenseEntry from "./expenseEntry";
import styles from "./expenses.module.css";

import { ExpenseProps } from "@/lib/stores/expensesStore";

/**
 * A single expense category entry
 * @example
 * <ExpenseCategoryEntry category="Groceries" expenses={[{ date: new Date(), amount: 100, category: "Groceries", description: "Some description", index: 1 }]} />
 * @param {object} props - The props for the component
 * @param {string} props.category - The category of the expense
 * @param {object[]} props.expenses - The expenses array
 */

const ExpenseCategoryEntry = ({ category, expenses }: { category: string, expenses: ExpenseProps[] }) => {

  const [isCollapsed, setIsCollapsed] = useState(false);
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
              <ExpenseEntry key={`expense_${index}`} {...entry} />
            )
          })}
        </div>}
    </div>
  )
}

export default ExpenseCategoryEntry;
