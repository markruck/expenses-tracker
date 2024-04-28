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
 * @param {Array<Array<string | number>>} data - The data for the chart
 * @param {ChartWrapperProps["chartType"]} chartType - The type of the chart
 * @param {string} width - The width of the chart
 * @param {string} height - The height of the chart
 * @param {object} options - The options for the chart
 * @param {string} className - The class name for the chart
 * @returns {React.Component} The Chart component
 */

const ChartComponent = ({ data, chartType, width, height, options, className }: PieChartProps) => {

  return (
    <Chart
      className={className}
      width={width}
      height={height}
      chartType={chartType}
      loader={<div>Loading Chart</div>}
      data={data}
      options={options}
      rootProps={{ "data-testid": "1" }}
    />
  );
};

export default ChartComponent;
