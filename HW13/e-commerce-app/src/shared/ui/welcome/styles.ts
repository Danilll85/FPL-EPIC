import styled from "@emotion/styled";
import type { Theme } from "../../../app/providers/theme";
import { colors } from "../styleColors";

export const Header = styled.h1<{ $theme: Theme }>`
  height: 84.5vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background: ${({ $theme }) => ($theme === "light" ? colors.backgroundBodyLight : colors.backgroundBodyDark)};
  color: ${({ $theme }) => ($theme === "light" ? "black" : "white")};
  font-size: 5rem;
`;
