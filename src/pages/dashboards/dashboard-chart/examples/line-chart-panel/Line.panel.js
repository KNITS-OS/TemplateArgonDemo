import { dashboardService } from "redux/dashboards";

import { ChartPanel } from "../../chart-panels";
import { useChart } from "../../useChart";

import { renderChart } from "./Line.renderer";

export const LineChartPanel = () => {
  const { isLoading, chart, alert } = useChart(dashboardService.getLineReport, renderChart);
  return (
    <ChartPanel
      alert={alert}
      chart={chart}
      isLoading={isLoading}
      title="Line Chart example"
      subTitle="Line Chart"
    />
  );
};
