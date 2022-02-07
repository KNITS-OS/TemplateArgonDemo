import { dashboardService } from "redux/dashboards";

import { ChartPanel } from "../../chart-panels";
import { useChart } from "../../useChart";

import { renderChart } from "./Doughnut.renderer";

export const DoughnutChartPanel = () => {
  const { isLoading, chart, alert } = useChart(dashboardService.getDoughnutReport, renderChart);

  return (
    <ChartPanel
      alert={alert}
      chart={chart}
      isLoading={isLoading}
      title="Doughnut Chart example"
      subTitle="Doughnut Chart"
    />
  );
};
