import { createBrowserRouter } from "react-router-dom";
import Main from "../Main/Main";
import Home from "../Home/Home/Home";
import Login from "../Login/Login";
import SignUp from "../SignUp/SignUp";
import Blog from "../Blog/Blog";
import ErrorPage from "../ErrorPage/ErrorPage";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element:<Home></Home>
            },
            {
                path: 'login',
                element:<Login></Login>
            },
            {
                path: 'register',
                element:<SignUp></SignUp>
            },
            {
                path: 'blog',
                element:<Blog></Blog>
            },
            {
                path: '*',
                element:<ErrorPage></ErrorPage>
            }
        ]
    }
])

export default router;