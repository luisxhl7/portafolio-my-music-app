import axios from "axios"
import * as endPoints from '../constants/api-constants'

class SpotifyService {

    static getUser = () => {
        return axios.get(endPoints.getUser);
    }

    // static getArtistByID = (id) => {
    //     return axios.get(`${endPoints.getArtists}?id=${id}`)
    // }
    























    static getMorty = () => {
        return axios.get(endPoints.getMorty)
    }

    static getAlbums = () => {
        return axios.get(endPoints.getMorty)
    }


    static getCategories = () => {
        return axios.get(endPoints.getMorty)
    }

    static getTracks = () => {
        return axios.get(endPoints.getMorty)
    }











    

}

export default SpotifyService;