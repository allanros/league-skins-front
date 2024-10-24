import { LastSkinsContainer, SkinCard, SkinsContainer } from "./styles";

import skinTestImg from "../../../../assets/Aatrox_0.jpg"

export function LastSkins() {
    return (
        <LastSkinsContainer>
            <h1>Últimas skins</h1>
            <SkinsContainer>
                <SkinCard>
                    <img src={skinTestImg} alt="" />
                </SkinCard>
                <SkinCard>
                    <img src={skinTestImg} alt="" />
                </SkinCard>
                <SkinCard>
                    <img src={skinTestImg} alt="" />
                </SkinCard>
                <SkinCard>
                    <img src={skinTestImg} alt="" />
                </SkinCard>
                <SkinCard>
                    <img src={skinTestImg} alt="" />
                </SkinCard>
            </SkinsContainer>
        </LastSkinsContainer>
    )
}