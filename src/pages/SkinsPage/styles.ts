import styled from "styled-components"

export const MainContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 2rem;
`

export const MainScrollContainer = styled.div`
    overflow-y: auto;
    height: 85vh;
    padding-right: 1rem;

    &::-webkit-scrollbar {
        width: 1rem;
    }

    &::-webkit-scrollbar-thumb {
        background-color: #888;
        border-radius: 8px;
    }

    &::-webkit-scrollbar-track {
        background-color: ${props => props.theme["gray-900"]};
        border: 2px solid ${props => props.theme["gray-300"]};
        border-radius: 8px;
    }
`

export const ChampionContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1rem;
    margin-bottom: 2rem;
    background-color: ${props => props.theme["gray-900"]};
    border-radius: 13px;
    padding: 1rem;

    h2 {
        font-size: 1.5rem;
        font-weight: bold;
        margin-bottom: 1rem;
    }

`

export const SkinContainer = styled.div`
    display: flex;
    align-items: center;
    gap: 1rem;
    overflow-x: auto;
    padding-right: 1rem;

    &::-webkit-scrollbar {
        width: 0.5rem;
    }

    &::-webkit-scrollbar-thumb {
        background-color: #888;
        border-radius: 8px;
    }

    &::-webkit-scrollbar-track {
        background-color: ${props => props.theme["gray-900"]};
        border: 2px solid ${props => props.theme["gray-300"]};
        border-radius: 8px;
    }
`

export const SkinCard = styled.div`
    display: flex;
    flex-direction: column;
    gap: 0.85rem;
    min-width: 15rem;


    img {
        border-radius: 13px;
        width: 15rem;
    }

    span {
        font-weight: bold;
        text-align: center;
        height: 4rem;
    }
`