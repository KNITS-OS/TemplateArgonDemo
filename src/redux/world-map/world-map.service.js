import { httpCommon } from "redux/http-common";

const listWorldMap = () => {
  return httpCommon.get(`/worldMap`);
};

export const worldMapService = {
  listWorldMap,
};
