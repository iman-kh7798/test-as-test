import React from "react";
import App from "./client/App";
import Home from "./client/Components/Home";
import UsersList from "./client/Components/UsersList";
import NotFoundPage from "./client/Components/NotFoundPage";
import AdminsList from "./client/Components/AdminsList";
export default [
    {
        ...App,
        routes:[
            {
                ...Home,
                path:'/',
                exact:true
            },
            {
                ...UsersList,
                path: '/users'
            },
            {
                ...AdminsList,
                path: '/admins'
            },
            {
                ...NotFoundPage
            }
        ]
    }
]