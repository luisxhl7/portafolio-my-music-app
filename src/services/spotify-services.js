import axios from "axios"
import * as endPoints from '../constants/api-constants'

class SpotifyService {
    
    static getMorty = () => {
        return axios.get(endPoints.getMorty)
    }

}

export default SpotifyService;