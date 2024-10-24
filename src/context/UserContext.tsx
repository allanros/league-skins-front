import { createContext, ReactNode, useEffect, useState } from "react";
import { getUserId } from "../services/authService"
import { getUserInfo } from "../services/userService"

interface User {
    id: string;
    name: string;
    email: string;
}

interface UserContextProps {
    user: User | null;
    setUser: (user: User | null) => void;
}

export const UserContext = createContext<UserContextProps | null>(null);

export function UserProvider({ children }: { children: ReactNode }) {
    const [userInfo, setUserInfo] = useState<User | null>(null)

    useEffect(() => {
        const token = localStorage.getItem('token')

        if (token) {
            getUserId().then(userId => {
                if (userId) {
                    getUserInfo(userId).then(userInfo => {
                        if (userInfo) {
                            setUserInfo({
                                id: userId,
                                name: userInfo.username,
                                email: userInfo.email
                            })
                        }
                    })
                }
            })
        }
    }, [])

    return (
        <UserContext.Provider value={{ user: userInfo, setUser: setUserInfo }}>
            {children}
        </UserContext.Provider>
    )

}
