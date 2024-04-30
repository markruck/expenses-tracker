import ExpenseCategoryEntry from "./expensesCategoryEntry"
import type { ExpenseProps } from "@/lib/stores/expensesStore"

type ExpenseCategoriesProps = {
  categories: {
    value: string[]
  }
  expenses: ExpenseProps[]
}

/**
 * ExpenseCategoriesList component. Returns a list of expenses by category
 * @example
 * <ExpenseCategoriesList categories={{ value: ['Groceries', 'Rent'] }} expenses={[{ date: new Date(), amount: 100, category: "Groceries", description: "Some description", index: 1 }]} />
 * @param {object} props - The props for the component
 * @param {object} props.categories - The categories object
 * @param {object[]} props.expenses - The expenses array
 * @param {string[]} props.categories.value - The categories array
 */

const ExpenseCategoriesList = ({ categories, expenses }: ExpenseCategoriesProps) => {

  return (
    <>
      {categories.value.map((category) => {
        const expensesByCategory = expenses.filter(entry => {
          return entry.category === category
        });
        return (
          expensesByCategory.length === 0 ? null : <div key={`category_${category}`}>
            <ExpenseCategoryEntry category={category} expenses={expensesByCategory} />
          </div>
        )
      })}
    </>
  )
}

export default ExpenseCategoriesList;