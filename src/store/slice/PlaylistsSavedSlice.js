import { createSlice } from '@reduxjs/toolkit'

export const PlaylistsSavedSlice = createSlice({
    name: 'playlistSaved',
    initialState: {
        playlistSaved: null,
        loadPlaylistSaved: false
    },
    reducers: {
        SET_PLAYLISTS_SAVED: ( state, action ) => {
            state.playlistSaved = action.payload.playlistSaved
            state.loadPlaylistSaved = false
        },
        SET_lOADING_PLAYLISTS_SAVED: ( state, action ) => {
            state.loadPlaylistSaved = true
        }
    }
})

export const { SET_PLAYLISTS_SAVED, SET_lOADING_PLAYLISTS_SAVED } = PlaylistsSavedSlice.actions;

export default PlaylistsSavedSlice.reducer;