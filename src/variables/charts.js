import { colors } from "./theme";

export const multiBarChartExample = chart => ({
  data: {
    labels: chart.map(item => item.label),
    datasets: [
      {
        label: "Dataset 1",
        backgroundColor: colors.theme.danger,
        data: chart.map(item => item.values[0]),
        maxBarThickness: 10,
      },
      {
        label: "Dataset 2",
        backgroundColor: colors.theme.primary,
        data: chart.map(item => item.values[1]),
        maxBarThickness: 10,
      },
      {
        label: "Dataset 3",
        backgroundColor: colors.theme.success,
        data: chart.map(item => item.values[2]),
        maxBarThickness: 10,
      },
    ],
  },
  options: {
    plugins: {
      tooltip: {
        mode: "index",
        intersect: false,
      },
    },
    scales: {
      x: {
        stacked: true,
      },
      y: {
        stacked: true,
      },
    },
  },
});
