import React from "react"
import { Routes, Route, Navigate } from "react-router-dom"
import { ApplicationViews } from "./ApplicationViews"
import { NavBar } from "./nav/NavBar"
import { Login } from "./auth/Login"
import { Register } from "./auth/Register"

export const Discounts = () => (
    <>
        <Routes render={() => {
            if (localStorage.getItem("lu_token")) {
                return <>
                    <Routes>
                        <Route element={<NavBar />} />
                        <Route element={<ApplicationViews />} />
                    </Routes>
                </>
            } else {
                return <Navigate to="/login" />
            }
        }} />
        <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
        </Routes>
    </>
)