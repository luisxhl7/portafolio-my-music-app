import { configureStore } from "@reduxjs/toolkit";
import userReducer from './slice/UserSlice'
import tokenReducer from './slice/TokenSlice'
import albumsSavedReducer from './slice/AlbumsSavedSlice'
import playlistsSavedReducer from './slice/PlaylistsSavedSlice'
import artistsReducer from './slice/ArtistsSlice'

export default configureStore({
    reducer: {
        user: userReducer,
        token: tokenReducer,
        albumsSaved: albumsSavedReducer,
        playlistsSaved: playlistsSavedReducer,
        artists: artistsReducer,
    }
})
