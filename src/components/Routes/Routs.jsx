import { createBrowserRouter } from "react-router-dom";
import Main from "../Main/Main";
import Home from "../Home/Home/Home";
import Login from "../Login/Login";
import SignUp from "../SignUp/SignUp";

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
                path: 'sign-up',
                element:<SignUp></SignUp>
            },
            {
                path: '*',
                element:<div>4000000000004</div>
            }
        ]
    }
])

export default router;