import { fetchBusinessUnit } from "../queries";

const addBusinessUnitFilter = async businessUnitParam => {
  let businessUnit = null;
  const businessUnitId = parseInt(businessUnitParam);

  if (businessUnitParam) {
    const { data } = await fetchBusinessUnit("name", { businessUnitId });
    businessUnit = `eq.${data.name}`;
  }

  return businessUnit;
};

export default addBusinessUnitFilter;
