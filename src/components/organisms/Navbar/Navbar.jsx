import { useDispatch, useSelector } from 'react-redux';
import { NavBarChoise } from '../../molecules/NavBarChoise/NavBarChoise';
import { Home, Search, LibraryMusicOutlined } from '@mui/icons-material';
import { useEffect, useState } from 'react';
import { getAlbumsSaved_thunks } from '../../../store/thunks/albums-saved-thunks';
import './Navbar.scss'
import { NavBarCard } from '../../molecules/NavBarCard/NavBarCard';
import { getPlaylistsSaved_thunks } from '../../../store/thunks/playlist-saved-thunks';
import { Button } from '../../atoms/button';
import { getArtists_thunks } from '../../../store/thunks/artists-thunks';

export const Navbar = () => {
    const dispatch = useDispatch();
    
    const {albumsSaved} = useSelector((state) => state.albumsSaved);
    const {playlistSaved} = useSelector((state) => state.playlistsSaved);
    const {artists} = useSelector((state) => state.artists);

    const [filterCategory, setFilterCategory] = useState('x')
    const [closeNavBar, setCloseNavBar] = useState(JSON.parse(localStorage.getItem('closeNavBar')))
    
    localStorage.setItem('closeNavBar', closeNavBar)

    useEffect(() => {
        dispatch( getAlbumsSaved_thunks() );
    }, [dispatch]);
    
    useEffect(() => {
        dispatch( getArtists_thunks() );
    }, [dispatch]);
    
    useEffect(() => {
        dispatch( getPlaylistsSaved_thunks() );
    }, [dispatch]);
    

    const handleCloseNavBar = async() => {
        await closeNavBar ? setCloseNavBar(false) : setCloseNavBar(true)
    }

    const handleFilterCategory = (category) => {
        setFilterCategory(category)
    }
    
    return (
        <nav className={`navbar ${ closeNavBar ? '--closeNavBar' : '' }`}>
            
            <div className={`navbar__menu ${ closeNavBar ? '--closeNavBar' : '' }`}>
                <NavBarChoise title='Inicio' Icon={<Home/>} link='/home' closeNavBar={closeNavBar}/>
                <NavBarChoise title='Buscar' Icon={<Search/>} link='/perfil' closeNavBar={closeNavBar}/>
            </div> 
            
            <div className={`navbar__library ${ closeNavBar ? '--closeNavBar' : '' }`}>
                
                <NavBarChoise
                    className='--nav-library'
                    title='Tu biblioteca' 
                    Icon={<LibraryMusicOutlined />} 
                    onclick={handleCloseNavBar}
                    closeNavBar={closeNavBar}
                />
                {!closeNavBar &&
                    <div className='navbar__content-buttons-filters'>
                        {
                            (filterCategory !== 'x') && <Button className='--remove-filter' onClick={() => handleFilterCategory('x')}>x</Button>
                        }
                        {
                            (filterCategory === 'x' || filterCategory === 'Playlists') && <Button onClick={() => handleFilterCategory('Playlists')}>Playlists</Button>
                        }
                        {
                            (filterCategory === 'x' || filterCategory === 'Artistas') && <Button onClick={() => handleFilterCategory('Artistas')}>Artistas</Button>
                        }
                        {
                            (filterCategory === 'x' || filterCategory === 'Albumes') && <Button onClick={() => handleFilterCategory('Albumes')}>Albumes</Button>
                        }
                    </div>
                }

                <ul>
                    <div className={`navbar__content-library ${ closeNavBar ? '--closeNavBar' : '' }`}>
                        {
                            (filterCategory === 'x' || filterCategory === 'Albumes') && albumsSaved?.items?.map( item => (
                                <NavBarCard 
                                    key={item.album.id} 
                                    id={item.album.id}
                                    image={item.album.images[2].url}
                                    title={item.album.name}
                                    category={item.album.type}
                                    description={item.album.artists[0].name}
                                    closeNavBar={closeNavBar}
                                />
                            ))
                        }
                        {
                            (filterCategory === 'x' || filterCategory === 'Playlists') && playlistSaved?.items?.map( item => (
                                <NavBarCard 
                                    key={item?.id} 
                                    id={item?.id}
                                    image={item?.images[0]?.url}
                                    title={item?.name}
                                    category={item?.type}
                                    description={item?.owner?.display_name}
                                    closeNavBar={closeNavBar}
                                />
                            ))
                        }
                        {
                            (filterCategory === 'x' || filterCategory === 'Artistas') && artists?.map( item => (
                                <NavBarCard 
                                    key={item?.id} 
                                    id={item?.id}
                                    image={item?.images[0]?.url}
                                    title={item?.name}
                                    category={item.type}
                                    description={false}
                                    closeNavBar={closeNavBar}
                                />
                            ))
                        }
                    </div>
                </ul>

            </div>

        </nav>
    )
}