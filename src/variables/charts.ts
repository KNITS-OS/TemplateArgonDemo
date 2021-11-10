/*!

=========================================================
* Argon Dashboard PRO React - v1.2.0
=========================================================

* Product Page: https://www.creative-tim.com/product/argon-dashboard-react
* Copyright 2021 Creative Tim (https://www.creative-tim.com)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/

import { ChartData } from "chart.js";
import { Theme } from "../types/types";
import "./chartDefaults";

// Only for demo purposes - return a random number to generate datasets
var randomScalingFactor = function () {
  return Math.round(Math.random() * 100);
};

let mode: Theme = "light"; //(themeMode) ? themeMode : 'light';
var fonts = {
  base: "Open Sans",
};

// Colors
const colors = {
  gray: {
    100: "#f6f9fc",
    200: "#e9ecef",
    300: "#dee2e6",
    400: "#ced4da",
    500: "#adb5bd",
    600: "#8898aa",
    700: "#525f7f",
    800: "#32325d",
    900: "#212529",
  },
  theme: {
    default: "#172b4d",
    primary: "#5e72e4",
    secondary: "#f4f5f7",
    info: "#11cdef",
    success: "#2dce89",
    danger: "#f5365c",
    warning: "#fb6340",
  },
  black: "#12263F",
  white: "#FFFFFF",
  transparent: "transparent",
};

// @todo remove if not needed
// Chart.js global options
export const chartOptions = () => {
  // Options
  var options = {
    defaults: {
      global: {
        responsive: true,
        maintainAspectRatio: false,
        defaultColor:
          mode === "dark" ? colors.gray[700] : colors.gray[600],
        defaultFontColor:
          mode === "dark" ? colors.gray[700] : colors.gray[600],
        defaultFontFamily: fonts.base,
        defaultFontSize: 13,
        layout: {
          padding: 0,
        },
        legend: {
          display: false,
          position: "bottom",
          labels: {
            usePointStyle: true,
            padding: 16,
          },
        },
        elements: {
          point: {
            radius: 0,
            backgroundColor: colors.theme["primary"],
          },
          line: {
            tension: 0.4,
            borderWidth: 4,
            borderColor: colors.theme["primary"],
            backgroundColor: colors.transparent,
            borderCapStyle: "rounded",
          },
          rectangle: {
            backgroundColor: colors.theme["warning"],
          },
          arc: {
            backgroundColor: colors.theme["primary"],
            borderColor: mode === "dark" ? colors.gray[800] : colors.white,
            borderWidth: 4,
          },
        },
        tooltips: {
          enabled: true,
          mode: "index",
          intersect: false,
        },
      },
      doughnut: {
        cutoutPercentage: 83,
        legendCallback: function (chart: any) {
          var data = chart.data;
          var content = "";

          data.labels.forEach(function (label: string, index: number) {
            var bgColor = data.datasets[0].backgroundColor[index];

            content += '<span class="chart-legend-item">';
            content +=
              '<i class="chart-legend-indicator" style="background-color: ' +
              bgColor +
              '"></i>';
            content += label;
            content += "</span>";
          });

          return content;
        },
      },
    },
  };

  // let lineChart = new Chart(ctx,{
  // type: 'line',

  // })

  // // yAxes
  // Chart.scaleService.updateScaleDefaults("linear", {
  //   gridLines: {
  //     borderDash: [2],
  //     borderDashOffset: 2,
  //     color: mode === "dark" ? colors.gray[900] : colors.gray[300],
  //     drawBorder: false,
  //     drawTicks: false,
  //     lineWidth: 1,
  //     zeroLineWidth: 1,
  //     zeroLineColor: mode === "dark" ? colors.gray[900] : colors.gray[300],
  //     zeroLineBorderDash: [2],
  //     zeroLineBorderDashOffset: 2,
  //   },
  //   ticks: {
  //     beginAtZero: true,
  //     padding: 10,
  //     callback: function (value: number) {
  //       if (!(value % 10)) {
  //         return value;
  //       }
  //       return null;
  //     },
  //   },
  // });

  // // xAxes
  // Chart.scaleService.updateScaleDefaults("category", {
  //   gridLines: {
  //     drawBorder: false,
  //     drawOnChartArea: false,
  //     drawTicks: false,
  //   },
  //   ticks: {
  //     padding: 20,
  //   },
  // });

  return options;
};

// @todo remove if not needed
// Parse global options
export const parseOptions = (parent: any, options: any) => {
  for (var item in options) {
    if (typeof options[item] !== "object") {
      parent[item] = options[item];
    } else {
      parseOptions(parent[item], options[item]);
    }
  }
};

// Example 1 of Chart inside src/views/dashboards/Dashboard.js
export const chartExample1 = {
  options: {
    scales: {
      yAxes: [
        {
          gridLines: {
            color: colors.gray[700],
            zeroLineColor: colors.gray[700],
          },
          ticks: {
            callback: function (value: number) {
              if (!(value % 10)) {
                return "$" + value + "k";
              }
              return null;
            },
          },
        },
      ],
    },
    tooltips: {
      callbacks: {
        label: function (item: any, data: any) {
          var label = data.datasets[item.datasetIndex].label || "";
          var yLabel = item.yLabel;
          var content = "";

          if (data.datasets.length > 1) {
            content += label;
          }

          content += "$" + yLabel + "k";
          return content;
        },
      },
    },
  },
  data1: () => {
    return {
      labels: ["May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
      datasets: [
        {
          label: "Performance",
          data: [0, 20, 10, 30, 15, 40, 20, 60, 60],
        },
      ],
    };
  },
  data2: () => {
    return {
      labels: ["May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
      datasets: [
        {
          label: "Performance",
          data: [0, 20, 5, 25, 10, 30, 15, 40, 40],
        },
      ],
    };
  },
};

export const lineChartExample: ChartData<"line"> = {
  labels: ["May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
  datasets: [
    {
      label: "Performance",
      data: [0, 20, 10, 30, 15, 40, 20, 60, 60],
      fill: false,
      borderColor: colors.theme["primary"],
      tension: 0.4,
    },
  ],
};

export const barChartExample: ChartData<"bar"> = {
  labels: ["Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
  datasets: [
    {
      label: "Sales",
      data: [25, 20, 30, 22, 17, 29],
      maxBarThickness: 20,
      backgroundColor: colors.theme["warning"],
    },
  ],
};

export const dotChartExample: ChartData<"line"> = {
  labels: ["May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
  datasets: [
    {
      label: "Performance",
      data: [10, 18, 28, 23, 28, 40, 36, 46, 52],
      pointRadius: 10,
      pointHoverRadius: 15,
      showLine: false,
      backgroundColor: colors.theme["primary"],
    },
  ],
};

export const doughnutChartExample: ChartData<"doughnut"> = {
  datasets: [
    {
      label: "Dataset 1",
      data: [
        randomScalingFactor(),
        randomScalingFactor(),
        randomScalingFactor(),
        randomScalingFactor(),
        randomScalingFactor(),
      ],
      backgroundColor: [
        colors.theme["danger"],
        colors.theme["warning"],
        colors.theme["success"],
        colors.theme["primary"],
        colors.theme["info"],
      ],
    },
  ],
  labels: ["Danger", "Warning", "Success", "Primary", "Info"],
};

export const pieChartExample: ChartData<"pie"> = {
  labels: ["Danger", "Warning", "Success", "Primary", "Info"],
  datasets: [
    {
      label: "Dataset 1",
      data: [
        randomScalingFactor(),
        randomScalingFactor(),
        randomScalingFactor(),
        randomScalingFactor(),
        randomScalingFactor(),
      ],
      backgroundColor: [
        colors.theme["danger"],
        colors.theme["warning"],
        colors.theme["success"],
        colors.theme["primary"],
        colors.theme["info"],
      ],
    },
  ],
};

export const multiBarChartExample: ChartData<"bar"> = {
  labels: ["January", "February", "March", "April", "May", "June", "July"],
  datasets: [
    {
      label: "Dataset 1",
      backgroundColor: colors.theme["danger"],
      data: [
        randomScalingFactor(),
        randomScalingFactor(),
        randomScalingFactor(),
        randomScalingFactor(),
        randomScalingFactor(),
        randomScalingFactor(),
        randomScalingFactor(),
      ],
      maxBarThickness: 12,
    },
    {
      label: "Dataset 2",
      backgroundColor: colors.theme["primary"],
      data: [
        randomScalingFactor(),
        randomScalingFactor(),
        randomScalingFactor(),
        randomScalingFactor(),
        randomScalingFactor(),
        randomScalingFactor(),
        randomScalingFactor(),
      ],
      maxBarThickness: 10,
    },
    {
      label: "Dataset 3",
      backgroundColor: colors.theme["success"],
      data: [
        randomScalingFactor(),
        randomScalingFactor(),
        randomScalingFactor(),
        randomScalingFactor(),
        randomScalingFactor(),
        randomScalingFactor(),
        randomScalingFactor(),
      ],
      maxBarThickness: 10,
    },
  ],
};
