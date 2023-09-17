import { createSlice } from '@reduxjs/toolkit'

export const albumsSlice = createSlice({
    name: 'albums',
    initialState: {
        albums: null,
        loadAlbums: false
    },
    reducers: {
        SET_ALBUMS: ( state, action ) => {
            state.albums = action.payload.albums
            state.loadAlbums = true
        },
        SET_LOAD: ( state, action ) => {
            state.loadAlbums = false
        }
    }
})

export const { SET_ALBUMS, SET_LOAD } = albumsSlice.actions;

export default albumsSlice.reducer;