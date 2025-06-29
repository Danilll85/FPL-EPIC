import styled from "@emotion/styled";
import { css } from "@emotion/react";

const commonBorder = css`
  border: 1px solid #e0e0e0;
`;

const FeedbackListWrapper = styled.div`
  padding-left: 4rem;
  max-width: 1200px;
`;

const Header = styled.h1`
  font-size: 3rem;
  margin-bottom: 1.5rem;
  color: #333;
  font-weight: 600;
`;

const FeedbackTable = styled.table`
  width: 100%;
  border-collapse: collapse;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
  overflow: hidden;
`;

const TableHeaderBlock = styled.thead`
  background-color: #f5f7fa;
`;

const TableHeader = styled.th`
  padding: 1rem;
  text-align: left;
  font-weight: 600;
  color: #4a5568;
  ${commonBorder};
`;

const TableBody = styled.tbody`
  tr:nth-of-type(even) {
    background-color: #f9fafb;
  }

  tr:hover {
    background-color: #f0f4f8;
  }
`;

const TableRow = styled.tr`
  transition: background-color 0.2s ease;
`;

const TableCell = styled.td`
  padding: 1rem;
  ${commonBorder};
  color: #4a5568;
`;

const ButtonsWrapper = styled.div`
  display: flex;
  gap: 0.75rem;
  margin-left: 1rem;
  margin-top: 0.5rem;
`;

const Button = styled.button`
  padding: 0.5rem 1rem;
  border-radius: 4px;
  font-size: 0.875rem;
  cursor: pointer;
  transition: all 0.2s ease;
  border: 1px solid transparent;

  &:first-of-type {
    background-color: #4299e1;
    color: white;

    &:hover {
      background-color: #3182ce;
    }
  }

  &:last-of-type {
    background-color: #f56565;
    color: white;

    &:hover {
      background-color: #e53e3e;
    }
  }
`;

const EditInput = styled.input`
  padding: 0.5rem;
  border: 1px solid #e0e0e0;
  border-radius: 4px;
  width: 100%;
  font-size: 1rem;
`;

const SaveButton = styled(Button)`
  background-color: #48bb78 !important; /* Зеленый */
  &:hover {
    background-color: #38a169 !important;
  }
`;

const CancelButton = styled(Button)`
  background-color: #a0aec0 !important; /* Серый */
  &:hover {
    background-color: #718096 !important;
  }
`;

export {
  FeedbackListWrapper,
  Header,
  FeedbackTable,
  TableHeaderBlock,
  TableHeader,
  TableRow,
  TableCell,
  TableBody,
  ButtonsWrapper,
  Button,
  EditInput,
  SaveButton,
  CancelButton,
};
