import axios from "axios";

const fetchBusinessUnit = async (select, params) => {
  const { businessUnitId } = params;
  let { data } = await axios.get(`http://localhost:5000/businessUnits`, {
    params: {
      select,
      id: `eq.${businessUnitId}`,
    },
  });

  return { data: data[0] };
};

export default fetchBusinessUnit;
