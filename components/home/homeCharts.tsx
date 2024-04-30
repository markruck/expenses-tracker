import { useIncomeStore } from "@/lib/stores/incomeStore";
import ChartComponent from "../ui/chart"
import { useExpensesStore } from "@/lib/stores/expensesStore";

const HomeCharts = () => {
  const { getIncome } = useIncomeStore();
  const { getExpenses } = useExpensesStore();

  const { value: { expenses } } = getExpenses();
  const { value: { income } } = getIncome();

  const expensesChartData = [
    ["Category", "Amount"],
    ...expenses.map(({ category, amount }) => [category, amount])
  ];

  const incomeChartData = [
    ["Category", "Amount"],
    ...income.map(({ type, amount }) => [type, amount])
  ];

  return (
    <div className="flex flex-1 flex-row space-between">
      <div style={{ width: '49.5%' }}>
        <ChartComponent data={expensesChartData} chartType="PieChart" width="100%" height="300px" options={{
          title: "Expenses",
          pieHole: 0.4,
          is3D: false,
        }} className="chart" />
      </div>
      <div style={{ width: '49.5%' }}>
        <ChartComponent data={incomeChartData} chartType="PieChart" width="100%" height="300px" options={{
          title: "Income",
          pieHole: 0.4,
          is3D: false,
        }} className="chart" />
      </div>
    </div>
  )
}

export default HomeCharts