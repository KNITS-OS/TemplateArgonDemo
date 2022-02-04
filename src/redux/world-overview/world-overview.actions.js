import { LIST_WORLD_MAP_COMPLETE, LIST_WORLD_MAP_LOADING, LIST_WORLD_MAP_ERROR } from "redux/utils";

import { worldOverviewService } from ".";

export const listWorldOverviewLoading = () => ({
  type: LIST_WORLD_MAP_LOADING,
  payload: "LIST_WORLD_MAP_LOADING",
});

export const listWorldOverviewError = err => ({
  type: LIST_WORLD_MAP_ERROR,
  payload: err.message,
});

export const listWorldOverviewComplete = data => ({
  type: LIST_WORLD_MAP_COMPLETE,
  payload: data,
});

export const listWorldOverview = () => async dispatch => {
  try {
    dispatch(listWorldOverviewLoading());

    const { data } = await worldOverviewService.listWorldOverview();

    dispatch(listWorldOverviewComplete(data));
  } catch (err) {
    dispatch(listWorldOverviewError(err));
  }
};
