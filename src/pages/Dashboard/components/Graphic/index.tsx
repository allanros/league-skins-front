import { LogoutButton } from "../../../../components/LogoutButton";
import { PieGraphic } from "./components/PieGraphic";
import { useEffect, useState } from "react"
import { getTotalSkins } from "../../../../services/getSkinNumberService"
import { getAllChampions } from "../../../../services/championService"
import { GraphicContainer, GraphicContent, GraphicPerChampion, GraphicTitle, GraphicTotal } from "./styles";
import { useUserInfo } from "../../../../context/useUserInfo";

interface Champion {
    champion: string
    niceName: string
    skins: ChampionSkins[]
}

interface ChampionSkins {
    image: string
    name: string
    skin_id: string
}

export function Graphic() {
    const [totalSkins, setTotalSkins] = useState(0)
    const { user } = useUserInfo()
    const skinsOwned = user?.skins?.length || 0
    const skinsMissing = totalSkins - skinsOwned

    useEffect(() => {
        getTotalSkins().then((response) => {
            setTotalSkins(response.total_skins)
        })
    }, [])

    const [champions, setChampions] = useState([] as Champion[])
    const [skinsPerChampion, setSkinsPerChampion] = useState(0)
    const [skinsPerChampionMissing, setSkinsPerChampionMissing] = useState(0)

    useEffect(() => {
        getAllChampions().then((response) => {
            setChampions(response.attributes)
        })
    }, [])
    
    useEffect(() => {
        const countSkinsPerChampion = () => {
            let skinsCount = 0
            const countedChampions = new Set<string>()

            champions.forEach((champion) => {
                for (const skin of champion.skins) {
                    if (user?.skins?.includes(skin.skin_id) && !countedChampions.has(champion.champion)) {
                        skinsCount += 1
                        countedChampions.add(champion.champion)
                        break
                    }
                }
            })

            setSkinsPerChampion(skinsCount)
        }

        countSkinsPerChampion()
    }, [champions, user])

    useEffect(() => {
        setSkinsPerChampionMissing(168 - skinsPerChampion)
    }, [skinsPerChampion])

    return (
        <GraphicContainer>
            <GraphicTitle>
                <h1>Gráfico de skins</h1>
                <LogoutButton />
            </GraphicTitle>
            <GraphicContent>
                <GraphicTotal>
                    <PieGraphic 
                        title="Skins totais"
                        skinsOwned={skinsOwned}
                        skinsMissing={skinsMissing}
                    />
                </GraphicTotal>
                <GraphicPerChampion>
                    <PieGraphic 
                        title="Skins por campeão"
                        skinsOwned={skinsPerChampion}
                        skinsMissing={skinsPerChampionMissing}
                    />
                </GraphicPerChampion>
            </GraphicContent>
        </GraphicContainer>
    )
}