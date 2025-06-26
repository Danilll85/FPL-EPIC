import styled from "@emotion/styled";

const NavbarWrapper = styled.div`
  outline: 1px solid black;
  background: #c7d0cc;
  padding: 2rem 4rem;
  display: flex;
  justify-content: space-between;
`;

const AppTitle = styled.div`
  font-size: 4rem;
`;

const Navigation = styled.div`
  display: flex;
  gap: 1.5rem;
`;

const NavItem = styled.button`
  background: none;
  border: none;
  font-size: 2rem;
  cursor: pointer;
`;

const AuthItem = styled(NavItem)`
  outline: 1px solid black;
  padding: 1rem 2rem;
`

export { NavbarWrapper, AppTitle, Navigation, NavItem, AuthItem };
