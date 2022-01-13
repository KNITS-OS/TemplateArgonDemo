import { httpCommon } from "redux/http-common";

const listWorldMap = () => httpCommon.get(`/worldMap`);

export const worldMapService = {
  listWorldMap,
};
