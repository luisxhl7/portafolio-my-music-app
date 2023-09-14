import { createSlice } from '@reduxjs/toolkit'

export const userSlice = createSlice({
    name: 'user',
    initialState: {
        user: null,
        load: false
    },
    reducers: {
        SET_USER: ( state, action ) => {
            state.user = action.payload.user  // dispatch(SET_USER({name: 'luis'}))
            state.load = false
        },
        SET_LOADING: ( state, action ) => {
            state.load = true
        }
    }
})

export const { SET_USER, SET_LOADING } = userSlice.actions;

export default userSlice.reducer;

