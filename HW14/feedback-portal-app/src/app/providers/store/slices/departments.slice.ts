import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { URL } from "../../../../shared/SubmitForm/config/url";
import type { RootState } from "../store";

export interface Department {
  id: string;
  title: string;
}

interface DepartmentState {
  departments: Department[];
  loading: boolean;
  error: string | null;
}

const initialState: DepartmentState = {
  departments: [],
  loading: false,
  error: null,
};

export const fetchDepartments = createAsyncThunk("departments/fetchDepartments", async () => {
  const response = await fetch(URL);
  if (!response.ok) throw new Error("Failed to fetch departments");
  return await response.json();
});

const departmentsSlice = createSlice({
  name: "departments",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchDepartments.pending, (state) => {
        state.loading = false;
        state.error = null;
      })
      .addCase(fetchDepartments.fulfilled, (state, action) => {
        state.loading = false;
        state.departments = action.payload;
      })
      .addCase(fetchDepartments.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || "Failed to load departments";
      });
  },
});

export const selectDepartments = (state: RootState) => state.departments.departments;
export const selectDepartmentsLoading = (state: RootState) => state.departments.loading;
export const selectDepartmentsError = (state: RootState) => state.departments.error;

export default departmentsSlice.reducer;
