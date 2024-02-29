import { createSlice } from '@reduxjs/toolkit'

export const playerSlice = createSlice({
    name: 'player',
    initialState: {
        player: null,
        playerLoad: false,
    },
    reducers: {
        SET_PLAYER: ( state, action ) => {
            state.player = action.payload.player
            state.playerLoad = false
        },
        SET_LOAD: ( state, action ) => {
            state.playerLoad = true
        }
    }
})

export const { SET_PLAYER, SET_LOAD } = playerSlice.actions;

export default playerSlice.reducer;