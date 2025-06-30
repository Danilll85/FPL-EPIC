import type { InitialFeedbackState } from "../slices/feedback.slice";

const FEEDBACK_KEY = "feedback_data";

export const loadFeedbackFromStorage = (): InitialFeedbackState => {
  try {
    const serializedFeedback = localStorage.getItem(FEEDBACK_KEY);
    if (serializedFeedback === null) {
      return { feedbacks: [] };
    }
    const feedbacks = JSON.parse(serializedFeedback);
    return { feedbacks };
  } catch (error) {
    console.error("Error loading feedback from localStorage:", error);
    return { feedbacks: [] };
  }
};

export const saveFeedbackToStorage = (feedbacks: any[]) => {
  try {
    localStorage.setItem(FEEDBACK_KEY, JSON.stringify(feedbacks));
  } catch (error) {
    console.error("Error saving feedback to localStorage:", error);
  }
};