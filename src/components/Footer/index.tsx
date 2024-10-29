import { GithubLogo, LinkedinLogo } from "phosphor-react";
import { Contacts, FooterContainer, SocialMedia } from "./styles";

export function Footer() {
    return (
        <FooterContainer>
            <Contacts>
                <h4>Contato</h4>
                <p>Email: allan.rosendo@hotmail.com</p>
            </Contacts>
            <SocialMedia>
                <h4>Redes</h4>
                <a href="https://www.linkedin.com/in/allanros/" target="_blank"><LinkedinLogo size={24}/> allanros</a>
                <a href="https://github.com/allanros" target="_blank"><GithubLogo size={24} /> allanros</a>
            </SocialMedia>
        </FooterContainer>
    )
}