import React from "react";

import "./SidebarHomeUser.css";

function HomeUserSideBar(props) {
    const donateValue = "R$ " + props.donateValue + ".00" + " / " + props.donateMax;
    const activityValue = props.activityValue + " Hrs" + " / " + props.activityMax;

    return(
        <div className="sidebar-main-container">
            <div className="home-sidebar-container">
                <img src={props.avatar} alt="avatar" className="user-avatar-sidebar"/><br/>
                <span className="username-sidebar">{props.name}</span><br/>
                <span className="user-job-sidebar">{props.job}</span>

                <h4 id="title-evp-sidebar">{props.titleEvpYear}</h4>

                <div className="progress-element-sidebar">
                    <p>{props.titleDonate}</p>
                    <div className="progress-sidebar-container">
                        <progress max="300" value={props.donateValue}>{props.donateValue}</progress>
                    </div>
                    <p className="progress-label">{donateValue}</p>
                </div>

                <div className="progress-element-activity">
                    <p>{props.titleActivity}</p>
                    <div className="progress-sidebar-container">
                        <progress max="15" value={props.activityValue}>{props.activityValue}</progress>
                    </div>
                    <p className="progress-label">{activityValue}</p>
                </div>
            </div>
        </div>
    );
}

export default HomeUserSideBar;
