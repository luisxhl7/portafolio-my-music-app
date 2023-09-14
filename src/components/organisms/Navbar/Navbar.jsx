import { Link, NavLink, useNavigate } from 'react-router-dom';


export const Navbar = () => {

    const navigate = useNavigate();

    const onLogout = () => {
        localStorage.clear()
        navigate('/login', {
            replace: true
        });
    }

    return (
        <nav>        
            <Link 
                to="/"
            >
                Spotify
            </Link>

            <div>

                <NavLink 
                    to="/perfil"
                >
                    perfil
                </NavLink>

                <NavLink 
                    to="/favoritos"
                >
                    favoritos
                </NavLink>
                
                <NavLink 
                    to="/playlist"
                >
                    playlist
                </NavLink>

            </div>

            <div>
                <button
                    onClick={ onLogout }
                >
                    cerrar sesion
                </button>
            </div>
        </nav>
    )
}