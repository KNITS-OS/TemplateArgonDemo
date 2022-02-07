import { dashboardService } from "redux/dashboards";

import { ChartPanel } from "../../chart-panels";
import { useChart } from "../../useChart";

import { renderChart } from "./Bar.renderer";

export const BarChartPanel = () => {
  const { isLoading, chart, alert } = useChart(dashboardService.getBarReport, renderChart);
  return (
    <ChartPanel
      alert={alert}
      chart={chart}
      isLoading={isLoading}
      title="Bar Chart Example"
      subTitle="Bar Chart"
    />
  );
};
