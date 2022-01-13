import { httpCommon } from "redux/http-common";

const listBusinessUnits = () => httpCommon.get(`/businessUnits`);

export const businessUnitService = {
  listBusinessUnits,
};
