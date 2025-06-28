import { useEffect, useState } from "react";
import { AppTitle, AuthItem, NavbarWrapper, Navigation, NavItem } from "./styles";
import { LoginForm } from "../../../features/auth/ui/LoginForm/ui";
import { ModalOverlay, ModalContent, CloseButton } from "./styles";
import close from "../../../assets/close_icon.svg";
import { store, type AppDispatch, type RootState } from "../../../app/providers/store/store";
import { useDispatch, useSelector } from "react-redux";
import { setAuth } from "../../../app/providers/store/slices/auth.slice";

export const Navbar = () => {
  const [isShowAuthForm, setIsShowAuthForm] = useState(false);
  const isLogged = useSelector((state: RootState) => state.auth.isAuth);
  const dispatch = useDispatch<AppDispatch>();


  const handleClick = () => {
    if (!isLogged) {
      setIsShowAuthForm(true);
      return;
    }

    dispatch(setAuth(false));
  };

  return (
    <NavbarWrapper>
      <AppTitle>Feedback Dashboard</AppTitle>
      <Navigation>
        <NavItem>Home</NavItem>
        <NavItem>About</NavItem>
        <AuthItem onClick={handleClick}>{isLogged ? "logOut" : "Login"}</AuthItem>
      </Navigation>

      {isShowAuthForm && !isLogged && (
        <ModalOverlay onClick={() => setIsShowAuthForm(false)}>
          <ModalContent onClick={(e) => e.stopPropagation()}>
            <CloseButton onClick={() => setIsShowAuthForm(false)}>
              <img src={close} alt="Close modal" />
            </CloseButton>
            <LoginForm showModal={setIsShowAuthForm} />
          </ModalContent>
        </ModalOverlay>
      )}
    </NavbarWrapper>
  );
};
