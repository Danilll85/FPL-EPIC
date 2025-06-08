import {  useLocation, useNavigate } from "react-router-dom";
import { Logo } from "../Logo/Logo";
import { CurrencyConverterWrapper, HistoryWrapper, NavbarWrapper } from "./styles";

export const Navbar = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const pageName = location.pathname;

  //to-do rewrite in data-atributes
  const handleClick = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    const target = e.currentTarget;

    switch (target.textContent) {
      case "Currency Converter":
        navigate("/");
        break;
      case "View Conversion History":
        navigate("/history");
        break;
    }
  };

  return (
    <NavbarWrapper>
      <Logo />
      <CurrencyConverterWrapper onClick={handleClick} isActive={pageName === "/" ? true : false}>
        Currency Converter
      </CurrencyConverterWrapper>
      <HistoryWrapper onClick={handleClick} isActive={pageName === "/history" ? true : false}>
        View Conversion History
      </HistoryWrapper>
    </NavbarWrapper>
  );
};
