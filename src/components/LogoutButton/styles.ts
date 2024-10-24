import styled from "styled-components"

export const LogoutContainer = styled.div``

export const LogoutButtonContainer = styled.button`
    color: ${props => props.theme["red-500"]};
    padding: 0.5rem 1rem;
    border: 1px solid ${props => props.theme["red-500"]};
    border-radius: 8px;
    background-color: transparent;

    cursor: pointer;

    transition: background-color 0.5s, color 0.5s;

    &:hover {
        filter: brightness(0.9);
        background-color: ${props => props.theme["red-500"]};
        color: ${props => props.theme.white};
    }
`