import { useState } from "react";
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
  EditInput,
  SaveButton,
  CancelButton,
} from "./styles";
import type { AppDispatch, RootState } from "../../../app/providers/store/store";
import { editFeedback, deleteFeedback } from "../../../app/providers/store/slices/feedback.slice";

export const FeedbackList = () => {
  const dispatch = useDispatch<AppDispatch>();
  const feedbacks = useSelector((state: RootState) => state.feedback.feedbacks);
  const [editingId, setEditingId] = useState<string | null>(null);
  const [editedMessage, setEditedMessage] = useState("");

  const handleEditClick = (id: string, currentMessage: string) => {
    setEditingId(id);
    setEditedMessage(currentMessage);
  };

  const handleSave = (id: string) => {
    if (editedMessage.trim()) {
      dispatch(
        editFeedback({
          id,
          changes: { message: editedMessage },
        })
      );
      setEditingId(null);
    }
  };

  const handleCancel = () => {
    setEditingId(null);
  };

  const handleDelete = (id: string) => {
    dispatch(deleteFeedback(id));
  };

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
            feedbacks.map((feedback) => (
              <TableRow key={feedback.id}>
                <TableCell>
                  {editingId === feedback.id ? (
                    <EditInput value={editedMessage} onChange={(e) => setEditedMessage(e.target.value)} autoFocus />
                  ) : (
                    feedback.message
                  )}
                </TableCell>
                <TableCell>{feedback.department}</TableCell>
                <TableCell>{feedback.createdAt}</TableCell>
                <TableCell>
                  <ButtonsWrapper>
                    {editingId === feedback.id ? (
                      <>
                        <SaveButton onClick={() => handleSave(feedback.id)}>Save</SaveButton>
                        <CancelButton onClick={handleCancel}>Cancel</CancelButton>
                      </>
                    ) : (
                      <>
                        <Button onClick={() => handleEditClick(feedback.id, feedback.message)}>Edit</Button>
                        <Button onClick={() => handleDelete(feedback.id)}>Delete</Button>
                      </>
                    )}
                  </ButtonsWrapper>
                </TableCell>
              </TableRow>
            ))}
        </TableBody>
      </FeedbackTable>
    </FeedbackListWrapper>
  );
};
