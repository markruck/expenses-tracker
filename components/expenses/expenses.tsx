import { useExpensesStore } from "@/lib/stores/expensesStore";
import React from "react";
import MonthSelector from "../monthSelector";
import { useCategoriesStore } from "@/lib/stores/categoriesStore";
import CategoriesSelector from "../categorieSelector";
import ExensesCategories from "./expenseCategories";
import { currencyFormatDE } from "@/lib/utils";
import LoadingScreen from "../ui/loadingScreen";

/**
 * Expenses component. Returns a list of expenses by category
 * @example
 * <Expenses />
 * @returns {React.Component} The Expenses component
 */

const Expenses = () => {
  const { getExpenses, loading } = useExpensesStore();
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

  if (loading) return <LoadingScreen />

  return (
    <div>
      <h2 className="text-align-center">Expenses list</h2>
      <div className="flex flex-row gap-05">
        <MonthSelector month={month} setMonth={handleSetMonth} />
        <CategoriesSelector category={category} setCategory={handleSetCategory} showAll />
      </div>
      <div className="list-container">
        <ExensesCategories categories={categories} expenses={expenses} />
        <p className="flex flex-end bold margin-1-0">Total Expenses: {currencyFormatDE.format(totalExpenses)}</p>
      </div>
    </div>
  );
}

export default Expenses;