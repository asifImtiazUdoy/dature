import { createBrowserRouter } from "react-router-dom";
import { baseUrl } from "../../Helper/Helper";
import Main from "../../layouts/Main";
import Home from "../../page/Home/Home";
import Login from "../../page/Login/Login";
import Register from "../../page/Register/Register";

export const routes = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children:[
            {
                path: '/',
                element: <Home></Home>,
                loader: `${baseUrl}/services/limit=3`
            },
            {
                path: '/services',
                element: <Home></Home>
            },
            {
                path: '/blog',
                element: <Home></Home>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/register',
                element: <Register></Register>
            }
        ]
    },
    {
        path: '/*',
        element: "This page was not found"
    }
])