import axios from "axios";

const fetchGroupData = async () => {
  let { data } = await axios.get("http://localhost:5000/groups");
  return { data };
};

export default fetchGroupData;
