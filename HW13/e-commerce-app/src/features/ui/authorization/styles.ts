import styled from "@emotion/styled";
import type { Theme } from "../../../app/providers/theme";

const AuthWrapper = styled.div<{ $theme: Theme }>`
  display: flex;
  align-items: center;
  color: ${({$theme}) => ($theme === "light" ? "black" : "white")};
`;

const AuthBtn = styled.button`
  border: none;
  background: none;
  cursor: pointer;
`

export { AuthWrapper, AuthBtn };
