import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'

class Navbar extends Component {
    constructor(props) {
        super(props)
        this.state = {
            listOfData: this.props.listOfData
        }
    }

    render() {
        return (
            <div>
                <nav className="navbar navbar-light bg-light d-flex justify-content-center bg-navbar fixed-top">
                    <NavLink to="/"><img style={{ width: "80px" }} src="./img/provi.png"></img></NavLink>
                    <form className="form-inline">
                    </form>
                </nav>
            </div>
        )
    }

}

export default Navbar

