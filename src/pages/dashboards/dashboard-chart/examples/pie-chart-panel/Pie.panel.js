import { dashboardService } from "redux/dashboards";

import { ChartPanel } from "../../chart-panels";
import { useChart } from "../../useChart";

import { renderChart } from "./Pie.renderer";

export const PieChartPanel = () => {
  const { isLoading, chart, alert } = useChart(dashboardService.getPieReport, renderChart);

  return (
    <ChartPanel
      alert={alert}
      chart={chart}
      isLoading={isLoading}
      title="Pie Chart example"
      subTitle="Pie Chart"
    />
  );
};
