import styled from "styled-components"

export const MainContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: auto;
    padding: 2.5rem;
    width: 30rem;

    border-radius: 13px;

    background-color: ${props => props.theme["gray-900"]};

    h1 {
        margin-bottom: 1rem;
    }
`

export const RegisterFormContainer = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    gap: 1rem;
    width: 100%;

    div {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 1.5rem;
        width: 70%;
    }

    input {
        padding: 0.5rem;
        border-radius: 13px;
        width: 100%;
        background-color: ${props => props.theme["gray-900"]};
        border: 1px solid ${props => props.theme["gray-200"]};
        color: ${props => props.theme.white};
    }

    input::placeholder {
        color: ${props => props.theme.white};
    }

    button[type="submit"] {
        background-color: ${props => props.theme["green-500"]};
        color: ${props => props.theme.white};
        width: 40%;
        font-size: 1rem;
        font-weight: bold;
        margin-top: 2rem;

        padding: 0.5rem 1rem;
        border-radius: 13px;

        border: none;

        cursor: pointer;
    }

`
