import {
  LIST_BUSINESS_UNITS_COMPLETE,
  LIST_BUSINESS_UNITS_LOADING,
  LIST_BUSINESS_UNITS_ERROR,
} from "redux/types.actions";

const initialState = {
  loading: false,
  isError: false,
  errorMessage: null,
  entities: [],
  entity: null,
};

export const businessUnitReducer = (businessUnitState = initialState, action = {}) => {
  const { type, payload } = action;
  switch (type) {
    case LIST_BUSINESS_UNITS_LOADING:
      return {
        isLoading: true,
        isError: false,
        errorMessage: null,
        entities: [],
        entity: null,
      };

    case LIST_BUSINESS_UNITS_ERROR:
      return {
        isLoading: false,
        isError: true,
        errorMessage: payload,
        entities: [],
        entity: null,
      };

    case LIST_BUSINESS_UNITS_COMPLETE:
      return {
        isLoading: false,
        isError: false,
        errorMessage: null,
        entities: payload,
        entity: null,
      };

    default:
      return businessUnitState;
  }
};
