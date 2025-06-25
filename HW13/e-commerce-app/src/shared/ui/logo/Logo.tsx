import { LogoImg, LogoWrapper, Title } from "./styles";
import logoImage from "../../../assets/icon_hw13.svg";
import { useNavigate } from "react-router-dom";
import type { Theme } from "../../../app/providers/theme";

interface Props {
  theme: Theme;
}

export const Logo = ({ theme }: Props) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/");
  };

  return (
    <LogoWrapper onClick={handleClick}>
      <LogoImg src={logoImage}></LogoImg>
      <Title $theme={theme}>Commerce</Title>
    </LogoWrapper>
  );
};
