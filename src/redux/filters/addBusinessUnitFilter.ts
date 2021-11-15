import { fetchBusinessUnit } from "../queries";

const addBusinessUnitFilter = async (businessUnitParam: string | null) => {
  let businessUnit = null;

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
