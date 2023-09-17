import { createSlice } from '@reduxjs/toolkit'

export const featuredPlaylistsSlice = createSlice({
    name: 'featuredPlaylists',
    initialState: {
        featuredPlaylists: null,
        loadFeaturedPlaylists: false
    },
    reducers: {
        SET_FEATUREDPLAYLISTS: ( state, action ) => {
            state.featuredPlaylists = action.payload.featuredPlaylists
            state.loadFeaturedPlaylists = false
        },
        SET_LOAD: ( state, action ) => {
            state.loadFeaturedPlaylists = true
        }
    }
})

export const { SET_FEATUREDPLAYLISTS, SET_LOAD } = featuredPlaylistsSlice.actions;

export default featuredPlaylistsSlice.reducer;