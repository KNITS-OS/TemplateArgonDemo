import {
  LIST_WORLD_MAP_COMPLETE,
  LIST_WORLD_MAP_LOADING,
  LIST_WORLD_MAP_ERROR,
} from "redux/types.actions";

import { worldMapService } from "./world-map.service";

export const listWorldMapLoading = () => {
  return {
    type: LIST_WORLD_MAP_LOADING,
    payload: "LIST_WORLD_MAP_LOADING",
  };
};

export const listWorldMapError = err => {
  return {
    type: LIST_WORLD_MAP_ERROR,
    payload: err.message,
  };
};

export const listWorldMapComplete = data => {
  return {
    type: LIST_WORLD_MAP_COMPLETE,
    payload: data,
  };
};

export const listWorldMap = () => async dispatch => {
  try {
    dispatch(listWorldMapLoading());

    const { data } = await worldMapService.listWorldMap();

    dispatch(listWorldMapComplete(data));
  } catch (err) {
    dispatch(listWorldMapError(err));
  }
};
