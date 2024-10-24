import { Graphic } from "./components/Graphic";
import { LastSkins } from "./components/LastSkins";
import { DashboardContainer } from "./styles";

export function Dashboard() {
    return (
        <DashboardContainer>
            <Graphic />
            <LastSkins />
        </DashboardContainer>
    )
}