import { Line } from "react-chartjs-2";

import { lineDataTemplate, lineOptionsTemplate } from "../../templates";

const toLineChartUI = apiResponse => {
  const template = lineDataTemplate({ label: "Line" });
  apiResponse.forEach(lineRecord => {
    template.labels = template.labels ? template.labels : [];
    template.labels.push(lineRecord.label);
    template.datasets[0].data.push(lineRecord.value);
  });
  return {
    data: template,
    options: lineOptionsTemplate,
  };
};

export const renderChart = response => {
  const chartData = response.data;
  const chart = toLineChartUI(chartData);
  return (
    <Line data={chart.data} options={chart.options} id="chart-workforce" className="chart-canvas" />
  );
};
