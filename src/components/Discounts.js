import React from "react"
import { Route} from "react-router-dom"
import { ApplicationViews } from "./ApplicationViews"
import { NavBar } from "./nav/NavBar"
import { Login } from "./auth/Login"
import { Register } from "./auth/Register"

export const Discounts = () => (
    <>
        <Route render={() => {
            if (localStorage.getItem("token")) {
                return <>
                    <Route>
                        <NavBar />
                        {/* <ApplicationViews /> */}
                    </Route>
                </>
            } else {
                return <Route to="/login" />
            }
        }} />
        <Route path="/login">
            <Login />
        </Route>

        <Route path="/register">
            <Register />
        </Route>
    </>
)