import { httpCommon } from "redux/http-common";

const listCharts = () => httpCommon.get(`/charts`);

export const chartService = {
  listCharts,
};
