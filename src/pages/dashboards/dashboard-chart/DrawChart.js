import { Chart } from "chart.js";
import { useRef } from "react";

export const DrawChart = ({ chart }) => {
  console.log("chart", chart);
  const { name, type, data, options } = chart;
  const { labels, datasets } = data;
  const canvasElement = useRef(null);
  const ctx = canvasElement.current.getContext("2d");
  new Chart(ctx, {
    type,
    data: {
      labels,
      datasets,
    },
    options,
  });

  return <canvas id={name} ref={canvasElement}></canvas>;
};
