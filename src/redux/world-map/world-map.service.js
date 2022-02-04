import { WORLD_MAP_ROUTE } from "redux/common";
import { httpCommon } from "redux/utils";

const listWorldMap = () => httpCommon.get(`${WORLD_MAP_ROUTE}`);

export const worldMapService = {
  listWorldMap,
};
