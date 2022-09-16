import React from "react";
import {NavLink} from "react-router-dom";

import "./HeaderLogin.css";
import logo from "./../../images/ic_liferay_white.png";

function Navbar() {
    return (
        <div className="header-user-container-login">
            <header className="header-user">
                <nav className="navbar navbar-expand-lg navbar-light bg-light">
                    <div className="container-fluid">
                        <NavLink className="link-icon-liferay-header-use" to="/">
                            <img id="icon-liferay-header-use" src={logo} alt="icon"/>
                        </NavLink>
                        <div className="collapse navbar-collapse" id="navbarNav"></div>
                    </div>
                </nav>
            </header>
        </div>
    );
}

export default Navbar;