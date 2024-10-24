import axios from "axios"

const API_URL = "http://localhost:5000"

export const getChampions = async (page: number) => {
    const response = await axios.get(`${API_URL}/champions/paged/${page}`)
    return response.data
}
