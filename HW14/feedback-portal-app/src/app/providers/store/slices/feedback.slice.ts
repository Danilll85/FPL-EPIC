import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

export type Feedback = {
  id: string;
  message: string;
  department: string;
  createdAt: string;
  updatedAt: string;
};

export type InitialFeedbackState = {
  feedbacks: Feedback[];
};

export const initialState: InitialFeedbackState = {
  feedbacks: [],
};

const feedbackSlice = createSlice({
  name: "feedback",
  initialState,
  reducers: {
    addFeedback: (state: InitialFeedbackState, action: PayloadAction<Feedback>) => {
      state.feedbacks.push(action.payload);
    },
  },
});

export const { addFeedback } = feedbackSlice.actions;
export default feedbackSlice.reducer;
