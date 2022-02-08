import { dashboardService } from "redux/dashboards";

import { ChartPanel } from "../../chart-panels";
import { useChart } from "../../hooks";

import { renderChart } from "./MultiBar.renderer";

export const MultiBarChartPanel = () => {
  const { isLoading, chart, alert } = useChart(dashboardService.getMultiBarReport, renderChart);
  return (
    <ChartPanel
      alert={alert}
      chart={chart}
      isLoading={isLoading}
      title="Multi Bar Chart Example"
      subTitle="Multi Bar Chart"
    />
  );
};
