import { createBrowserRouter } from "react-router-dom";
import Main from "../Main/Main";
import Home from "../Home/Home/Home";
import Login from "../Login/Login";
import SignUp from "../SignUp/SignUp";
import Blog from "../Blog/Blog";
import ErrorPage from "../ErrorPage/ErrorPage";
import Toys from "../Toys/Toys";
import Toy from "../Toy/Toy";
import ToyDetails from "../ToyDetails/ToyDetails";

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
                path: '/toys',
                element: <Toys></Toys>,
            },
            {
                path: '/toys/:id',
                element:<ToyDetails></ToyDetails>,
                loader: ({ params }) => fetch(`http://localhost:5000/toys/${params.id}`)
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