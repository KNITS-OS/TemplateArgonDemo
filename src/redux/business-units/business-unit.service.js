import { httpCommon } from "redux/http-common";

const listBusinessUnits = () => {
  return httpCommon.get(`/businessUnits`);
};

export const businessUnitService = {
  listBusinessUnits,
};
