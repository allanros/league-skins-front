import axios from "axios"

const API_URL = "http://localhost:5000"

export async function login(email: string, password: string) {
    try {
        const response = await axios.post(`${API_URL}/user/login`, {
            email,
            password
        })

        const token = response.data.data.attributes.access_token

        localStorage.setItem('token', token)

        return true
    } catch (error) {
        console.error("Login error", error)
        return false
    }
}

export async function logout() {
    try {
        localStorage.removeItem('token')
        return true
    } catch (error) {
        console.error("Logout error", error)
        return false
    }
}

export async function getUserId() {
    try {
        const token = localStorage.getItem('token')

        if (!token) {
            return null
        }

        const response = await axios.get(`${API_URL}/user/get_id`, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        })

        return response.data.user_id
    } catch (error) {
        console.error("Get user id error", error)
        localStorage.removeItem('token')
        return null
    }
}
