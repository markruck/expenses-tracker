import { useIncomeStore } from "@lib/stores/incomeStore";
import ChartComponent from "../ui/chart";

/**
 * IncomeCharts. Returns the charts for the income page
 * @example
 * <IncomeCharts />
 */

const IncomeCharts = () => {
  const { getIncome } = useIncomeStore();
  const {
    value: { income },
  } = getIncome();

  const incomeByType = income.reduce((acc: { [key: string]: number }, { type, amount }) => {
    acc[type] = acc[type] ? acc[type] + amount : amount;
    return acc;
  }, {});

  const chartData = [
    ["Category", "Amount"],
    ...Object.entries(incomeByType).map(([type, amount]) => [type, amount]),
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
            title: "Income by Category",
            is3D: true,
            chartArea: { left: 24, top: 48, width: "82%", height: "74%" },
            colors: ["#2563eb", "#16a34a", "#7c3aed"],
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
            title: "Income by Category",
            chartArea: { left: 72, top: 48, width: "72%", height: "68%" },
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

export default IncomeCharts;
