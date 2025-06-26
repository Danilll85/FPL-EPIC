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

export const FeedbackList = () => {
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
          <TableRow>
            <TableCell>Great work by the HR team!</TableCell>
            <TableCell>HR</TableCell>
            <TableCell>2024-04-17</TableCell>
            <TableCell>
              <ButtonsWrapper>
                <Button>Edit</Button>
                <Button>Delete</Button>
              </ButtonsWrapper>
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Website needs some imporovements</TableCell>
            <TableCell>IT</TableCell>
            <TableCell>2024-04-16</TableCell>
            <TableCell>
              <ButtonsWrapper>
                <Button>Edit</Button>
                <Button>Delete</Button>
              </ButtonsWrapper>
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Appreciate the new features</TableCell>
            <TableCell>Product</TableCell>
            <TableCell>2024-04-15</TableCell>
            <TableCell>
              <ButtonsWrapper>
                <Button>Edit</Button>
                <Button>Delete</Button>
              </ButtonsWrapper>
            </TableCell>
          </TableRow>
        </TableBody>
      </FeedbackTable>
    </FeedbackListWrapper>
  );
};
