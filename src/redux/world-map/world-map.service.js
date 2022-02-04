import { httpCommon } from "redux/utils";

const listWorldMap = () => httpCommon.get(`/worldMap`);

export const worldMapService = {
  listWorldMap,
};
