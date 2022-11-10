import { createBrowserRouter } from "react-router-dom";
import { baseUrl } from "../../Helper/Helper";
import Main from "../../layouts/Main";
import Blog from "../../page/Blog/Blog";
import Details from "../../page/Details/Details";
import Home from "../../page/Home/Home";
import Login from "../../page/Login/Login";
import MyReview from "../../page/MyReview/MyReview";
import Register from "../../page/Register/Register";
import AllServices from "../../page/Service/AllServices";
import PrivateRoutes from "../PrivateRoutes/PrivateRoutes";

export const routes = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children:[
            {
                path: '/',
                element: <Home></Home>,
                loader: async () => {
                    return fetch(`${baseUrl}/services?limit=3`);
                }
            },
            {
                path: '/services',
                element: <AllServices></AllServices>,
                loader: async () => {
                    return fetch(`${baseUrl}/services`);
                }
            },
            {
                path: '/service/:id',
                element: <Details></Details>,
                loader: ({params}) =>  fetch(`${baseUrl}/services/${params.id}`)
            },
            {
                path: '/my-reviews',
                element: <PrivateRoutes><MyReview></MyReview></PrivateRoutes>
            },
            {
                path: '/blog',
                element: <Blog></Blog>
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