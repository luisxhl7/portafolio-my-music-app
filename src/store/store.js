import { configureStore } from "@reduxjs/toolkit";
import userReducer from './slice/UserSlice'
import tokenReducer from './slice/TokenSlice'

export default configureStore({
    reducer: {
        user: userReducer,
        token: tokenReducer,
    }
})
