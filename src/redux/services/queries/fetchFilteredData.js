import axios from "axios";

const fetchFilteredData = async params => {
  const { country, lastName, businessUnit } = params;
  let { data } = await axios.get("http://localhost:5000/employees", {
    params: {
      country,
      lastName,
      businessUnit,
    },
  });
  return { data };
};

export default fetchFilteredData;
