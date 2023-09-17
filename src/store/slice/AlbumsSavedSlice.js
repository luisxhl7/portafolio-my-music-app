import { createSlice } from '@reduxjs/toolkit'

export const AlbumsSavedSlice = createSlice({
    name: 'albumsSaved',
    initialState: {
        albumsSaved: null,
        loadAlbumSaved: false
    },
    reducers: {
        SET_ALBUMS_SAVED: ( state, action ) => {
            state.albumsSaved = action.payload.albumsSaved
            state.loadAlbumSaved = false
        },
        SET_lOAD: ( state, action ) => {
            state.loadAlbumSaved = true
        }
    }
})

export const { SET_ALBUMS_SAVED, SET_lOAD } = AlbumsSavedSlice.actions;

export default AlbumsSavedSlice.reducer;