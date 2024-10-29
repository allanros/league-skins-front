import { NavLink } from "react-router-dom";
import { AboutContainer } from "./styles";

export function About() {
    return (
        <AboutContainer>
            <h2>Sobre o projeto</h2>
            <p>
                Este é um projeto idealizado para o treinamento e portfólio de um desenvolvedor que tenta ser fullstack. Veio de uma brincadeira com amigos
                e de uma vontade de por em prática alguns estudos que vinha fazendo usando essas tecnologias. O projeto consiste em uma coleção de skins do jogo League of Legends
                onde o usuário manualmente adiciona as skins que possui e o sistema calcula o total de skins que ele tem, quantas faltam, quais campeões ainda não tem skins e por aí vai.
            </p>

            <h3>Como funciona?</h3>
            <p>
                O projeto foi montado com o intuito de ser uma ferramenta simples e fácil de ser usada. O usuário pode adicionar e remover skins manualmente, além de
                dispor de um Dashboard com informações gerais sobre as skins que possui. O projeto foi feito com ReactJS no frontend e Python no backend, utilizando 
                Flask como framework e MongoDB como banco de dados.
            </p>
            <p>
                Basicamente é necessário o <NavLink to={"/login"}>Login</NavLink> do usuário, em caso de ainda não ser registrado, é possível se registrar
                efetuando o <NavLink to={"/registry"}>Cadastro</NavLink>. Após esse processo, estará disponível o Dashboard para acompanhar as estadísticas das skins
                e o acesso a página de adição de skins. Acessível através do menu superior.
            </p>

            <h3>Quem sou eu?</h3>
            <p>
                Meu nome é Allan Rosendo, sou um desenvolvedor backend que está tentando se aventurar no mundo do fullstack. Trabalhei por 2 anos com desenvolvimento
                backend e sempre tive a curiosidade da relação front e back. Esse projeto é fruto dessa curiosidade e de um desejo de pôr em prática alguns dos estudos que tive.
                Informações de redes sociais e contatos podem ser encontrados no rodapé do site.
            </p>
        </AboutContainer>
    )
}