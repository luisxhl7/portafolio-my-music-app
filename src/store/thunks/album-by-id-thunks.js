import SpotifyService from "../../services/spotify-services"
import { SET_ALBUM, SET_LOAD } from "../slice/AlbumByIdSlice";

export const getAlbumById_thunks = (id) => {
    return async(dispatch, getState) => {
        try {
            dispatch( SET_LOAD() );
            setTimeout( async() => {
                const {data} = await SpotifyService.getAlbumById(id)
                dispatch( SET_ALBUM({album: data}) );
                
            }, 1000);
            
        } catch (error) {
            if (error.response && error.response.status === 401) {
                await SpotifyService.getAccessToken();
                setTimeout( async() => {
                    const {data} = await SpotifyService.getAlbumById(id)
                    dispatch( SET_ALBUM({album: data}) );
                    
                }, 1000);
              } else {
                console.error('Error en la solicitud:', error);
            }
        }
    }
}