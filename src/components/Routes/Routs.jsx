import { createBrowserRouter } from "react-router-dom";
import Main from "../Main/Main";
import Home from "../Home/Home/Home";
import Login from "../Login/Login";
import SignUp from "../SignUp/SignUp";
import Blog from "../Blog/Blog";
import ErrorPage from "../ErrorPage/ErrorPage";
import Toys from "../Toys/Toys";
import ToyDetails from "../ToyDetails/ToyDetails";
import PrivateRoute from "./PrivateRoute";
import AddToy from "../AddToy/AddToy";
import MyToys from "../MyToys/MyToys";

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
                element: <PrivateRoute><ToyDetails></ToyDetails></PrivateRoute>,
                loader: ({ params }) => fetch(`http://localhost:5000/toys/${params.id}`)
            },
            {
                path: 'add-toy',
                element:<AddToy></AddToy>
            },
            {
                path: 'blog',
                element:<Blog></Blog>
            },
            {
                path: '/my-toys',
                element:<MyToys></MyToys>

            },
            {
                path: '*',
                element:<ErrorPage></ErrorPage>
            }
        ]
    }
])

export default router;