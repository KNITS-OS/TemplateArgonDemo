import {
  ADD_CAREMEMBER_TO_GROUP_COMPLETE,
  ADD_CAREMEMBER_TO_GROUP_ERROR,
  ADD_CAREMEMBER_TO_GROUP_LOADING,
  CREATE_GROUP_COMPLETE,
  CREATE_GROUP_ERROR,
  CREATE_GROUP_LOADING,
  DEACTIVATE_GROUP_COMPLETE,
  DEACTIVATE_GROUP_ERROR,
  DEACTIVATE_GROUP_LOADING,
  DELETE_GROUP_COMPLETE,
  DELETE_GROUP_ERROR,
  DELETE_GROUP_LOADING,
  REMOVE_CAREMEMBER_FROM_GROUP_COMPLETE,
  REMOVE_CAREMEMBER_FROM_GROUP_ERROR,
  REMOVE_CAREMEMBER_FROM_GROUP_LOADING,
  SEARCH_GROUP_COMPLETE,
  SEARCH_GROUP_ERROR,
  SEARCH_GROUP_LOADING,
  SEARCH_GROUPS_COMPLETE,
  SEARCH_GROUPS_ERROR,
  SEARCH_GROUPS_LOADING,
  UPDATE_GROUP_COMPLETE,
  UPDATE_GROUP_ERROR,
  UPDATE_GROUP_LOADING,
  PARTIAL_UPDATE_GROUP_COMPLETE,
  PARTIAL_UPDATE_GROUP_ERROR,
  PARTIAL_UPDATE_GROUP_LOADING,
} from "redux/types.actions";

const initialState = {
  loading: false,
  isError: false,
  errorMessage: null,
  entities: [],
  entity: null,
};

export const groupReducer = (groupState = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case SEARCH_GROUP_LOADING:
    case SEARCH_GROUPS_LOADING:
    case CREATE_GROUP_LOADING:
    case PARTIAL_UPDATE_GROUP_LOADING:
    case UPDATE_GROUP_LOADING:
    case DELETE_GROUP_LOADING:
    case DEACTIVATE_GROUP_LOADING:
    case ADD_CAREMEMBER_TO_GROUP_LOADING:
    case REMOVE_CAREMEMBER_FROM_GROUP_LOADING:
      return {
        isLoading: true,
        isError: false,
        errorMessage: null,
        entities: [],
        entity: null,
      };

    case SEARCH_GROUP_ERROR:
    case SEARCH_GROUPS_ERROR:
    case CREATE_GROUP_ERROR:
    case UPDATE_GROUP_ERROR:
    case PARTIAL_UPDATE_GROUP_ERROR:
    case DELETE_GROUP_ERROR:
    case DEACTIVATE_GROUP_ERROR:
    case ADD_CAREMEMBER_TO_GROUP_ERROR:
    case REMOVE_CAREMEMBER_FROM_GROUP_ERROR:
      return {
        isLoading: false,
        isError: true,
        errorMessage: payload,
        entities: [],
        entity: null,
      };

    case CREATE_GROUP_COMPLETE:
      return {
        isLoading: false,
        isError: false,
        errorMessage: null,
        entities: [...groupState.entities, payload],
        entity: null,
      };

    case SEARCH_GROUPS_COMPLETE:
      return {
        isLoading: false,
        isError: false,
        errorMessage: null,
        entities: payload,
        entity: null,
      };

    case SEARCH_GROUP_COMPLETE:
      return {
        isLoading: false,
        isError: false,
        errorMessage: null,
        entities: null,
        entity: payload,
      };

    case UPDATE_GROUP_COMPLETE:
      let updatedGroups = groupState.entities.map(group => {
        if (group.id === payload.id) {
          return {
            ...group,
            ...payload,
          };
        } else {
          return group;
        }
      });

      return {
        isLoading: false,
        isError: false,
        errorMessage: null,
        entities: updatedGroups,
        entity: null,
      };

    case PARTIAL_UPDATE_GROUP_COMPLETE:
      let partiallyUpdatedGroups = groupState.entities.map(group => {
        if (group.id === payload.id) {
          return {
            ...group,
            ...payload,
          };
        } else {
          return group;
        }
      });

      return {
        isLoading: false,
        isError: false,
        errorMessage: null,
        entities: partiallyUpdatedGroups,
        entity: null,
      };

    case DELETE_GROUP_COMPLETE:
      let groupsToKeep = groupState.entities.filter(
        ({ id }) => id !== payload.id,
      );

      return {
        isLoading: false,
        isError: false,
        errorMessage: null,
        entities: groupsToKeep,
        entity: null,
      };

    case DEACTIVATE_GROUP_COMPLETE:
      const deactivatedGroups = groupState.entities.map(group => {
        if (group.id === payload) {
          return {
            ...group,
            active: !group.active,
          };
        } else {
          return group;
        }
      });
      return {
        isLoading: false,
        isError: false,
        errorMessage: null,
        entities: deactivatedGroups,
        entity: null,
      };

    case ADD_CAREMEMBER_TO_GROUP_COMPLETE:
      const addedCarememberGroups = groupState.entities.map(group => {
        if (group.id === payload.id) {
          return {
            ...group,
            members: { ...payload.members },
          };
        } else {
          return group;
        }
      });

      return {
        isLoading: false,
        isError: false,
        errorMessage: null,
        entities: addedCarememberGroups,
        entity: null,
      };

    case REMOVE_CAREMEMBER_FROM_GROUP_COMPLETE:
      const removedCarememberGroups = groupState.entities.map(group => {
        if (group.id === payload.id) {
          return {
            ...group,
            members: group.members.filter(
              ({ id }) => !payload.members.includes(id),
            ),
          };
        } else {
          return group;
        }
      });

      return {
        isLoading: false,
        isError: false,
        errorMessage: null,
        entities: removedCarememberGroups,
        entity: null,
      };

    default:
      return groupState;
  }
};
