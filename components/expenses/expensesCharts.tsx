import { useExpensesStore } from "@/lib/stores/expensesStore";
import ChartComponent from "../ui/chart"

const ExpensesCharts = () => {
  const { getExpenses } = useExpensesStore();

  const { value: { expenses }
  } = getExpenses('all');

  const chartData = [
    ["Category", "Amount"],
    ...expenses.map(({ category, amount }) => [category, amount])
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