import { WORLD_MAP_ROUTE } from "redux/common";
import { httpCommon } from "redux/utils";

const listWorldOverview = () => httpCommon.get(`${WORLD_MAP_ROUTE}`);

export const worldOverviewService = {
  listWorldOverview,
};
