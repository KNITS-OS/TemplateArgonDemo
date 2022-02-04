import { CHART_ROUTE } from "redux/common";
import { httpCommon } from "redux/utils";

const listCharts = () => httpCommon.get(CHART_ROUTE);

export const chartService = {
  listCharts,
};
