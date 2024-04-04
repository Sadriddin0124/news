import axios from "axios";
import { API_URL, endOfURL } from "../api/interceptors"

export const getNewsSearch = async(language: string | undefined | null, search: string) => {
    try {
        const response = await axios.get(`${API_URL}?q=${search}&language=${language}${endOfURL}`)
        return response
    } catch (error) {
        console.log(error);
    }
}
