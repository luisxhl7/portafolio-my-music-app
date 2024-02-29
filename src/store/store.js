import { configureStore } from "@reduxjs/toolkit";
import userReducer from './slice/UserSlice'
import tokenReducer from './slice/TokenSlice'
import albumsSavedReducer from './slice/AlbumsSavedSlice'
import playlistsSavedReducer from './slice/PlaylistsSavedSlice'
import artistsReducer from './slice/ArtistsSlice'
import albumsReducer from './slice/AlbumsSlice'
import featuredPlaylistsReducer from './slice/FeaturedPlaylistsSlice'
import searchReducer from './slice/SearchSlice'
import playlistByIdReducer from './slice/PlaylistByIdSlice'
import albumByIdReducer from './slice/AlbumByIdSlice'
import playerReducer from './slice/PlayerSlice'

export default configureStore({
    reducer: {
        user: userReducer,
        token: tokenReducer,
        albumsSaved: albumsSavedReducer,
        playlistsSaved: playlistsSavedReducer,
        artists: artistsReducer,
        albums: albumsReducer,
        featuredPlaylists: featuredPlaylistsReducer,
        search: searchReducer,
        playlistById: playlistByIdReducer,
        albumById: albumByIdReducer,
        player: playerReducer,
    }
})
