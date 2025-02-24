import React from "react";
import { Chart, ChartWrapperProps } from "react-google-charts";

type PieChartProps = {
  data: Array<Array<string | number>>;
  chartType: ChartWrapperProps["chartType"];
  width: string;
  height: string;
  options: object;
  className?: string;
};

/**
 * A chart component
 * @example
 * <ChartComponent data={chartData} chartType="PieChart" width="100%" height="300px" options={{ title: "Expenses by Category", is3D: true }} />
 * @param {PieChartProps} props - The props for the component
 * @param {Array<Array<string | number>>} props.data - The data for the chart
 * @param {ChartWrapperProps["chartType"]} props.chartType - The type of the chart
 * @param {string} props.width - The width of the chart
 * @param {string} props.height - The height of the chart
 * @param {object} props.options - The options for the chart
 * @param {string} props.className - The class name for the chart
 * @see {@link https://react-google-charts.com}
 */

const ChartComponent = ({ data, chartType, width, height, options, className }: PieChartProps) => {

  return (
    <Chart
      className={className}
      width={width}
      height={height}
      chartType={chartType}
      data={data}
      options={options}
      rootProps={{ "data-testid": "1" }}
    />
  );
};

export default ChartComponent;
