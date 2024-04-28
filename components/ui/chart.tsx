// A custome chart component that uses the react-google-chart library to render a pie chart. Uses the useExpensesStore hook to get the expenses data for the selected month. And the months data is passed as a prop to the component.

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
