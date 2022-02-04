import { BUSINESS_UNIT_ROUTE } from "redux/common";
import { httpCommon } from "redux/utils";

const listBusinessUnits = () => httpCommon.get(`${BUSINESS_UNIT_ROUTE}`);

export const businessUnitService = {
  listBusinessUnits,
};
