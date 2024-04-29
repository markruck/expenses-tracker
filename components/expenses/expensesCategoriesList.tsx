import ExpenseCategoryEntry from "./expensesCategoryEntry"

type ExpenseCategoriesProps = {
  categories: { value: string[] }
  expenses: {
    date: Date
    amount: number
    category: string
    description: string
  }[]
}

/**
 * ExpenseCategories component
 * @example
 * <ExpenseCategories categories={{ value: ["Groceries", "Rent"] }} expenses={[{ date: new Date(), amount: 100, category: "Groceries", description: "Some description", index: 1 }]} />
 * @param {object} categories - The categories object
 * @param {object[]} expenses - The expenses array
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