import SpotifyService from "../../services/spotify-services"
import { SET_PLAYLIST, SET_LOAD } from "../slice/PlaylistByIdSlice";

export const getPlaylistById_thunks = (id) => {
    return async(dispatch, getState) => {
        try {
            dispatch( SET_LOAD() );
            setTimeout( async() => {
                const {data} = await SpotifyService.getPlayListById(id)
                dispatch( SET_PLAYLIST({playlist: data}) );
                
            }, 1000);
            
        } catch (error) {
            if (error.response && error.response.status === 401) {
                await SpotifyService.getAccessToken();
                setTimeout( async() => {
                    const {data} = await SpotifyService.getPlayListById(id)
                    dispatch( SET_PLAYLIST({playlist: data}) );
                    
                }, 1000);
              } else {
                console.error('Error en la solicitud:', error);
            }
        }
    }
}