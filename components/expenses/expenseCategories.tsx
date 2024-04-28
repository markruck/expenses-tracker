import ExpenseCategory from "./expenseCategory"

type ExpenseCategoriesProps = {
  categories: { value: string[] }
  expenses: {
    date: Date
    amount: number
    category: string
    description: string
    index: number
  }[]
}

/**
 * ExpenseCategories component
 * @example
 * <ExpenseCategories categories={{ value: ["Groceries", "Rent"] }} expenses={[{ date: new Date(), amount: 100, category: "Groceries", description: "Some description", index: 1 }]} />
 * @param {object} categories - The categories object
 * @param {object[]} expenses - The expenses array
 */

const ExpenseCategories = ({ categories, expenses }: ExpenseCategoriesProps) => {

  return (
    <div>
      {categories.value.map((category) => {
        const expensesByCategory = expenses.filter((entry, index) => {
          entry.index = index;
          console.log(entry)
          return entry.category === category
        });
        return (
          expensesByCategory.length === 0 ? null : <div key={`category_${category}`}>
            <ExpenseCategory category={category} expenses={expensesByCategory} />
          </div>
        )
      })}
    </div>
  )
}

export default ExpenseCategories;