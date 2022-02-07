import { Bar } from "react-chartjs-2";

import { colors } from "variables/theme";

import { barDataTemplate, barOptionsTemplate } from "../..";

export const toBarChartUI = apiResponse => {
  const template = barDataTemplate({
    bars: [
      { label: "New", backgroundColor: colors.theme["primary"] },
      { label: "Old", backgroundColor: colors.theme["danger"] },
    ],
  });
  apiResponse.forEach(barRecord => {
    template.labels = template.labels ? template.labels : [];
    template.labels.push(barRecord.month);
    template.datasets[0].data.push(barRecord.new);
    template.datasets[1].data.push(barRecord.old);
  });

  return {
    data: template,
    options: barOptionsTemplate,
  };
};

export const renderChart = response => {
  const chartData = response.data;
  const barChart = toBarChartUI(chartData);
  return <Bar data={barChart.data} options={barChart.options} className="chart-canvas" />;
};
