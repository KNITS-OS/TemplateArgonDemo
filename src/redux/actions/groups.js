import { fetchGroupData } from "redux/services/queries";
import { API_CALL_ERROR, API_CALL_START, SEARCH_GROUPS } from "./types";

// export const createGroup = (name, description) => async dispatch => {
//   try {
//     const res = await groupServices.create({ name, description });
//     dispatch({
//       type: CREATE_GROUP,
//       payload: res.data,
//     });
//     return Promise.resolve(res.data);
//   } catch (err) {
//     console.log(err);
//     return Promise.reject(err);
//   }
// };

// export const retrieveGroups = () => async dispatch => {
//   try {
//     dispatch({
//       type: API_CALL_START,
//       payload: RETRIEVE_GROUPS,
//     });

//     const { data } = await groupServices.getAll("*");

//     dispatch({
//       type: RETRIEVE_GROUPS,
//       payload: data,
//     });
//   } catch (err) {
//     dispatch({
//       type: API_CALL_ERROR,
//       payload: err,
//     });
//   }
// };

export const searchGroups = () => async dispatch => {
  try {
    dispatch({
      type: API_CALL_START,
      payload: SEARCH_GROUPS,
    });
    // search
    let { data } = await fetchGroupData();

    dispatch({
      type: SEARCH_GROUPS,
      payload: data,
    });
  } catch (err) {
    dispatch({
      type: API_CALL_ERROR,
      payload: err,
    });
  }
};

// export const addGroupMember = (id, data) => async dispatch => {
//   try {
//     const res = await groupServices.update(id, data);
//     dispatch({
//       type: ADD_CAREMEMBER_TO_GROUP,
//       payload: data,
//     });

//     return Promise.resolve(res.data);
//   } catch (err) {
//     return Promise.reject(err);
//   }
// };

// export const deactivateGroup = id => async dispatch => {
//   try {
//     await groupServices.update(id);
//     dispatch({
//       type: DEACTIVATE_GROUP,
//       payload: { id },
//     });
//   } catch (err) {
//     console.log(err);
//   }
// };

// export const removeGroupMember = (id, data) => async dispatch => {
//   try {
//     await groupServices.update(id, data);

//     dispatch({
//       type: REMOVE_CAREMEMBER_FROM_GROUP,
//       payload: { id },
//     });
//   } catch (err) {
//     console.log(err);
//   }
// };
