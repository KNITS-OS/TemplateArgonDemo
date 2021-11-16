import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { Employee, IEmployeeFilters } from "types/types";
import axiosInstance from "utils/axiosInstance";
import {
  addBusinessUnitFilter,
  addCountryFilter,
  addLastnameFilter,
} from "../../filters";

interface EmployeesState {
  employees: Employee[];
  employee: Employee | null;
  loading: boolean;
  error: any;
}

const initialState: EmployeesState = {
  employees: [],
  employee: null,
  loading: false,
  error: null,
};

export const fetchEmployeesByFilters = createAsyncThunk(
  "employees/fetchEmployeesByFilters",
  async (filters: IEmployeeFilters) => {
    const lastNameFilter = addLastnameFilter(filters.lastName);
    const countryFilter = await addCountryFilter(filters.countryIsoCode);
    const businessUnitFilter = await addBusinessUnitFilter(
      filters.businessUnitId,
    );

    const params = {
      select: "*",
      lastName: lastNameFilter,
      country: countryFilter,
      businessUnit: businessUnitFilter,
    };

    let { data } = await axiosInstance.get("/employees", {
      params,
    });
    return data;
  },
);

export const fetchEmployee = createAsyncThunk(
  "employees/fetchEmployee",
  async (id: number) => {
    let { data } = await axiosInstance.get("employees", {
      params: {
        id: `eq.${id}`,
      },
    });
    return data;
  },
);

export const deleteEmployee = createAsyncThunk(
  "employees/deleteEmployee",
  async (id: number) => {
    let { data } = await axiosInstance.delete("employees", {
      params: {
        id: `eq.${id}`,
      },
    });
    return data;
  },
);

const employeesSlice = createSlice({
  name: "employees",
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder.addCase(fetchEmployeesByFilters.rejected, (state, action) => {
      state.error = action.payload;
      state.loading = false;
    });
    builder.addCase(fetchEmployeesByFilters.pending, state => {
      state.loading = true;
    });
    builder.addCase(fetchEmployeesByFilters.fulfilled, (state, action) => {
      state.employees = action.payload;
      state.loading = false;
    });
    builder.addCase(fetchEmployee.rejected, (state, action) => {
      state.error = action.payload;
      state.loading = false;
    });
    builder.addCase(fetchEmployee.pending, state => {
      state.loading = true;
    });
    builder.addCase(fetchEmployee.fulfilled, (state, action) => {
      state.employee = action.payload[0];
      state.loading = false;
    });
    builder.addCase(deleteEmployee.pending, state => {
      state.loading = true;
    });
    builder.addCase(deleteEmployee.fulfilled, (state, action) => {
      state.employee = action.payload[0];
      state.loading = false;
    });
    builder.addCase(deleteEmployee.rejected, (state, action) => {
      state.error = action.payload;
      state.loading = false;
    });
  },
});

export default employeesSlice.reducer;
