import { createBrowserRouter } from "react-router-dom";
import Blog from "../../Blog/Blog";
import Course from "../../Courses/Course/Course";
import CourseDetails from "../../Courses/CourseDetails/CourseDetails";
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
            },
            {
                path:'/courses',
                element:<Course></Course>,
                loader:()=> fetch('http://localhost:5000/courses')
            },
            {
                path:'/courses/:id',
                element:<CourseDetails></CourseDetails>,
                loader:({params}) => fetch (`http://localhost:5000/courses/${params.id}`)
            }
        ]
    },
    {path: '*', element: <div className="text-primary"><h1>Opps!!.This route not found: 404</h1></div>}
])