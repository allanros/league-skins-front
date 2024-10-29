import styled from "styled-components"

export const FooterContainer = styled.footer`
    display: flex;
    justify-content: space-around;
    align-items: flex-start;
    padding: 2rem 0;
    background-color: ${(props) => props.theme["gray-900"]};

    h4 {
        font-size: 1.2rem;
    }
`

export const Contacts = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1rem;
`

export const SocialMedia = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1rem;

    a {
        display: flex;
        align-items: center;
        gap: 0.5rem;
        color: ${(props) => props.theme["gray-100"]};
        text-decoration: none;
    }
`
