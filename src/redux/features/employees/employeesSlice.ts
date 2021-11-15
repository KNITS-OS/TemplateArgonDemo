import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { Employee, IEmployeeFilters } from "types/types";
import axiosInstance from "utils/axiosInstance";
import { searchWithFilters } from "redux/api";

interface EmployeesState {
  employees: Employee[];
  employee: Employee | null;
  loading: boolean;
  error: unknown;
}

const initialState: EmployeesState = {
  employees: [],
  employee: null,
  loading: false,
  error: "",
};

export const fetchEmployeesByFilters = createAsyncThunk(
  "employees/fetchEmployeesByFilters",
  async (filters: IEmployeeFilters) => {
    const { data } = await searchWithFilters({
      filters,
      select: "*",
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
  },
});

export default employeesSlice.reducer;
