import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { Employee } from "types/types";
import axiosInstance from "utils/axiosInstance";

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
