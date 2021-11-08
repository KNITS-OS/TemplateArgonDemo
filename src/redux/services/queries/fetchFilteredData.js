import axiosInstance from "utils/axiosInstance";

const fetchFilteredData = async (select, table, params) => {
  const { country, lastName, businessUnit } = params;
  let { data } = await axiosInstance.get(table, {
    params: {
      select,
      country,
      lastName,
      businessUnit,
    },
  });
  return { data };
};

export default fetchFilteredData;
