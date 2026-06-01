import { useExpensesStore } from "@lib/stores/expensesStore";
import ChartComponent from "../ui/chart";

/**
 * ExpensesCharts component. Returns a list of expenses by category
 * @example
 * <ExpensesCharts />
 */

const ExpensesCharts = () => {
  const { getExpenses } = useExpensesStore();

  const {
    value: { expenses },
  } = getExpenses("all");

  const expensesByCategory = expenses.reduce(
    (acc: { [key: string]: number }, { category, amount }) => {
      acc[category] = acc[category] ? acc[category] + amount : amount;
      return acc;
    },
    {}
  );

  const chartData = [
    ["Category", "Amount"],
    ...Object.entries(expensesByCategory).map(([category, amount]) => [
      category,
      amount,
    ]),
  ];

  return (
    <div className="charts-grid">
      <div className="chart-panel">
        <ChartComponent
          data={chartData}
          chartType="PieChart"
          width="100%"
          height="300px"
          options={{
            title: "Expenses by Category",
            is3D: true,
            chartArea: { left: 24, top: 48, width: "82%", height: "74%" },
            colors: ["#2563eb", "#dc4a2d", "#16a34a", "#ca8a04", "#7c3aed"],
            legend: { position: "right", alignment: "center" },
            pieSliceTextStyle: { color: "#ffffff", fontSize: 14, bold: true },
            titleTextStyle: { color: "#172033", fontSize: 16, bold: true },
          }}
          className="chart"
        />
      </div>
      <div className="chart-panel">
        <ChartComponent
          data={chartData}
          chartType="BarChart"
          width="100%"
          height="300px"
          options={{
            title: "Expenses by Category",
            is3D: true,
            chartArea: { left: 88, top: 48, width: "68%", height: "68%" },
            colors: ["#2563eb"],
            legend: { position: "top", alignment: "end" },
            titleTextStyle: { color: "#172033", fontSize: 16, bold: true },
          }}
          className="chart"
        />
      </div>
    </div>
  );
};

export default ExpensesCharts;
