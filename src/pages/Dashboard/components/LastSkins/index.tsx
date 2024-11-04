import { LastSkinsContainer, SkinCard, SkinsContainer } from "./styles";

import { useUserInfo } from "../../../../context/useUserInfo";

export function LastSkins() {
    const { user } = useUserInfo()
    const skins = user?.skins || []
    const lastSkins = skins.slice(-5)

    console.log(lastSkins)

    return (
        <LastSkinsContainer>
            <h1>Últimas skins</h1>
            <SkinsContainer>
                {
                    lastSkins.map((skin) => {
                        return (
                            <SkinCard key={skin}>
                                <img src={`https://ddragon.leagueoflegends.com/cdn/img/champion/loading/${skin}.jpg`} alt="" />
                            </SkinCard>
                        )
                    })
                }
            </SkinsContainer>
        </LastSkinsContainer>
    )
}