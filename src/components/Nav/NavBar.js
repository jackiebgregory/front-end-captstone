import React from "react"
import { Link } from "react-router-dom"
import "./NavBar.css"

export const NavBar = (props) => {
    return (
        <ul className="topnav">
            <li className="navbar__item">
                <Link className="navbar__link" to="/">Home</Link>
            </li>
            <li className="navbar__item">
                <Link className="navbar__link" to="/myBooks">My Books</Link>
            </li>
            <li className="navbar__item">
                <Link className="navbar__link" to="/logOut">Log Out</Link>
            </li>
        </ul>
    )
}
