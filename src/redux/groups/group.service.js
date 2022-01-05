import httpCommon from "../http-common";

const searchGroups = queryParams => {
  return httpCommon.get(`/groups?${queryParams}`);
};

const groupService = {
  searchGroups,
};

export default groupService;
