import styled from "@emotion/styled";
import type { Theme } from "../../../app/providers/context";

const LogoWrapper = styled.div`
  display: flex;
  gap: 1rem;
  cursor: pointer;
`;

const LogoImg = styled.img`
  width: 5rem;
  height: 5rem;
`;

const Title = styled.div<{ $theme: Theme }>`  
  color: ${({ $theme }) => ($theme === "light" ? "black" : "white")};
  font-size: 4rem;
`;

export { LogoWrapper, LogoImg, Title };