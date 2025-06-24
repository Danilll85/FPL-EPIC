import styled from "@emotion/styled";
import type { Theme } from "../../../app/providers/context";

const ThemeToggleWrapper = styled.div<{ $theme: Theme }>`
  display: flex;
  align-items: center;
  gap: 1rem;
  color: ${({ $theme }) => ($theme === "light" ? "black" : "white")};
  cursor: pointer;
`;

export { ThemeToggleWrapper };
