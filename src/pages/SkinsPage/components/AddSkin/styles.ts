import styled from "styled-components"

export const AddSkinContainer = styled.div`
    display: flex;
    align-self: center;
    margin-bottom: 1rem;
`

interface AddSkinButtonProps {
    isOwned: boolean
}

export const AddSkinButton = styled.button<AddSkinButtonProps>`
    padding: 0.5rem 1rem;
    border-radius: 8px;
    box-shadow: none;
    border: solid 2px ${(props) => props.isOwned ? props.theme["red-500"] : props.theme["green-500"]};
    color: ${(props) => props.isOwned ? props.theme["red-500"] : props.theme["green-500"]};
    font-weight: bold;
    background-color: transparent;
    cursor: pointer;

    transition: background-color 0.2s, color 0.2s;

    &:hover {
        background-color: ${(props) => props.isOwned ? props.theme["red-800"] : props.theme["green-800"]};
        border: solid 2px ${(props) => props.isOwned ? props.theme["red-800"] : props.theme["green-800"]};
        color: ${(props) => props.theme.white};
    }
`
