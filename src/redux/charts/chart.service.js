import { httpCommon } from "redux/http-common";

const listCharts = () => {
  return httpCommon.get(`/charts`);
};

export const chartService = {
  listCharts,
};
