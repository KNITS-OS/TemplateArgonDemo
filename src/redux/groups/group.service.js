import { httpCommon } from "redux/http-common";

const getAllGroups = () => httpCommon.get(`/groups`);

const getGroupById = id => httpCommon.get(`/groups/${id}`);

const createGroup = body => httpCommon.post(`/groups`, body);

const updateGroup = (id, body) => httpCommon.put(`/groups/${id}`, body);

const partialUpdateGroup = (id, body) => httpCommon.patch(`/groups/${id}`, body);

const deleteGroup = id => httpCommon.delete(`/groups/${id}`);

export const groupService = {
  getAllGroups,
  getGroupById,
  createGroup,
  updateGroup,
  partialUpdateGroup,
  deleteGroup,
};
