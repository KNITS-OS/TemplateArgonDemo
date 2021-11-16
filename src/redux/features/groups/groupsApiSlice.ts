import { createApi } from "@reduxjs/toolkit/query/react";
import { baseQuery } from "utils/rtkQueryConfig";
import { Group } from "types/types";

interface IFetchGroupsArgs {
  select: string;
  limit?: number;
}

export const groupsApiSlice = createApi({
  reducerPath: "groupsApi",
  baseQuery,
  endpoints(builder) {
    return {
      fetchGroups: builder.query<Group[], IFetchGroupsArgs>({
        query: args => {
          const { limit = 30, select } = args;
          return {
            url: "grodsups",
            params: {
              select,
              limit,
            },
          };
        },
      }),
    };
  },
});

export const { useLazyFetchGroupsQuery } = groupsApiSlice;
