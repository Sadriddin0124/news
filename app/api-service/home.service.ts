import axios from "axios";
import { API_URL, endOfURL } from "../api/interceptors"

export const getNews = async(language: string | undefined | null) => {
    try {
        const response = await axios.get(`${API_URL}?q=all&language=${language}${endOfURL}`)
        return response
    } catch (error) {
        console.log(error);
        
    }
}
