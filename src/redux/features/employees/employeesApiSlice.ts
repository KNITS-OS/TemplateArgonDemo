import { createApi } from "@reduxjs/toolkit/query/react";
import { baseQuery } from "utils/rtkQueryConfig";
import { Employee, IEmployeeFilters } from "types/types";

interface IFetchEmployeesByFiltersArgs {
  select: string;
  filters: IEmployeeFilters;
  limit?: number;
}
interface IFetchEmployeeArgs {
  id: string | number;
  select: string;
}
interface IDeleteEmployeeArgs {
  id: string | number;
}

export const employeesApiSlice = createApi({
  reducerPath: "employeesApi",
  baseQuery,
  endpoints(builder) {
    return {
      fetchEmployeesByFilters: builder.query<
        Employee[],
        IFetchEmployeesByFiltersArgs
      >({
        query: args => {
          const { filters, limit = 30, select } = args;
          return {
            url: "employees",
            params: {
              select,
              limit,
              ...filters,
            },
          };
        },
      }),
      fetchEmployee: builder.query<Employee[], IFetchEmployeeArgs>({
        query: args => {
          const { id, select } = args;
          return {
            url: "employees",
            params: {
              select,
              limit: 1,
              id: `eq.${id}`,
            },
          };
        },
      }),
      deleteEmployee: builder.mutation<void, IDeleteEmployeeArgs>({
        query: args => {
          const { id } = args;
          return {
            url: "employees",
            method: "delete",
            params: {
              id: `eq.${id}`,
            },
          };
        },
      }),
    };
  },
});

export const {
  useLazyFetchEmployeesByFiltersQuery,
  useFetchEmployeeQuery,
  useDeleteEmployeeMutation,
} = employeesApiSlice;
