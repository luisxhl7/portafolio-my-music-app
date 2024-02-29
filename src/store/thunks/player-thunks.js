import { SET_PLAYER, SET_LOAD } from "../slice/PlayerSlice";

export const player_thunks = (track) => {
    return async(dispatch, getState) => {
        await dispatch( SET_LOAD() );
        setTimeout(() => {
            localStorage.setItem('playTrack', JSON.stringify(track))
            dispatch( SET_PLAYER({player: {...track}}) );
        }, 1000);
    
    }
}