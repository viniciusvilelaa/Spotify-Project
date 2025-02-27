import axios from "axios";

const URL = "https://back-end-jornada-production.up.railway.app";

export const getArtists = async () => {
    const response = await axios.get(`${URL}/artists`);
    
    console.log("Get request for artists")
    
    if (response.status === 200) {
        return response.data
    }
}

export const getSongs = async () => {
    const response = await axios.get(`${URL}/songs`)
    
    console.log("Get request for songs")
    
    
    if (response.status === 200) {
        return response.data
    }
}