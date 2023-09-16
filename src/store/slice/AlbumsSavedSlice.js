import { createSlice } from '@reduxjs/toolkit'

export const AlbumsSavedSlice = createSlice({
    name: 'albumsSaved',
    initialState: {
        albumsSaved: null,
        load: false
    },
    reducers: {
        SET_ALBUMS_SAVED: ( state, action ) => {
            state.albumsSaved = action.payload.albumsSaved
            state.load = false
        },
        SET_lOADING_ALBUMS_SAVED: ( state, action ) => {
            state.load = true
        }
    }
})

export const { SET_ALBUMS_SAVED, SET_lOADING_ALBUMS_SAVED } = AlbumsSavedSlice.actions;

export default AlbumsSavedSlice.reducer;