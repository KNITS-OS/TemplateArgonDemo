import groupService from "redux/services/group.service";
import {
  ADD_CAREMEMBER_TO_GROUP_COMPLETE,
  CREATE_GROUP_COMPLETE,
  DEACTIVATE_GROUP_COMPLETE,
  DELETE_GROUP_COMPLETE,
  REMOVE_CAREMEMBER_FROM_GROUP_COMPLETE,
  SEARCH_GROUPS_COMPLETE,
  SEARCH_GROUPS_ERROR,
  SEARCH_GROUPS_LOADING,
  UPDATE_GROUP_COMPLETE,
} from "redux/types.actions";

export const createGroup = data => {
  console.log(data);
  return { type: CREATE_GROUP_COMPLETE, payload: data };
};

export const searchGroups = filters => async dispatch => {
  try {
    const queryParams = new URLSearchParams(filters);

    dispatch({
      type: SEARCH_GROUPS_LOADING,
      payload: "SEARCH_GROUPS_LOADING",
    });

    const { data } = await groupService.searchGroups(queryParams);

    dispatch({
      type: SEARCH_GROUPS_COMPLETE,
      payload: data,
    });
  } catch (err) {
    console.log(err);
    dispatch({
      type: SEARCH_GROUPS_ERROR,
      payload: err.message,
    });
  }
};

export const updateGroup = (id, data) => {
  return { type: UPDATE_GROUP_COMPLETE, payload: id, data };
};

export const deleteGroup = id => {
  return { type: DELETE_GROUP_COMPLETE, payload: { id } };
};

export const deactivateGroup = id => {
  return { type: DEACTIVATE_GROUP_COMPLETE, payload: id };
};

export const addCareMemberToGroup = (id, data) => {
  return { type: ADD_CAREMEMBER_TO_GROUP_COMPLETE, payload: id, data };
};

export const removeCareMemberFromGroup = (id, data) => {
  return {
    type: REMOVE_CAREMEMBER_FROM_GROUP_COMPLETE,
    payload: id,
    data,
  };
};
