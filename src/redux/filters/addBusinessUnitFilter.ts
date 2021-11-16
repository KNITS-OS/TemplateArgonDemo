import { fetchBusinessUnit } from "../api";

/**
 * @param businessUnitParam
 * @returns undefined or eq.businessUnitParam
 * @description function that takes in a string and returns query param if it is defined
 */
const addBusinessUnitFilter = async (businessUnitParam: string) => {
  let businessUnit = undefined;

  if (businessUnitParam) {
    const businessUnitId = parseInt(businessUnitParam);

    const { data } = await fetchBusinessUnit({
      select: "name",
      params: { businessUnitId },
    });
    businessUnit = `eq.${data.name}`;
  }

  return businessUnit;
};

export default addBusinessUnitFilter;
