import { createSlice } from '@reduxjs/toolkit'

export const ArtistsSlice = createSlice({
    name: 'artists',
    initialState: {
        artists: null,
        loadArtists: false,
    },
    reducers: {
        SET_ARTISTS: ( state, action ) => {
            state.artists = action.payload.artists
            state.loadArtists = false
        },
        SET_LOAD: ( state, action ) => {
            state.loadArtists = true
        }
    }
})

export const { SET_ARTISTS, SET_LOAD } = ArtistsSlice.actions;

export default ArtistsSlice.reducer;