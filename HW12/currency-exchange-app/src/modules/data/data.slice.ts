import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

export type Note = { id: string; title: string; note: string };

export type InitialDataState = {
  notes: Note[];
};

export const initialState: InitialDataState = {
  notes: [],
};

const dataSlice = createSlice({
  name: "data",
  initialState,
  reducers: {
    addNote: (state: InitialDataState, action: PayloadAction<Note>) => {
      state.notes.push(action.payload);
    },
  },
});

export const { addNote } = dataSlice.actions;
export default dataSlice.reducer;
