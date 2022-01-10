import { httpCommon } from "redux/http-common";

const searchGroups = () => {
  return httpCommon.get(`/groups`);
};

const searchGroup = id => {
  return httpCommon.get(`/groups?id=${id}`);
};

const createGroup = body => {
  return httpCommon.post(`/groups`, body);
};

const updateGroup = (id, body) => {
  return httpCommon.patch(`/groups/${id}`, body, {
    headers: {
      prefer: "resolution=merge-duplicates",
    },
  });
};

const deleteGroup = id => {
  return httpCommon.delete(`/groups/${id}`);
};

export const groupService = {
  searchGroups,
  searchGroup,
  createGroup,
  updateGroup,
  deleteGroup,
};
