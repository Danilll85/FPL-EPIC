import { NavElement, NavigationWrapper } from "./styles";
import { useNavigate } from "react-router-dom";

export const Navigation = () => {
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
      <NavElement onClick={handleClick}>products</NavElement>
      <NavElement onClick={handleClick}>cart</NavElement>
      <NavElement onClick={handleClick}>profile</NavElement>
    </NavigationWrapper>
  );
};
