import { useForm } from 'react-hook-form'
import { LoginFormContainer, MainContainer } from './styles'
import { getUserId, login as loginService } from '../../services/authService'
import { useState } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import { useAuth } from '../../context/useAuth'
import { useUserInfo } from '../../context/useUserInfo'
import { getUserInfo } from '../../services/userService'

type LoginFormInputs = {
    email: string
    password: string
}

export function Login() {
    const { register, handleSubmit, formState: { errors } } = useForm<LoginFormInputs>()
    const [errorMessage, setErrorMessage] = useState('')
    const navigate = useNavigate()
    const { isAuthenticated, login, logout } = useAuth()
    const { setUser } = useUserInfo()

    const onSubmit = async (data: LoginFormInputs) => {
        const success = await loginService(data.email, data.password)

        if (success) {
            login()
            const userId = await getUserId()
            const user = await getUserInfo(userId)
            setUser({
                id: userId,
                name: user?.username || '',
                email: user?.email || '',
                skins: user?.skins || []
            })

            navigate('/dashboard')
        } else {
            setErrorMessage('Email ou senha inválidos')
        }
    }

    return (
        <MainContainer>
            <h1>Login</h1>
            {!isAuthenticated ? (
                <LoginFormContainer onSubmit={handleSubmit(onSubmit)}>
                    <div>
                        {errors.email && <span>{errors.email.message}</span>}
                        <input
                            type="email"
                            placeholder="E-mail"
                            {...register('email', { required: 'Campo obrigatório' })}
                        />
                        {errors.password && <span>{errors.password.message}</span>}
                        <input 
                            type="password"
                            placeholder="Senha"
                            {...register('password', { required: 'Campo obrigatório' })}
                        />
                    </div>
                    {errorMessage && <span>{errorMessage}</span>}
                    <button type="submit">Entrar</button>
                    <NavLink to="/registry">Registrar sua conta</NavLink>
                </LoginFormContainer>
            ) : (
                <div>
                    <span>Você já está logado</span>
                    <button onClick={() => {
                        logout()
                        navigate('/')
                    }}>
                        Logout
                    </button>
                </div>
            )}
            
        </MainContainer>
    )
}