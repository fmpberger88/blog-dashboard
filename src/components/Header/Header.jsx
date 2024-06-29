import { NavLink, useNavigate } from 'react-router-dom';
import styles from './Header.module.css';

const Header = () => {
    const navigate = useNavigate();
    const token = localStorage.getItem('token');

    // Delete JWT Token
    const handleLogout = () => {
        localStorage.removeItem('token');
        localStorage.removeItem('userId')
        navigate('/login');
    };

    return (
        <header className={styles.headerContainer}>
            <nav>
                <ul>
                    <div>
                        <li>
                            <NavLink to="/blogs">Blogs</NavLink>
                        </li>
                    </div>
                    <div>
                    {!token ? (
                        <>
                            <li>
                                <NavLink to="/login">Login</NavLink>
                            </li>
                            <li>
                                <NavLink to="/register">Register</NavLink>
                            </li>
                        </>
                    ) : (
                        <>
                            <li>
                                <NavLink to="/create-blog">Create Blog</NavLink>
                            </li>
                            <li>
                                <NavLink to="/user/blogs">My Blogs</NavLink>
                            </li>
                            <li>
                                <NavLink as="button" to="#" onClick={handleLogout}>Logout</NavLink>
                            </li>
                        </>
                    )}
                    </div>
                </ul>
            </nav>
        </header>
    )
};

export default Header;