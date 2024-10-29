import { useUserInfo } from "../../context/useUserInfo";
import { About } from "./components/About";
import { HomeContainer } from "./styles";

export function Home() {
    const { user } = useUserInfo()

    return (
        <HomeContainer>
            {user ? (
                <h1>Olá, {user.name}</h1>
            ) : (
                <h1>Olá, visitante</h1>
            )}
            <About />
        </HomeContainer>
    )
}