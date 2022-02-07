import { Doughnut } from "react-chartjs-2";

import { colors } from "variables/theme";

import { doughnutDataTemplate, doughnutOptionsTemplate } from "../../templates";

const toDoughnutChartUI = apiResponse => {
  const template = doughnutDataTemplate({
    label: "Doughnut",
    backgroundColor: [
      colors.theme["primary"],
      colors.theme["info"],
      colors.theme["success"],
      colors.theme["danger"],
      colors.theme["neutral4"],
    ],
  });

  apiResponse.forEach(record => {
    template.labels?.push(record.label);
    template.datasets[0].data.push(record.value);
  });

  return {
    data: template,
    options: doughnutOptionsTemplate,
  };
};

export const renderChart = response => {
  const chartData = response.data;
  const doughnutChart = toDoughnutChartUI(chartData);
  return (
    <Doughnut data={doughnutChart.data} options={doughnutChart.options} className="chart-canvas" />
  );
};
