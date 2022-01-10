import { httpCommon } from "redux/http-common";

const getAllGroups = () => {
  return httpCommon.get(`/groups`);
};

const getGroupById = id => {
  return httpCommon.get(`/groups/${id}`);
};

const createGroup = body => {
  return httpCommon.post(`/groups`, body);
};

const updateGroup = (id, body) => {
  return httpCommon.put(`/groups/${id}`, body);
};

const partialUpdateGroup = (id, body) => {
  return httpCommon.patch(`/groups/${id}`, body);
};

const deleteGroup = id => {
  return httpCommon.delete(`/groups/${id}`);
};

export const groupService = {
  getAllGroups,
  getGroupById,
  createGroup,
  updateGroup,
  partialUpdateGroup,
  deleteGroup,
};
