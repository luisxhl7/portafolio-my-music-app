import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Home, Search, LibraryMusicOutlined } from '@mui/icons-material'
import { getPlaylistsSaved_thunks } from '../../../store/thunks/playlist-saved-thunks'
import { getAlbumsSaved_thunks } from '../../../store/thunks/albums-saved-thunks'
import { getArtists_thunks } from '../../../store/thunks/artists-thunks'
import { NavBarCard } from '../../molecules/NavBarCard'
import { NavBarChoise } from '../../molecules/NavBarChoise'
import { Button } from '../../atoms/button'
import './Navbar.scss'

export const Navbar = () => {
    const dispatch = useDispatch();
    
    const {albumsSaved, loadAlbumSaved} = useSelector((state) => state.albumsSaved);
    const {playlistSaved} = useSelector((state) => state.playlistsSaved);
    const {artists} = useSelector((state) => state.artists);

    const [filterCategory, setFilterCategory] = useState(sessionStorage.getItem('filterCategory'))
    const [closeNavBar, setCloseNavBar] = useState(window.innerWidth < 768 ? true : JSON.parse(sessionStorage.getItem('closeNavBar')))
    
    !filterCategory ? setFilterCategory('x') : sessionStorage.setItem('filterCategory', filterCategory);
    sessionStorage.setItem('closeNavBar', closeNavBar)

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
            
            <ul className={`navbar__menu ${ closeNavBar ? '--closeNavBar' : '' }`}>
                <NavBarChoise title='Inicio' Icon={<Home/>} link='/home' closeNavBar={closeNavBar}/>
                <NavBarChoise title='Buscar' Icon={<Search/>} link='/search' closeNavBar={closeNavBar}/>
            </ul> 
            
            <div className={`navbar__library ${ closeNavBar ? '--closeNavBar' : '' }`}>
                <ul>
                    <NavBarChoise
                        className='--nav-library'
                        title='Tu biblioteca' 
                        Icon={<LibraryMusicOutlined />} 
                        onclick={handleCloseNavBar}
                        closeNavBar={closeNavBar}
                    />
                </ul>
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
                            (filterCategory === 'x' || filterCategory === 'Albumes') && <Button onClick={() => handleFilterCategory('Albumes')}>Álbumes</Button>
                        }
                    </div>
                }

                <ul className={`navbar__content-library ${ closeNavBar ? '--closeNavBar' : '' }`}>
                    {
                        (filterCategory === 'x' || filterCategory === 'Albumes') && 
                        <>
                            {loadAlbumSaved ?
                                Array.from({ length: 5 }, (_, index) => (
                                    <NavBarCard
                                        key={index}
                                        closeNavBar={closeNavBar}
                                        load={loadAlbumSaved}
                                    />
                                ))
                                :
                                albumsSaved?.items?.map( item => (
                                    <NavBarCard 
                                        key={item.album.id} 
                                        id={item.album.id}
                                        image={item.album.images[2].url}
                                        title={item.album.name}
                                        category={item.album.type}
                                        description={item.album.artists[0].name}
                                        closeNavBar={closeNavBar}
                                        typeUrl={'album'}
                                    />
                                ))
                            }
                        </> 
                    }
                    {
                        (filterCategory === 'x' || filterCategory === 'Playlists') && 
                        
                        <>
                            {loadAlbumSaved ?
                                Array.from({ length: 5 }, (_, index) => (
                                    <NavBarCard
                                        key={index}
                                        closeNavBar={closeNavBar}
                                        load={loadAlbumSaved}
                                    />
                                ))
                                :
                                playlistSaved?.items?.map( item => (
                                    <NavBarCard 
                                        key={item?.id} 
                                        id={item?.id}
                                        image={item?.images[0]?.url}
                                        title={item?.name}
                                        category={item?.type}
                                        description={item?.owner?.display_name}
                                        closeNavBar={closeNavBar}
                                        typeUrl={'playlist'}
                                    />
                                ))
                            }
                        </>
                    }
                    {
                        (filterCategory === 'x' || filterCategory === 'Artistas') && 
                        
                        <>
                            {loadAlbumSaved ?
                                Array.from({ length: 5 }, (_, index) => (
                                    <NavBarCard
                                        key={index}
                                        closeNavBar={closeNavBar}
                                        load={loadAlbumSaved}
                                    />
                                ))
                                :
                                artists?.map( item => (
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
                        </>
                    }
                </ul>

            </div>

        </nav>
    )
}