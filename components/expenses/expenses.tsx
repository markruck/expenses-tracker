import { useExpensesStore } from "@/lib/stores/expensesStore";
import React from "react";
import MonthSelector from "../monthSelector";
import { useCategoriesStore } from "@/lib/stores/categoriesStore";
import CategoriesSelector from "../categorieSelector";
import ExpenseCategoriesList from "./expensesCategoriesList";
import { currencyFormatDE } from "@/lib/utils";
import LoadingScreen from "../ui/loadingScreen";
import ExpensesCharts from "./expensesCharts";

/**
 * Expenses component. Returns a list of expenses by category
 * @example
 * <Expenses />
 * @returns {React.Component} The Expenses component
 */

const Expenses = () => {
  const { getExpenses, loading } = useExpensesStore();
  const { categories } = useCategoriesStore();
  const [category, setCategory] = React.useState<string>('all');

  const { value: { expenses, totalExpenses }
  } = getExpenses(category);


  const handleSetCategory = (category: string) => {
    setCategory(category);
  }

  if (loading) return <LoadingScreen />

  return (
    <>
      <div className="flex flex-row gap-05">
        <MonthSelector />
        <CategoriesSelector category={category} setCategory={handleSetCategory} showAll />
      </div>
      <ExpensesCharts />
      <div className="list-container">
        <h2 className="margin-1-0">Expenses list</h2>
        <ExpenseCategoriesList categories={categories} expenses={expenses} />
        <p className="flex flex-end bold margin-1-0">Total Expenses: {currencyFormatDE.format(totalExpenses)}</p>
      </div>
    </>
  );
}

export default Expenses;