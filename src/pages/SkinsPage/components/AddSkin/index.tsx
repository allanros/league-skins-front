import { AddSkinButton, AddSkinContainer } from "./styles";
import { addSkinService } from "../../../../services/addSkinService"
import { getUserInfo } from "../../../../services/userService"
import { useUserInfo } from "../../../../context/useUserInfo"

export function AddSkin({ skin }: { skin: string }) {
    const { user, setUser } = useUserInfo()
    const userId = user?.id
    const isOwned = (user?.skins || []).includes(skin)

    const handleAddSkin = async () => {
        if(!userId) return

        try {
            const response = await addSkinService(userId, skin)
            if(!response) return

            const updatedUser = await getUserInfo(userId)
            if(updatedUser) setUser({ ...user, skins: updatedUser.skins})
            
            return response
        } catch (error) {
            console.error("Error adding skin", error)
        }

    }

    return (
        <AddSkinContainer>
            <AddSkinButton onClick={handleAddSkin} isOwned={isOwned}>
                {isOwned ? "Remover" : "Adicionar"}
            </AddSkinButton>
        </AddSkinContainer>
    )
}