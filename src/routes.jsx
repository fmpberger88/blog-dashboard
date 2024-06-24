import { createBrowserRouter, Navigate } from "react-router-dom";
import Root from "./components/Root/Root.jsx";
import Blogs from "./components/Blogs/Blogs.jsx";
import Register from "./components/Register/Register.jsx";
import Login from "./components/Login/Login.jsx";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Root />,
        children: [
            {
                index: true,
                element: <Navigate to="/blogs" />
            },
            {
                path: 'blogs',
                element: <Blogs />
            },
            {
                path: 'register',
                element: <Register />
            },
            {
                path: 'login',
                element: <Login />
            }
        ]
    }
]);

export default router;