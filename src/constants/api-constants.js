const url = 'https://api.spotify.com/v1';

export const getUser = url + '/me';
export const getAlbumsSaved = url + '/me/albums';
export const getPlaylistSaved = url + '/me/playlists';
export const getArtists = url + '/artists';
export const getSearch = url + '/search?q=';
export const getAlbums = url + '/browse/new-releases';
export const getFeaturedPlaylists = url + '/browse/featured-playlists';
export const getPlayListById = url + '/playlists';
export const getAlbumById = url + '/albums';
export const checkSavedTrack = url + '/me/tracks/contains?ids=';
export const savedTrack = url + '/me/tracks?ids=';
export const deletedTrack = url + '/me/tracks?ids=';
