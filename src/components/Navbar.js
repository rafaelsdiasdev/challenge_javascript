import React from 'react'
import { NavLink } from 'react-router-dom'

export default function NavBar() {

        return (
            <div>
                <nav className="navbar navbar-light bg-light d-flex justify-content-center bg-navbar fixed-top">
                    <NavLink to="/"><img style={{ width: "80px" }} src="../img/provi.png" alt="Provi"></img></NavLink>
                    <form className="form-inline">
                    </form>
                </nav>
            </div>
        )
}


