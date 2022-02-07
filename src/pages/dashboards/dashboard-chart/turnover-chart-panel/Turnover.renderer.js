import { Bar } from "react-chartjs-2";

import { colors } from "variables/theme";

import { barDataTemplate, barOptionsTemplate } from "..";

export const toTurnoverBarChartUI = apiResponse => {
  const template = barDataTemplate({
    bars: [
      { label: "Onboarded", backgroundColor: colors.theme["success"] },
      { label: "Offboarded", backgroundColor: colors.theme["danger"] },
    ],
  });
  apiResponse.forEach(turnOverRecord => {
    template.labels = template.labels ? template.labels : [];
    template.labels.push(turnOverRecord.month);
    template.datasets[0].data.push(turnOverRecord.onboarded);
    template.datasets[1].data.push(turnOverRecord.offboarded);
  });

  return {
    data: template,
    options: barOptionsTemplate,
  };
};

export const renderChart = response => {
  const chartData = response.data;
  const barChart = toTurnoverBarChartUI(chartData);
  return <Bar data={barChart.data} options={barChart.options} className="chart-canvas" />;
};
