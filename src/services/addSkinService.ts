import axios from "axios"

const API_URL = "http://localhost:5000"

export const addSkinService = async (user_id: string, skinName: string) => {
    try {
        const token = localStorage.getItem('token')

        if (!token) {
            return null
        }

        const response = await axios.patch(
            `${API_URL}/user/skin`,
            { skin: skinName },
            {
                headers: {
                    "User-ID": user_id,
                    Authorization: `Bearer ${token}`,
                },
            }
        );
        return response.data;
    } catch (error) {
        console.error("Add skin error", error);
        return null;
    }
}
