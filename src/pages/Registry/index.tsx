import { useState } from "react"
import { useForm } from "react-hook-form"
import { useNavigate } from "react-router-dom"
import { MainContainer, RegisterFormContainer } from "./styles"
import { registerUser } from "../../services/registerService"
import { useAuth } from "../../context/useAuth"

interface RegisterFormInputs {
    email: string,
    username: string,
    password: string
}

export function Registry() {
    const { register, handleSubmit, formState: { errors } } = useForm<RegisterFormInputs>()
    const [errorMessage, setErrorMessage] = useState('')
    const navigate = useNavigate()
    const { isAuthenticated } = useAuth()

    const onSubmit = async (data: RegisterFormInputs) => {
        const success = await registerUser(data.email, data.username, data.password)

        if (success) {
            navigate('/login')
        } else {
            setErrorMessage('Erro ao registrar')
        }
    }

    return (
        <MainContainer>
            <h1>Registro</h1>
            {!isAuthenticated ? (
                <RegisterFormContainer onSubmit={handleSubmit(onSubmit)}>
                    <div>
                        {errors.email && <span>{errors.email.message}</span>}
                        <input 
                            type="text"
                            placeholder="Nome de usuário"
                            {...register('username', { required: 'Campo obrigatório' })}
                        />
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
                    <button type="submit">Registrar</button>
                </RegisterFormContainer>
            ) : (
                <div>
                    <span>Você já está logado</span>
                    <button onClick={() => {
                        navigate('/dashboard')
                    }}>
                        Dashboard
                    </button>
                </div>
            )}
            
        </MainContainer>
    )
}