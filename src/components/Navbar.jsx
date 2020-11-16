import React from 'react'
import {Link, NavLink} from 'react-router-dom'

const Navbar = () => {
    return (
        <div className="navbar navbar-dark bg-dark">
            <Link to="/" className="navbar-brand">Brastlewark</Link>
            <div>
                <div className="d-flex">
                    <NavLink className="btn btn-dark mr-2" to="/" exact>
                        Home
                    </NavLink>
                    <NavLink className="btn btn-dark mr-2" to="/gnomes">
                        Gnomes List
                    </NavLink>
                </div>
            </div>
        </div>
    )
}

export default Navbar