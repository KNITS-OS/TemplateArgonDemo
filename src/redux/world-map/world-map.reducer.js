import {
  LIST_WORLD_MAP_COMPLETE,
  LIST_WORLD_MAP_LOADING,
  LIST_WORLD_MAP_ERROR,
} from "redux/types.actions";

const initialState = {
  loading: false,
  isError: false,
  errorMessage: null,
  entities: [],
  entity: null,
};

export const worldMapReducer = (
  worldMapState = initialState,
  action = {}
) => {
  const { type, payload } = action;
  switch (type) {
    case LIST_WORLD_MAP_LOADING:
      return {
        isLoading: true,
        isError: false,
        errorMessage: null,
        entities: [],
        entity: null,
      };

    case LIST_WORLD_MAP_ERROR:
      return {
        isLoading: false,
        isError: true,
        errorMessage: payload,
        entities: [],
        entity: null,
      };

    case LIST_WORLD_MAP_COMPLETE:
      return {
        isLoading: false,
        isError: false,
        errorMessage: null,
        entities: payload,
        entity: null,
      };

    default:
      return worldMapState;
  }
};
