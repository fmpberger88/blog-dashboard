import { NavLink, useNavigate } from 'react-router-dom';

const Header = () => {
    const navigate = useNavigate();
    const token = localStorage.getItem('token');

    // Delete JWT Token
    const handleLogout = () => {
        localStorage.removeItem('token');
        navigate('/login');
    };

    return (
        <header>
            <nav>
                <ul>
                    <li><NavLink to="/blogs">Blogs</NavLink></li>
                    <li><NavLink to="/create-blog">Create Blog</NavLink></li>
                    {! token ? (
                        <>
                            <li><NavLink to="/login">Login</NavLink></li>
                            <li><NavLink to="/register">Register</NavLink></li>
                        </>
                    ) : (
                        <li><button onClick={handleLogout}>Logout</button></li>
                    )}
                </ul>
            </nav>
        </header>
    )
};

export default Header;