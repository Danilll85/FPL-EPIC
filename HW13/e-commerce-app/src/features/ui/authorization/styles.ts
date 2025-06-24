import styled from "@emotion/styled";
import type { Theme } from "../../../app/providers/context";

const AuthWrapper = styled.div<{ $theme: Theme }>`
  display: flex;
  align-items: center;
  color: ${({$theme}) => ($theme === "light" ? "black" : "white")};
`;

export { AuthWrapper };
