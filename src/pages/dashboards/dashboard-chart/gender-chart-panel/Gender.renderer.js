import { Pie } from "react-chartjs-2";

import { colors } from "variables/theme";

import { pieDataTemplate, pieOptionsTemplate } from "..";

const toPieChartUI = apiResponse => {
  const genderTemplate = pieDataTemplate({
    label: "Gender",
    backgroundColor: [colors.theme["primary"], colors.theme["info"]],
  });

  apiResponse.forEach(genderRecord => {
    genderTemplate.labels?.push(genderRecord.label);
    genderTemplate.datasets[0].data.push(genderRecord.value);
  });

  return {
    data: genderTemplate,
    options: pieOptionsTemplate,
  };
};

export const renderChart = response => {
  const chartData = response.data;
  const pieChart = toPieChartUI(chartData);
  return <Pie data={pieChart.data} options={pieChart.options} className="chart-canvas" />;
};
