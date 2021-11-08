import axiosInstance from 'utils/axiosInstance';

const fetchCountry = async (select, params) => {
  const { countryIsoCode3Param } = params;

  let { data } = await axiosInstance.get(`/country`, {
    params: {
      select,
      code3: `eq.${countryIsoCode3Param}`,
    },
  });

  return { data: data[0] };
};

export default fetchCountry;
