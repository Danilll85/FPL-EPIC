import { useState } from "react";
import { AppTitle, AuthItem, NavbarWrapper, Navigation, NavItem } from "./styles";
import { LoginForm } from "../../../features/auth/ui/LoginForm/ui";
import { ModalOverlay, ModalContent, CloseButton } from "./styles";
import close from "../../../assets/close_icon.svg";

export const Navbar = () => {
  const [isShowAuthForm, setIsShowAuthForm] = useState(false);
  const [isLogged, setIsLogged] = useState(false);

  return (
    <NavbarWrapper>
      <AppTitle>Feedback Dashboard</AppTitle>
      <Navigation>
        <NavItem>Home</NavItem>
        <NavItem>About</NavItem>
        <AuthItem onClick={() => setIsShowAuthForm(true)}>{isLogged ? "logOut" : "Login"}</AuthItem>
      </Navigation>

      {isShowAuthForm && (
        <ModalOverlay onClick={() => setIsShowAuthForm(false)}>
          <ModalContent onClick={(e) => e.stopPropagation()}>
            <CloseButton onClick={() => setIsShowAuthForm(false)}>
              <img src={close} alt="Close modal" />
            </CloseButton>
            <LoginForm showModal={setIsShowAuthForm}/>
          </ModalContent>
        </ModalOverlay>
      )}
    </NavbarWrapper>
  );
};
