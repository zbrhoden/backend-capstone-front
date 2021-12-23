import React from "react"
import { Route } from "react-router-dom"
import { Register } from "./auth/Register"
import { DiscountList } from "./discount/DiscountList"
import { DiscountForm } from "./discount/DiscountForm"

export const ApplicationViews = () => {
    return <>
        <Route path="/register">
            <Register />
        </Route>
        <Route exact path="/discounts">
            <DiscountList />
        </Route>
        <Route exact path="/discounts/new">
                <DiscountForm />
        </Route>
    </>
}