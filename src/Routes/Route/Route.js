import { createBrowserRouter } from "react-router-dom";
import Blog from "../../Blog/Blog";
import Home from "../../Home/Home";
import Main from "../../Layout/Main";
import Login from "../../Login/Login/Login";
import Register from "../../Login/Register/Register";
import PrivateRoute from "../PrivateRoute/PrivateRoute";

export const routes = createBrowserRouter([
    {
        path:'/',
        element:<Main></Main>,
        children:[
            {
                path:'/home',
                element:<Home></Home>
            },
            {
                path:'/blog',
                element:<PrivateRoute><Blog></Blog></PrivateRoute>
            },
            {
                path:'/login',
                element:<Login></Login>
            },
            {
                path:'/register',
                element:<Register></Register>
            }
        ]
    }
])