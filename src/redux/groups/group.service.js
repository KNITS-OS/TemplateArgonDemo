import { GROUP_ROUTE } from "redux/common";
import { httpCommon } from "redux/utils";

const getAllGroups = () => httpCommon.get(`${GROUP_ROUTE}`);

const getGroupById = id => httpCommon.get(`${GROUP_ROUTE}/${id}`);

const createGroup = body => httpCommon.post(`${GROUP_ROUTE}`, body);

const updateGroup = (id, body) => httpCommon.put(`${GROUP_ROUTE}/${id}`, body);

const partialUpdateGroup = (id, body) => httpCommon.patch(`${GROUP_ROUTE}/${id}`, body);

const deleteGroup = id => httpCommon.delete(`${GROUP_ROUTE}/${id}`);

export const groupService = {
  getAllGroups,
  getGroupById,
  createGroup,
  updateGroup,
  partialUpdateGroup,
  deleteGroup,
};
