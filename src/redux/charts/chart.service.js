import { httpCommon } from "redux/utils";

const listCharts = () => httpCommon.get(`/charts`);

export const chartService = {
  listCharts,
};
