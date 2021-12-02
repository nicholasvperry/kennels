import React from "react"
import { Link } from "react-router-dom"
import "./NavBar.css"


//each link changes from web address to web address/location or address/animals
//Navbar just changes the web address route
export const NavBar = (props) => {
    return (
        <ul className="navbar">
            <li className="navbar__item active">
                <Link className="navbar__link" to="/">NSS Kennels</Link>
            </li>
            <li className="navbar__item">
                <Link className="navbar__link" to="/locations">Locations</Link>
            </li>
            <li className="navbar__item">
                <Link className="navbar__link" to="/animals">Animals</Link>
            </li>
            <li className="navbar__item">
                <Link className="navbar__link" to="/customers">Customers</Link>
            </li>
            <li className="navbar__item">
                <Link className="navbar__link" to="/employees">Employees</Link>
            </li>
        </ul>
    )
}
