import { Line } from "react-chartjs-2";

import { dotDataTemplate, dotOptionsTemplate } from "../../templates";

const toDotChartUI = apiResponse => {
  const template = dotDataTemplate({ label: "Dot" });
  apiResponse.forEach(dotRecord => {
    template.labels = template.labels ? template.labels : [];
    template.labels.push(dotRecord.label);
    template.datasets[0].data.push(dotRecord.value);
  });
  return {
    data: template,
    options: dotOptionsTemplate,
  };
};

export const renderChart = response => {
  const chartData = response.data;
  const chart = toDotChartUI(chartData);
  return (
    <Line data={chart.data} options={chart.options} id="chart-workforce" className="chart-canvas" />
  );
};
