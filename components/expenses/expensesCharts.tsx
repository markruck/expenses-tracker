import { useExpensesStore } from "@/lib/stores/expensesStore";
import ChartComponent from "../ui/chart"

/**
 * ExpensesCharts component. Returns a list of expenses by category
 * @example
 * <ExpensesCharts />
 */

const ExpensesCharts = () => {
  const { getExpenses } = useExpensesStore();

  const { value: { expenses } } = getExpenses('all');

  const expensesByCategory = expenses.reduce((acc: { [key: string]: number }, { category, amount }) => {
    acc[category] = acc[category] ? acc[category] + amount : amount;
    return acc;
  }, {});

  const chartData = [
    ["Category", "Amount"],
    ...Object.entries(expensesByCategory).map(([category, amount]) => [category, amount])
  ];

  return (
    <div className="flex flex-1 flex-row space-between">
      <div style={{ width: '49.5%' }}>
        <ChartComponent data={chartData} chartType="PieChart" width="100%" height="300px" options={{
          title: "Expenses by Category",
          is3D: true,
        }} className="chart" />
      </div>
      <div style={{ width: '49.5%' }}>
        <ChartComponent data={chartData} chartType="BarChart" width="100%" height="300px" options={{
          title: "Expenses by Category",
          is3D: true,
        }} className="chart" />
      </div>
    </div>
  )
}

export default ExpensesCharts