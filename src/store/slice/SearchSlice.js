import { createSlice } from '@reduxjs/toolkit'

export const searchSlice = createSlice({
    name: 'search',
    initialState: {
        search: null,
        searchLoad: false
    },
    reducers: {
        SET_SEARCH: ( state, action ) => {
            state.search = action.payload.search
            state.searchLoad = false
        },
        SET_LOAD: ( state, action ) => {
            state.searchLoad = true
        }
    }
})

export const { SET_SEARCH, SET_LOAD } = searchSlice.actions;

export default searchSlice.reducer;

