import React from "react";
import {NavLink} from "react-router-dom";

import "./PopupMenuForm.css";

function PopupMenuForm() {
    return(
        <div className="popup-menu-form-container">
            <ul className="list-group">
                <li className="list-group-item menu-item-form-donate">
                    <NavLink className="menu-popup-link-form" to="/formdonation">Formulário de Doações</NavLink>
                </li>
                <li className="list-group-item menu-item-form-activity">
                    <NavLink className="menu-popup-link-form" to="/formactivity">Formulário de Atividades</NavLink>
                </li>
            </ul>
        </div>
    );
}

export default PopupMenuForm;
