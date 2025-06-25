import { useState, type Dispatch } from "react";
import type { Theme } from "../../../app/providers/theme";
import { AuthBtn, AuthWrapper } from "./styles";
import type { Action } from "../../../app/providers/auth/reducer";

interface Props {
  theme: Theme;
  isLogged: boolean;
  toggleLogged: Dispatch<Action>;
}

export const Authorization = ({ theme, isLogged, toggleLogged }: Props) => {
  const [isLogIn, setLogged] = useState(isLogged);

  const handleClick = () => {
    if (isLogIn) {
      toggleLogged({ type: "LOG_OUT" });
      setLogged(false);
    } else {
      toggleLogged({ type: "LOG_IN" });
      setLogged(true);
    }
  };

  return (
    <AuthWrapper $theme={theme}>
      <AuthBtn onClick={handleClick}>
        {isLogIn && "LogOut"}
        {!isLogIn && "LogIn"}
      </AuthBtn>
    </AuthWrapper>
  );
};