import { httpCommon } from "redux/utils";

const listBusinessUnits = () => httpCommon.get(`/businessUnits`);

export const businessUnitService = {
  listBusinessUnits,
};
