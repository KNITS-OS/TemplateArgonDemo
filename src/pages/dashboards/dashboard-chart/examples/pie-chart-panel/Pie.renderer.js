import { Pie } from "react-chartjs-2";

import { colors } from "variables/theme";

import { pieDataTemplate, pieOptionsTemplate } from "../..";

const toPieChartUI = apiResponse => {
  const template = pieDataTemplate({
    label: "Pie",
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
    options: pieOptionsTemplate,
  };
};

export const renderChart = response => {
  const chartData = response.data;
  const pieChart = toPieChartUI(chartData);
  return <Pie data={pieChart.data} options={pieChart.options} className="chart-canvas" />;
};
