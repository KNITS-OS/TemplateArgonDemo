import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { Group } from "types/types";
import axiosInstance from "utils/axiosInstance";

interface GroupsState {
  groups: Group[];
  loading: boolean;
  error: any;
}

const initialState: GroupsState = {
  groups: [],
  loading: false,
  error: null,
};

export const fetchGroups = createAsyncThunk(
  "groups/fetchGroups",
  async () => {
    let { data } = await axiosInstance.get("groups");
    return data;
  },
);

const groupsSlice = createSlice({
  name: "groups",
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder.addCase(fetchGroups.rejected, (state, action) => {
      state.error = action.payload;
      state.loading = false;
    });
    builder.addCase(fetchGroups.pending, state => {
      state.loading = true;
    });
    builder.addCase(fetchGroups.fulfilled, (state, action) => {
      state.groups = action.payload;
      state.loading = false;
    });
  },
});

export default groupsSlice.reducer;
