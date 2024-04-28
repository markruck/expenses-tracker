import ExpenseCategory from "./expenseCategory";
import LoadingScreen from "./loadingScreen";
type ExpenseCategoriesProps = {
  categories: { value: string[] };
  expenses: { date: Date; amount: number; category: string; description: string }[];
  loading: boolean;
}
const ExpenseCategories = ({ categories, expenses, loading }: ExpenseCategoriesProps) => {
  if (loading) return <LoadingScreen />
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