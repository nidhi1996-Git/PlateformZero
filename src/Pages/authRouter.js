import React from "react";
import {createBrowserRouter,RouterProvider} from 'react-router-dom'
import LoginPage from "../Component/Login";
import RegistrationPage from "../Component/Registration";

const router=createBrowserRouter(
    [
        {
            path:"/login",
            element:<LoginPage/>
        },
        {
            path:"/register",
            element:<RegistrationPage/>        
        }
    ]
)

export const AuthRouter=()=>{
    return(
        <RouterProvider router={router}/>
    )
}