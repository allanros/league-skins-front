import styled from "styled-components"

export const AboutContainer = styled.div`
    display: flex;
    flex-direction: column;
    padding: 0 2rem;

    h2 {
        font-size: 2rem;
        margin-bottom: 1rem;
    }

    h3 {
        margin: 2rem 0;
    }

    p {
        font-size: 1.2rem;
        padding: 1rem;

        a {
            color: ${(props) => props.theme["green-500"]};
            text-decoration: none;
            font-weight: bold;
        }
    }
`