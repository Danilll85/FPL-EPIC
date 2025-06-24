import { LogoImg, LogoWrapper, Title } from "./styles";
import logoImage from "../../../assets/icon_hw13.svg";
import { useNavigate } from "react-router-dom";

export const Logo = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/");
  };

  return (
    <LogoWrapper onClick={handleClick}>
      <LogoImg src={logoImage}></LogoImg>
      <Title>Commerce</Title>
    </LogoWrapper>
  );
};
