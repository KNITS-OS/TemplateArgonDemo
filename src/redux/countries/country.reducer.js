import {
  LIST_COUNTRIES_COMPLETE,
  LIST_COUNTRIES_LOADING,
  LIST_COUNTRIES_ERROR,
} from "redux/types.actions";

const initialState = {
  loading: false,
  isError: false,
  errorMessage: null,
  entities: [],
  entity: null,
};

const countryReducer = (countryState = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case LIST_COUNTRIES_LOADING:
      return {
        isLoading: true,
        isError: false,
        errorMessage: null,
        entities: [],
        entity: null,
      };

    case LIST_COUNTRIES_ERROR:
      return {
        isLoading: false,
        isError: true,
        errorMessage: payload,
        entities: [],
        entity: null,
      };

    case LIST_COUNTRIES_COMPLETE:
      return {
        isLoading: false,
        isError: false,
        errorMessage: null,
        entities: payload,
        entity: null,
      };

    default:
      return countryState;
  }
};

export default countryReducer;
