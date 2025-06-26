import { AppTitle, AuthItem, NavbarWrapper, Navigation, NavItem } from "./styles";

export const Navbar = () => {
  return (
    <NavbarWrapper>
      <AppTitle>Feedback Dashboard</AppTitle>
      <Navigation>
        <NavItem>Home</NavItem>
        <NavItem>About</NavItem>
        <AuthItem>Login</AuthItem>
      </Navigation>
    </NavbarWrapper>
  );
};
