import httpCommon from "../http-common";

const listBusinessUnits = () => {
  return httpCommon.get(`/businessUnits`);
};

const businessUnitService = {
  listBusinessUnits,
};

export default businessUnitService;
