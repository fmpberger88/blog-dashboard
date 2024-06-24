import { NavLink, useNavigate } from 'react-router-dom';
import styles from './Header.module.css';

const Header = () => {
    const navigate = useNavigate();
    const token = localStorage.getItem('token');

    // Delete JWT Token
    const handleLogout = () => {
        localStorage.removeItem('token');
        navigate('/login');
    };

    return (
        <header className={styles.headerContainer}>
            <nav>
                <ul>
                    <div>
                        <li><NavLink to="/blogs">Blogs</NavLink></li>
                        <li><NavLink to="/create-blog">Create Blog</NavLink></li>
                    </div>
                    <div>
                    {!token ? (
                        <>
                            <li><NavLink to="/login">Login</NavLink></li>
                            <li><NavLink to="/register">Register</NavLink></li>
                        </>
                    ) : (
                        <li><button onClick={handleLogout}>Logout</button></li>
                    )}
                    </div>
                </ul>
            </nav>
        </header>
    )
};

export default Header;