import { LogoutButtonContainer, LogoutContainer } from './styles'
import { useAuth } from '../../context/useAuth'
import { useNavigate } from 'react-router-dom'
import { useUserInfo } from '../../context/useUserInfo'

export function LogoutButton() {
    const { logout } = useAuth()
    const { setUser } = useUserInfo()
    const navigate = useNavigate()

    function handleLogout() {
        logout()
        setUser(null)
        navigate('/')
    }    

    return (
        <LogoutContainer>
            <LogoutButtonContainer onClick={handleLogout}>
                Logout
            </LogoutButtonContainer>
        </LogoutContainer>
    )
}
