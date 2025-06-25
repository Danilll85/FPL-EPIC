import { useContext } from "react";
import { Context } from "../../../app/providers/auth";

export const useAuth = () => {
    const context = useContext(Context);
    
    if(!context) throw new Error("no inside provider");

    return context;
}