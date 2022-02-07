import { Bar } from "react-chartjs-2";

import { colors } from "variables/theme";

import { barDataTemplate, multiBarOptionsTemplate } from "../../templates";

export const toMultiBarChartUI = apiResponse => {
  const template = barDataTemplate({
    bars: [
      { label: "New", backgroundColor: colors.theme["primary"] },
      { label: "Old", backgroundColor: colors.theme["danger"] },
      { label: "Recent", backgroundColor: colors.theme["info"] },
    ],
  });
  apiResponse.forEach(barRecord => {
    template.labels = template.labels ? template.labels : [];
    template.labels.push(barRecord.month);
    template.datasets[0].data.push(barRecord.new);
    template.datasets[1].data.push(barRecord.old);
    template.datasets[2].data.push(barRecord.recent);
  });

  return {
    data: template,
    options: multiBarOptionsTemplate,
  };
};

export const renderChart = response => {
  const chartData = response.data;
  const barChart = toMultiBarChartUI(chartData);
  return <Bar data={barChart.data} options={barChart.options} className="chart-canvas" />;
};
