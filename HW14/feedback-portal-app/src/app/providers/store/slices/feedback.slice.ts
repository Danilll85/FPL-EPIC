import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

export type Feedback = {
  id: string;
  message: string;
  department: string;
  createdAt: string;
  updatedAt?: string;
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
    editFeedback: (state: InitialFeedbackState, action: PayloadAction<{ id: string; changes: Partial<Feedback> }>) => {
      const index = state.feedbacks.findIndex((f) => f.id === action.payload.id);
      if (index !== -1) {
        state.feedbacks[index] = {
          ...state.feedbacks[index],
          ...action.payload.changes,
          updatedAt: new Date().toISOString(),
        };
      }
    },
    deleteFeedback: (state: InitialFeedbackState, action: PayloadAction<string>) => {
      state.feedbacks = state.feedbacks.filter((f) => f.id !== action.payload);
    },
  },
});

export const { addFeedback } = feedbackSlice.actions;
export const { editFeedback } = feedbackSlice.actions;
export const { deleteFeedback } = feedbackSlice.actions;
export default feedbackSlice.reducer;
