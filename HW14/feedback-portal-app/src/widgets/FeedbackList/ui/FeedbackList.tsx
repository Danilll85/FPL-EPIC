import { useDispatch, useSelector } from "react-redux";
import {
  Button,
  ButtonsWrapper,
  FeedbackListWrapper,
  FeedbackTable,
  Header,
  TableBody,
  TableCell,
  TableHeader,
  TableHeaderBlock,
  TableRow,
} from "./styles";
import type { AppDispatch, RootState } from "../../../app/providers/store/store";

export const FeedbackList = () => {
  const dispatch = useDispatch<AppDispatch>();
  const feedbacks = useSelector((state: RootState) => state.feedback.feedbacks);

  return (
    <FeedbackListWrapper>
      <Header>Feedback List</Header>
      <FeedbackTable>
        <TableHeaderBlock>
          <TableRow>
            <TableHeader>Message</TableHeader>
            <TableHeader>Department</TableHeader>
            <TableHeader>Submitted At</TableHeader>
            <TableHeader>Actions</TableHeader>
          </TableRow>
        </TableHeaderBlock>
        <TableBody>
          {feedbacks &&
            feedbacks.map((elem) => {
              return (
                <TableRow key={elem.id}>
                  <TableCell>{elem.message}</TableCell>
                  <TableCell>{elem.department}</TableCell>
                  <TableCell>{elem.createdAt}</TableCell>
                  <ButtonsWrapper>
                    <Button>Edit</Button>
                    <Button>Delete</Button>
                  </ButtonsWrapper>
                </TableRow>
              );
            })}
        </TableBody>
      </FeedbackTable>
    </FeedbackListWrapper>
  );
};
