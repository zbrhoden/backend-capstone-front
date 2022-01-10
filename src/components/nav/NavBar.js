import React from "react"
import { Link, useHistory} from "react-router-dom"
import "./NavBar.css"

export const NavBar = () => {
    const history = useHistory()
    return (
        
        <nav className="navbar">
            <h1 className="NavBar-brand">Discounts Manager</h1>
            <li className="navbar__item">
                <Link style={{ textDecoration: 'none' }} className="nav-link" to="/discounts/new">Create Discounts</Link>
            </li>
            <li className="navbar__item">
                <Link style={{ textDecoration: 'none' }} className="nav-link" to="/discounts">Discounts</Link>
            </li>
            <li className="navbar__item">
                <Link style={{ textDecoration: 'none' }} className="nav-link" to="/stores/new">Register New Store</Link>
            </li>
            <li className="navbar__item">
                <Link style={{ textDecoration: 'none' }} className="nav-link" to="/stores">Store List</Link>
            </li>
            {
                (localStorage.getItem("token") !== null) ?
                    <li className="nav-item">
                        <button className="nav-link fakeLink"
                            onClick={() => {
                                localStorage.removeItem("token")
                                history.push({ pathname: "/login" })
                            }}
                        >Logout</button>
                    </li> :
                    <>
                        <li className="nav-item">
                            <Link className="nav-link" to="/login">Login</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/register">Register</Link>
                        </li>
                    </>
            }        </nav>
    )
}