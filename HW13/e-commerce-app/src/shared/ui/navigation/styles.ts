import styled from "@emotion/styled";
import type { Theme } from "../../../app/providers/context";

const NavigationWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 2rem;
  margin-inline: 20rem;
`;

const NavElement = styled.div<{ $theme: Theme }>`
  font-size: 2rem;
  color: ${({ $theme }) => ($theme === "light" ? "black" : "white")};
  cursor: pointer;
`;

export { NavigationWrapper, NavElement };
