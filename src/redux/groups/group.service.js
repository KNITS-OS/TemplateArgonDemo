import { httpCommon } from "redux/http-common";

const searchGroups = () => {
  return httpCommon.get(`/groups`);
};

export const groupService = {
  searchGroups,
};
