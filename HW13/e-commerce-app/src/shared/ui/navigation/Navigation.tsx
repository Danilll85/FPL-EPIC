import type { Theme } from "../../../app/providers/context";
import { NavElement, NavigationWrapper } from "./styles";
import { useNavigate } from "react-router-dom";

interface Props {
  theme: Theme;
}

export const Navigation = ({ theme }: Props) => {
  const navigate = useNavigate();

  const handleClick = (e: React.MouseEvent<HTMLElement>) => {
    const title = e.currentTarget.textContent as string;

    switch (title) {
      case "products":
        navigate("/products");
        break;
      case "cart":
        navigate("/cart");
        break;
      case "profile":
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
