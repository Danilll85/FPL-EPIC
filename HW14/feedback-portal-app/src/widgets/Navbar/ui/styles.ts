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
`;

const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
  backdrop-filter: blur(5px);
`;

const ModalContent = styled.div`
  background: white;
  border-radius: 12px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.15);
  width: 100%;
  max-width: 400px;
  position: relative;
  padding: 2rem;
`;

const CloseButton = styled.button`
  position: absolute;
  top: 1rem;
  right: 1rem;
  background: none;
  border: none;
  cursor: pointer;
  padding: 0.5rem;
  border-radius: 50%;
  transition: all 0.2s;

  &:hover {
    background: #f5f5f5;
  }

  img {
    width: 20px;
    height: 20px;
  }
`;

export { NavbarWrapper, AppTitle, Navigation, NavItem, AuthItem, ModalOverlay, ModalContent, CloseButton };
