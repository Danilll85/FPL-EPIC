import { useContext } from "react";
import { Context } from "../../../../app/providers/cart/index";

export const useCart = () => {
  const context = useContext(Context);

  if (!context) throw new Error("no inside provider");

  return context;
};
