import axios from "axios"
import * as endPoints from '../constants/api-constants'
import {REDIRECT_URI} from '../constants/variables'


class SpotifyService {

  static getUser = () => {
    return axios.get(endPoints.getUser);
  }
  
  static getAccessToken = async (clientId, code) => {
    try {
      const verifier = localStorage.getItem("verifier");
  
      const tokenParams = new URLSearchParams();
      tokenParams.append("client_id", clientId);
      tokenParams.append("grant_type", "authorization_code");
      tokenParams.append("code", code);
      tokenParams.append("redirect_uri", REDIRECT_URI);
      tokenParams.append("code_verifier", verifier);
  
      const result = await fetch("https://accounts.spotify.com/api/token", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: tokenParams,
      });
      
      const { access_token } = await result.json();
      return access_token;
    } catch (error) {
      console.error("Error al obtener el token de acceso:", error);
      // Maneja el error de manera adecuada, por ejemplo, mostrando un mensaje al usuario.
      throw error;
    }
  };
  
  static getAlbumsSaved = async () => {
    return axios.get(endPoints.getAlbumsSaved);
  }
  
  static getPlaylistSaved = async () => {
    return axios.get(endPoints.getPlaylistSaved);
  }

  static getArtists = async () => {
    return axios.get(`${endPoints.getArtists}?ids=7vk5e3vY1uw9plTHJAMwjN%2C57dN52uHvrHOxijzpIgu3E%2C1vCWHaC5f2uS3yhpwWbIA6`);
  }
}

export default SpotifyService;