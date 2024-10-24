import styled from "styled-components";

export const LastSkinsContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;

    flex: 1;

    margin-bottom: 3rem;

    h1 {
        margin-bottom: 2rem;
    }
`

export const SkinsContainer = styled.div`
    display: flex;
    justify-content: start;
    gap: 3rem;
    margin-top: 2rem;

`

export const SkinCard = styled.div`
    img {
        width: 15rem;
        border-radius: 13px;
    }
`