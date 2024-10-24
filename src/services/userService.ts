import axios from "axios"

const API_URL = "http://localhost:5000"

export async function getUserInfo(userId: string) {
    try {
        const token = localStorage.getItem('token')

        if (!token) {
            return null
        }

        const response = await axios.get(`${API_URL}/user`, {
            headers: {
                Authorization: `Bearer ${token}`,
                "User-ID": userId
            }
        })

        return response.data.data.attributes
    } catch (error) {
        console.error("Get user info error", error)
        return null
    }
}