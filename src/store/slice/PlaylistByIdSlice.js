import { createSlice } from '@reduxjs/toolkit'

export const playListByIdSlice = createSlice({
    name: 'playlist',
    initialState: {
        playlist: null,
        playlistLoad: false,
    },
    reducers: {
        SET_PLAYLIST: ( state, action ) => {
            state.playlist = action.payload.playlist
            state.playlistLoad = false
        },
        SET_LOAD: ( state, action ) => {
            state.playlistLoad = true
        }
    }
})

export const { SET_PLAYLIST, SET_LOAD } = playListByIdSlice.actions;

export default playListByIdSlice.reducer;