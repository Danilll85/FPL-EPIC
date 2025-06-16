import { LogoWrapper, Img, Title } from "./styles";
import LogoImg from "../../assets/loupe-zoom-svgrepo-com.svg";

export const Logo = () => {
  return (
    <LogoWrapper>
      <Img src={LogoImg} alt="logo" />
      <Title>
        Currency<b>Exchange</b>
      </Title>
    </LogoWrapper>
  );
};
