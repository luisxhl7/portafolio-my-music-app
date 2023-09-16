import { createSlice } from '@reduxjs/toolkit'

export const tokenSlice = createSlice({
    name: 'token',
    initialState: {
        token: null,
        loadingToken: false
    },
    reducers: {
        SET_TOKEN: (state, action) => {
            state.token = action.payload.token
            state.token = false
        },
        SET_LOADING_TOKEN: (state, action) => {
            state.token = true
        }
    }
})

export const { SET_TOKEN,SET_LOADING_TOKEN } = tokenSlice.actions;

export default tokenSlice.reducer;