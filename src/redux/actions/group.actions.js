import groupServices from "redux/services/groupService";
import {
  CREATE_GROUP,
  RETRIEVE_GROUPS,
  DEACTIVATE_GROUP,
  ADD_CAREMEMBER_TO_GROUP,
  REMOVE_CAREMEMBER_FROM_GROUP,
  API_CALL_START,
  API_CALL_ERROR,
} from "./types";

export const createGroup = (name, description) => async dispatch => {
  try {
    const res = await groupServices.create({ name, description });
    dispatch({
      type: CREATE_GROUP,
      payload: res.data,
    });
    return Promise.resolve(res.data);
  } catch (err) {
    console.log(err);
    return Promise.reject(err);
  }
};

export const retrieveGroups = () => async dispatch => {
  try {
    dispatch({
      type: API_CALL_START,
      payload: RETRIEVE_GROUPS,
    });

    const { data } = await groupServices.getAll("*");

    dispatch({
      type: RETRIEVE_GROUPS,
      payload: data,
    });
  } catch (err) {
    dispatch({
      type: API_CALL_ERROR,
      payload: err,
    });
  }
};

export const addGroupMember = (id, data) => async dispatch => {
  try {
    const res = await groupServices.update(id, data);
    dispatch({
      type: ADD_CAREMEMBER_TO_GROUP,
      payload: data,
    });

    return Promise.resolve(res.data);
  } catch (err) {
    return Promise.reject(err);
  }
};

export const deactivateGroup = id => async dispatch => {
  try {
    await groupServices.update(id);
    dispatch({
      type: DEACTIVATE_GROUP,
      payload: { id },
    });
  } catch (err) {
    console.log(err);
  }
};

export const removeGroupMember = (id, data) => async dispatch => {
  try {
    await groupServices.update(id, data);

    dispatch({
      type: REMOVE_CAREMEMBER_FROM_GROUP,
      payload: { id },
    });
  } catch (err) {
    console.log(err);
  }
};

// export const deleteAllGroups = () => async (dispatch) => {
//   try {
//     const res = await GroupDataService.removeAll();

//     dispatch({
//       type: DELETE_ALL_GROUPS,
//       payload: res.data,
//     });

//     return Promise.resolve(res.data);
//   } catch (err) {
//     return Promise.reject(err);
//   }
// };

// export const findUserByUserName = (userName) => async (dispatch) => {
//   try {
//     const res = await UserDataService.findUserByUserName(userName);
//     dispatch({
//       type: RETRIEVE_USERS,
//       payload: res.data,
//     });
//   } catch (err) {
//     console.log(err);
//   }
// };
