import { FeedbackList } from "../../widgets/FeedbackList/ui";
import { Navbar } from "../../widgets/Navbar/ui";
import { SubmitFeedback } from "../../widgets/SubmitFeedback/ui";

export const HomePage = () => {
  return (
    <>
      <Navbar />
      <SubmitFeedback />
      <FeedbackList />
    </>
  );
};
