import { css } from "@emotion/react";
import styled from "@emotion/styled";

interface NavItemProps {
  isActive?: boolean;
}

export const NavbarWrapper = styled.div`
  background-color: white;
  display: flex;
  gap: 1rem;
`;

const NavItemBase = styled.div<NavItemProps>`
  padding-inline: 2rem;  
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  font-size: 1.5rem;
  text-transform: uppercase;
  cursor: pointer;

  ${({ isActive }) =>
    isActive && 
    css`
        &::after {
            content: "";
            position: absolute;
            left: 0;
            bottom: 2px;
            width: 100%;
            height: 10px;
            background-color: #68a69c;
        }
    
    `
}
`;

export const CurrencyConverterWrapper = styled(NavItemBase)`
  border: 1px solid p ink;
`;

export const HistoryWrapper = styled(NavItemBase)`
  border: 1px solid a qua;
`;
