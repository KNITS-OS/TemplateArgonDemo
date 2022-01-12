import {
  LIST_CHARTS_COMPLETE,
  LIST_CHARTS_LOADING,
  LIST_CHARTS_ERROR,
} from "redux/types.actions";

const initialState = {
  loading: false,
  isError: false,
  errorMessage: null,
  entities: [],
  entity: null,
};

export const chartReducer = (chartState = initialState, action = {}) => {
  const { type, payload } = action;
  switch (type) {
    case LIST_CHARTS_LOADING:
      return {
        isLoading: true,
        isError: false,
        errorMessage: null,
        entities: [],
        entity: null,
      };

    case LIST_CHARTS_ERROR:
      return {
        isLoading: false,
        isError: true,
        errorMessage: payload,
        entities: [],
        entity: null,
      };

    case LIST_CHARTS_COMPLETE:
      return {
        isLoading: false,
        isError: false,
        errorMessage: null,
        entities: payload,
        entity: null,
      };

    default:
      return chartState;
  }
};
