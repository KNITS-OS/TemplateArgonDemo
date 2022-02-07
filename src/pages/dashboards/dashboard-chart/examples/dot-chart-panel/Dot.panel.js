import { dashboardService } from "redux/dashboards";

import { ChartPanel } from "../../chart-panels";
import { useChart } from "../../useChart";

import { renderChart } from "./Dot.renderer";

export const DotChartPanel = () => {
  const { isLoading, chart, alert } = useChart(dashboardService.getDotReport, renderChart);
  return (
    <ChartPanel
      alert={alert}
      chart={chart}
      isLoading={isLoading}
      title="Dot Chart example"
      subTitle="Dot Chart"
    />
  );
};
