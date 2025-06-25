import styled from "@emotion/styled";
import type { Theme } from "../../../app/providers/theme";

export const ProfileWrapper = styled.div`
  padding: 2rem;
  max-width: 600px;
  margin: 0 auto;
`;

export const Greeting = styled.h2<{ $theme: Theme }>`
  font-size: 1.5rem;
  margin-bottom: 1.5rem;
  color: ${({ $theme }) => ($theme === "light" ? "black" : "white")};
`;

export const ChangeNameForm = styled.form`
  display: flex;
  gap: 0.5rem;
  margin-bottom: 1rem;
`;

export const Input = styled.input`
  padding: 0.5rem;
  border: 1px solid #ccc;
  border-radius: 4px;
  flex-grow: 1;
`;

export const Button = styled.button`
  padding: 0.5rem 1rem;
  background-color: #646cff;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.2s;

  &:hover {
    background-color: #535bf2;
  }
`;

export const Message = styled.p`
  color: #4caf50;
  margin-top: 1rem;
`;
