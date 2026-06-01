import { useIncomeStore } from "@lib/stores/incomeStore";
import ChartComponent from "../ui/chart";
import { useExpensesStore } from "@lib/stores/expensesStore";
import styles from "./homeCharts.module.css";

/**
 * HomeCharts. Returns the charts for the home page
 * @example
 * <HomeCharts />
 */

const HomeCharts = () => {
  const { getIncome } = useIncomeStore();
  const { getExpenses } = useExpensesStore();

  const {
    value: { expenses },
  } = getExpenses();
  const {
    value: { income },
  } = getIncome();

  type ExpensesByCategoryProps = {
    [key: string]: number;
  };

  const expensesByCategory = expenses.reduce(
    (
      acc: ExpensesByCategoryProps,
      { category, amount }: { category: string; amount: number }
    ) => {
      acc[category] = acc[category] ? acc[category] + amount : amount;
      return acc;
    },
    {}
  );

  const expensesChartData = [
    ["Category", "Amount"],
    ...Object.entries(expensesByCategory).map(([category, amount]) => [
      category,
      amount,
    ]),
  ];

  const incomeByType = income.reduce(
    (
      acc: ExpensesByCategoryProps,
      { type, amount }: { type: string; amount: number }
    ) => {
      acc[type] = acc[type] ? acc[type] + amount : amount;
      return acc;
    },
    {}
  );

  const incomeChartData = [
    ["Category", "Amount"],
    ...Object.entries(incomeByType).map(([type, amount]) => [type, amount]),
  ];

  return (
    <div className={styles.chartsContainer}>
      <div className="chart-panel">
        <ChartComponent
          data={expensesChartData}
          chartType="PieChart"
          width="100%"
          height="300px"
          options={{
            title: "Expenses",
            pieHole: 0.4,
            is3D: false,
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
          data={incomeChartData}
          chartType="PieChart"
          width="100%"
          height="300px"
          options={{
            title: "Income",
            pieHole: 0.4,
            is3D: false,
            chartArea: { left: 24, top: 48, width: "82%", height: "74%" },
            colors: ["#2563eb", "#16a34a", "#7c3aed"],
            legend: { position: "right", alignment: "center" },
            pieSliceTextStyle: { color: "#ffffff", fontSize: 14, bold: true },
            titleTextStyle: { color: "#172033", fontSize: 16, bold: true },
          }}
          className="chart"
        />
      </div>
    </div>
  );
};

export default HomeCharts;
