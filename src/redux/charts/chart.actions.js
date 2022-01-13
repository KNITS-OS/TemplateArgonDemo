import { LIST_CHARTS_COMPLETE, LIST_CHARTS_LOADING, LIST_CHARTS_ERROR } from "redux/types.actions";

import { chartService } from "./chart.service";

export const listChartsLoading = () => ({
  type: LIST_CHARTS_LOADING,
  payload: "LIST_CHARTS_LOADING",
});

export const listChartsError = err => ({
  type: LIST_CHARTS_ERROR,
  payload: err.message,
});

export const listChartsComplete = data => ({
  type: LIST_CHARTS_COMPLETE,
  payload: data,
});

export const listCharts = () => async dispatch => {
  try {
    dispatch(listChartsLoading());

    const { data } = await chartService.listCharts();

    dispatch(listChartsComplete(data));
  } catch (err) {
    dispatch(listChartsError(err));
  }
};
