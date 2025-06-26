import { SubmitForm } from "../../../shared/SubmitForm/ui";
import { Header, SubmitFeedbackWrapper } from "./styles";

export const SubmitFeedback = () => {
  return (
    <SubmitFeedbackWrapper>
      <Header>Submit Feedback</Header>
      <SubmitForm />
      <hr />
    </SubmitFeedbackWrapper>
  );
};
