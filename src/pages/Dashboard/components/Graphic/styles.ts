import styled from "styled-components";

export const GraphicContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;

    margin-bottom: 3rem;
`

export const GraphicTitle = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;

    h1 {
        margin-bottom: 2rem;
    }
`

export const GraphicContent = styled.div`
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    height: 25rem;

    text-align: center;

    h3 {
        margin-bottom: 1rem;
    }

    @media (max-width: 768px) {
        flex-direction: column;
        gap: 2rem;
    }

`

const Graphic = styled.div`
    width: 50%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;

    @media (max-width: 768px) {
        width: 100%;
    }
`

export const GraphicTotal = styled(Graphic)``

export const GraphicPerChampion = styled(Graphic)``