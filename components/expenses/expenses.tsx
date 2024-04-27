import { useExpensesStore } from "@/lib/stores/expensesStore";
import { currencyFormatDE } from "@/lib/utils";
import React from "react";
import MonthSelector from "../monthSelector";
import Expense from "./expense";
import { useCategoriesStore } from "@/lib/stores/categoriesStore";
import CategoriesSelector from "../categorieSelector";
import styles from "./expenses.module.css";

const Expenses = () => {
  const { getExpenses } = useExpensesStore();
  const { categories } = useCategoriesStore();
  const [month, setMonth] = React.useState(new Date().getMonth());
  const [category, setCategory] = React.useState<string>('all');

  const { value: { expenses, totalExpenses }
  } = getExpenses(month, category);

  const handleSetMonth = (month: number) => {
    setMonth(month);
  }

  const handleSetCategory = (category: string) => {
    setCategory(category);
  }
  if (!expenses.length) {
    return (
      <div className="list-container">
        <p>No expense entries</p>
      </div>
    )
  }

  return (
    <div className={styles.container}>
      <div className="flex flex-row gap-05">
        <MonthSelector month={month} setMonth={handleSetMonth} />
        <CategoriesSelector category={category} setCategory={handleSetCategory} showAll />
      </div>
      <div className="list-container">
        {expenses.map((entry, index) => {
          return (
            <Expense key={`expense_${index}`} {...entry} index={index} />
          )
        })}
        {expenses.length ? <p className="flex flex-end bold margin-1-0">Total Expenses: {currencyFormatDE.format(totalExpenses)}</p> : null}
      </div>
    </div>
  );
}

export default Expenses;