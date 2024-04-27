import { useExpensesStore } from "@/lib/stores/expensesStore";
import React from "react";
import MonthSelector from "../monthSelector";
import { useCategoriesStore } from "@/lib/stores/categoriesStore";
import CategoriesSelector from "../categorieSelector";
import ExpenseCategory from "./expenseCategory";
import { currencyFormatDE } from "@/lib/utils";

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
      <h2 className="text-align-center">Expenses list</h2>
      <div className="flex flex-row gap-05">
        <MonthSelector month={month} setMonth={handleSetMonth} />
        <CategoriesSelector category={category} setCategory={handleSetCategory} showAll />
      </div>
      <div className="list-container">
        {expenses.length === 0 ? <p>No expense entries</p> :
          categories.value.map((category) => {
            const expensesByCategory = expenses.filter((entry) => entry.category === category);
            if (expensesByCategory.length === 0) return null;
            return (
              <div key={`category_${category}`}>
                <ExpenseCategory category={category} expenses={expensesByCategory} />
              </div>
            )
          })}
        <p className="flex flex-end bold margin-1-0">Total Expenses: {currencyFormatDE.format(totalExpenses)}</p>
      </div>
    </div>
  );
}

export default Expenses;