import type { Theme } from "../../../app/providers/theme";
import { NavElement, NavigationWrapper } from "./styles";
import { useNavigate } from "react-router-dom";

interface Props {
  theme: Theme;
  isLogged: boolean;
}

export const Navigation = ({ theme, isLogged }: Props) => {
  const navigate = useNavigate();

  const handleClick = (e: React.MouseEvent<HTMLElement>) => {
    const title = e.currentTarget.textContent as string;

    switch (title) {
      case "products":
        navigate("/products");
        break;
      case "cart":
        if (!isLogged) {
          alert("login firstly");
          return;
        }
        navigate("/cart");
        break;
      case "profile":
        if (!isLogged) {
          alert("login firstly");
          return;
        }
        navigate("/profile");
        break;
      default:
        console.log("how?");
    }
  };

  return (
    <NavigationWrapper>
      <NavElement onClick={handleClick} $theme={theme}>products</NavElement>
      <NavElement onClick={handleClick} $theme={theme}>cart</NavElement>
      <NavElement onClick={handleClick} $theme={theme}>profile</NavElement>
    </NavigationWrapper>
  );
};
