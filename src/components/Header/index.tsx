import { HeaderContainer, HeaderLogo, HeaderUser, UserLoginButton } from "./styles"
import { useAuth } from "../../context/useAuth"
import { NavLink, useNavigate } from "react-router-dom"


import LeagueLogo from '../../assets/logo.webp'
import UserImage from '../../assets/Aatrox.png'
import { useUserInfo } from "../../context/useUserInfo"

export function Header() {
    const { isAuthenticated } = useAuth()
    const { user } = useUserInfo()
    const navigate = useNavigate()

    const handleLogin = () => {
        navigate('/login')
    }

    return (
        <HeaderContainer>
            <NavLink to='/'>
                <HeaderLogo>
                    <img src={LeagueLogo} alt="" />
                    <span>League skins</span>
                </HeaderLogo>
            </NavLink>
            {isAuthenticated && user ? (
                <NavLink to="/dashboard">
                    <HeaderUser>
                        <span>{user.name}</span>
                        <img src={UserImage} alt="" />
                    </HeaderUser>
                </NavLink>
            ) : (
                <UserLoginButton onClick={handleLogin}>
                    Login
                </UserLoginButton>
            )}
        </HeaderContainer>
    )
}