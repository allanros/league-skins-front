import { LogoutButton } from "../../../../components/LogoutButton";
import { GraphicContainer, GraphicContent, GraphicPerChampion, GraphicTitle, GraphicTotal } from "./styles";

export function Graphic() {
    return (
        <GraphicContainer>
            <GraphicTitle>
                <h1>Gráfico de skins</h1>
                <LogoutButton />
            </GraphicTitle>
            <GraphicContent>
                <GraphicTotal>
                    <h3>Total de skins</h3>
                    <div>
                        Gráfico aqui
                    </div>
                </GraphicTotal>
                <GraphicPerChampion>
                    <h3>Skins por campeão</h3>
                    <div>
                        Gráfico aqui
                    </div>
                </GraphicPerChampion>
            </GraphicContent>
        </GraphicContainer>
    )
}