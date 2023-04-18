import { useContext } from "react";
import { AuthContext } from "../components/hoc/AuthProvider";

export function useAuth() {
    return useContext(AuthContext);
}