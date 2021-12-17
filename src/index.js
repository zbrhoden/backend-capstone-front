import React from "react"
import ReactDOM from "react-dom"
import { BrowserRouter as Router } from "react-router-dom"
import { Discounts } from "./components/Discounts.js"
import "./index.css"

ReactDOM.render(
    <React.StrictMode>
        <Router>
            <Discounts/>
        </Router>
    </React.StrictMode>,
    document.getElementById("root")
)