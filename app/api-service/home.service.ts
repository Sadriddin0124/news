import axios from "axios";
import { API_URL, endOfURL } from "../api/interceptors"

export const getNews = async() => {
    try {
        const response = await axios.get(`${API_URL}?q=new${endOfURL}`)
        return response
    } catch (error) {
        console.log(error);
        
    }
}