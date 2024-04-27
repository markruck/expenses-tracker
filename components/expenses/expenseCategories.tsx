import ExpenseCategory from "./expenseCategory";

const ExpenseCategories = ({ categories, expenses, loading }) => {
  if (loading) return <p>Loading...</p>
  return (
    <div>
      {categories.value.map((category) => {
        const expensesByCategory = expenses.filter((entry) => entry.category === category);
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