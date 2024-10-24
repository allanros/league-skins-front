import axios from "axios"

const API_URL = "http://localhost:5000"

export async function registerUser(email: string, username: string, hashed_password: string) {
    try {
        await axios.post(`${API_URL}/user/register`, {
            "user": {
                username,
                email,
                hashed_password
            }
        })

        return true
    } catch (error) {
        console.error("Register error", error)
        return false
    }
}
