import { NavLink } from "react-router-dom"
import { useAuth } from "../../context/useAuth"
import { Graphic } from "./components/Graphic"
import { LastSkins } from "./components/LastSkins"
import { DashboardContainer } from "./styles"

export function Dashboard() {
    const { isAuthenticated } = useAuth()

    return (
        <DashboardContainer>
            {isAuthenticated ? (
                <>
                    <Graphic />
                    <LastSkins />
                </>
            ) : (
                <h1>Por favor, faça <NavLink to={"/login"}>login</NavLink> para acessar o dashboard</h1>
            )}
        </DashboardContainer>
    )
}