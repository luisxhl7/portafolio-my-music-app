import { createSlice } from '@reduxjs/toolkit'

export const albumByIdSlice = createSlice({
    name: 'album',
    initialState: {
        album: null,
        albumLoad: false,
    },
    reducers: {
        SET_ALBUM: ( state, action ) => {
            state.album = action.payload.album
            state.albumLoad = false
        },
        SET_LOAD: ( state, action ) => {
            state.albumLoad = true
        }
    }
})

export const { SET_ALBUM, SET_LOAD } = albumByIdSlice.actions;

export default albumByIdSlice.reducer;