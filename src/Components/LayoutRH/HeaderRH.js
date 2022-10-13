import React from "react";
import {NavLink} from "react-router-dom";

import "../LayoutRH/HeaderRH";
import logo from "./../../images/ic_liferay_white.png";
import ModalMenuRH from "../ModalMenuRH";

function HeaderRH() {
    return (
        <div className="header-user-container">
            <header className="header-user">
                <nav className="navbar navbar-expand-lg navbar-light bg-light">
                    <div className="container-fluid">
                        <NavLink className="link-icon-liferay-header-use" to="/">
                            <img id="icon-liferay-header-use" src={logo} alt="icon"/>
                        </NavLink>
                        <div id="responsive-menu">
                            <ModalMenuRH/>
                        </div>
                        <div className="collapse navbar-collapse" id="navbarNav">
                            <ul className="navbar-nav">
                                <li className="nav-item">
                                    <NavLink className="nav-link" to="/admin">Home</NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink className="nav-link" to="/solicitations">Solicitações</NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink className="nav-link" to="/report">Relatórios</NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink className="nav-link" to="/home">Colaborador</NavLink>
                                </li>
                            </ul>
                        </div>
                        <a className="nav-link" to="/">Sair</a>
                    </div>
                </nav>
            </header>
        </div>
    )
}
export default HeaderRH;
