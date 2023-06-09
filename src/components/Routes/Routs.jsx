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
import MyToyUpdate from "../MyToyUpdate/MyToyUpdate";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/toys',
                element: <Toys></Toys>,
            },
            {
                path: '/toys/:id',
                element: <PrivateRoute><ToyDetails></ToyDetails></PrivateRoute>,
                loader: ({ params }) => fetch(`https://assignment-11-server-beige-three.vercel.app/toys/${params.id}`)
            },
            {
                path: 'add-toy',
                element: <AddToy></AddToy>
            },
            {
                path: 'update-toy/:id',
                element: <MyToyUpdate></MyToyUpdate>
            },
            {
                path: 'blog',
                element: <Blog></Blog>
            },
            {
                path: '/my-toys',
                element: <MyToys></MyToys>

            }
        ]
    },
    {
        path: 'login',
        element: <Login></Login>
    },
    {
        path: 'register',
        element: <SignUp></SignUp>
    },
    {
        path: '*',
        element: <ErrorPage></ErrorPage>
    }
])

export default router;