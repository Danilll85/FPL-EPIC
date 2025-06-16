import styled from "@emotion/styled";

export const AllHistoryWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  padding: 1.5rem;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

export const Title = styled.h2`
  margin: 0;
  color: #333;
  font-size: 1.5rem;
`;

export const HistoryList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  width: 100%;
  max-width: 500px;
`;

export const HistoryItem = styled.li`
  padding: 0.75rem 1rem;
  margin-bottom: 0.5rem;
  background-color: white;
  border-radius: 6px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
  transition: transform 0.2s;

  &:hover {
    transform: translateY(-2px);
  }

  &:last-child {
    margin-bottom: 0;
  }
`;

export const CurrencyPair = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
`;

export const Currency = styled.span`
  font-weight: 500;
  color: #2c3e50;
`;

export const Arrow = styled.span`
  color: #7f8c8d;
  font-weight: bold;
`;
