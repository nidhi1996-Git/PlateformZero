import React from "react";
import {createBrowserRouter,RouterProvider} from 'react-router-dom'
import LoginPage from "./authPages/LoginPage/LoginPage";
import SignUpPage from "./authPages/SignUpPage/SignUpPage";

const router=createBrowserRouter(
    [
        {
            path:"/login",
            element:<LoginPage/>
        },
        {
            path:"/register",
            element:<SignUpPage/>        
        }
    ]
)

export const AppRouter=()=>{
    return(
        <RouterProvider router={router}/>
    )
}