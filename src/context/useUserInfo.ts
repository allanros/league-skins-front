import { useContext } from "react";
import { UserContext } from "./UserContext";

export function useUserInfo() {
    const context = useContext(UserContext)
    if(!context) {
        throw new Error("useUserInfo must be used within a UserProvider")
    }
    return context
}