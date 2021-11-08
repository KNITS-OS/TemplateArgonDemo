import axiosInstance from 'utils/axiosInstance';

const fetchBusinessUnit = async (select, params) => {
  const { businessUnitId } = params;
  let { data } = await axiosInstance.get(`/businessUnits`, {
    params: {
      select,
      id: `eq.${businessUnitId}`,
    },
  });

  return { data: data[0] };
};

export default fetchBusinessUnit;
