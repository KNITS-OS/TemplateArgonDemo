import { colors } from "./theme";

export const lineChartExample = chart => {
  return {
    data: {
      labels: chart.map(item => item.label),
      datasets: [
        {
          label: "Sales",
          data: chart.map(item => item.value),
          pointRadius: 4,
        },
      ],
    },
    options: {
      plugins: {
        tooltip: {
          intersect: false,
        },
        decimation: {
          enabled: true,
        },
      },
    },
  };
};

export const barChartExample = chart => {
  return {
    data: {
      labels: chart.map(item => item.label),
      datasets: [
        {
          label: "Performance",
          backgroundColor: colors.theme.danger,
          data: chart.map(item => item.value),
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
    },
  };
};

export const dotChartExample = chart => {
  return {
    data: {
      labels: chart.map(item => item.label),
      datasets: [
        {
          data: chart.map(item => item.value),
          label: "Performance",
          pointRadius: 10,
          pointHoverRadius: 15,
          showLine: false,
        },
      ],
    },
    options: {},
  };
};

export const doughnutChartExample = chart => {
  return {
    data: {
      labels: chart.map(item => item.label),
      datasets: [
        {
          data: chart.map(item => item.value),
          backgroundColor: [
            colors.theme.danger,
            colors.theme.warning,
            colors.theme.success,
            colors.theme.primary,
            colors.theme.info,
          ],
          label: "Dataset 1",
        },
      ],
    },
    options: {
      plugins: {
        legend: {
          position: "top",
        },
      },
      animation: {
        animateScale: true,
      },
      cutout: 120,
    },
  };
};

export const pieChartExample = chart => {
  return {
    data: {
      labels: chart.map(item => item.label),
      datasets: [
        {
          label: "Dataset 1",
          data: chart.map(item => item.value),
          backgroundColor: [
            colors.theme.danger,
            colors.theme.warning,
            colors.theme.success,
            colors.theme.primary,
            colors.theme.info,
          ],
        },
      ],
    },
    options: {
      plugins: {
        legend: {
          position: "top",
        },
      },
      animation: {
        animateScale: true,
      },
    },
  };
};

export const multiBarChartExample = chart => {
  return {
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
  };
};
