import httpCommon from "../http-common";

const searchGroups = () => {
  return httpCommon.get(`/groups`);
};

const groupService = {
  searchGroups,
};

export default groupService;
