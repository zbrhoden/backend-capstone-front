import React from "react"
import { Route } from "react-router-dom"
import { Register } from "./auth/Register"

export const ApplicationViews = () => {
    return <>
        <Route path="/register">
            <Register />
        </Route>
    </>
}