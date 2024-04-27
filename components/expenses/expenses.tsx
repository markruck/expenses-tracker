import { useExpensesStore } from "@/lib/stores/expensesStore";
import { currencyFormatDE } from "@/lib/utils";
import React from "react";
import MonthSelector from "../monthSelector";
import Expense from "./expense";
import { useCategoriesStore } from "@/lib/stores/categoriesStore";
import CategoriesSelector from "../categorieSelector";

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

  return (
    <div>
      <div className="flex flex-row">
        <MonthSelector month={month} setMonth={handleSetMonth} />
        <CategoriesSelector category={category} setCategory={handleSetCategory} />
      </div>
      {expenses.map((entry, index) => {
        return (
          <Expense key={`expense_${index}`} {...entry} index={index} />
        )
      })}
      {expenses.length ? <p className="flex flex-end bold">Total Expenses: {currencyFormatDE.format(totalExpenses)}</p> : null}
    </div>
  );
}

export default Expenses;