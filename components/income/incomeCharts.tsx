import { useIncomeStore } from "@/lib/stores/incomeStore";
import ChartComponent from "../ui/chart"

const IncomeCharts = () => {

  const { income } = useIncomeStore();

  const chartData = [
    ["Category", "Amount"],
    ...income.value.map(({ type, amount }) => [type, amount])
  ];

  return (
    <div className="flex flex-1 flex-row space-between">
      <div style={{ width: '49.5%' }}>
        <ChartComponent data={chartData} chartType="PieChart" width="100%" height="300px" options={{
          title: "Income by Category",
          is3D: true,
        }} className="chart" />
      </div>
      <div style={{ width: '49.5%' }}>
        <ChartComponent data={chartData} chartType="BarChart" width="100%" height="300px" options={{
          title: "Income by Category",
          is3D: true,
        }} className="chart" />
      </div>
    </div>
  )
}

export default IncomeCharts