import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { Employee, IEmployeeFilters } from "types/types";
import { searchWithFilters } from "redux/queries";

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

export const fetchByFilters = createAsyncThunk(
  "employees/fetchByFilters",
  async (filters: IEmployeeFilters) => {
    const res = await searchWithFilters({
      filters,
      select: "*",
      table: "employees",
    });
    return res.data;
  },
);

const employeesSlice = createSlice({
  name: "employees",
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder.addCase(fetchByFilters.pending, state => {
      state.loading = true;
    });
    builder.addCase(fetchByFilters.fulfilled, (state, action) => {
      state.employees = action.payload;
      state.loading = false;
    });
    builder.addCase(fetchByFilters.rejected, (state, action) => {
      state.error = action.payload;
      state.loading = false;
    });
  },
});

export default employeesSlice.reducer;
