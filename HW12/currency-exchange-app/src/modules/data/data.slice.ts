import { createSlice } from "@reduxjs/toolkit";

type Task = string | undefined;

type InitialDataState = {
  tasks: Task[];
};

const initialState = {
  tasks: [],
};

const dataSlice = createSlice({
  name: "data",
  initialState,
  reducers: {
    addTodo: (state: InitialDataState, action) => {
      state.tasks.push(action.payload);
    },
  },
});

export const {addTodo} = dataSlice.actions;
export default dataSlice.reducer;