import styled from "styled-components";

export const GraphicContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;

    flex: 1;

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

    text-align: center;

    h3 {
        margin-bottom: 1rem;
    }

`

const GraphicStyle = styled.div`
    div {
        border: 1px solid ${props => props.theme.white};
        border-radius: 100%;
        padding: 1rem;
        margin-bottom: 1rem;
        
        width: 15rem;
        height: 15rem;

        display: flex;
        justify-content: center;
        align-items: center;
    }
`

export const GraphicTotal = styled(GraphicStyle)``

export const GraphicPerChampion = styled(GraphicStyle)``