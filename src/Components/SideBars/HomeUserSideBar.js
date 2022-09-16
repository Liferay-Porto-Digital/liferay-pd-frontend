import React from "react";

function HomeUserSideBar(props) {
    const donateValue = "R$ " + props.donateValue + ".00" + " / " + props.donateMax;
    const activityValue = props.activityValue + " Hrs" + " / " + props.activityMax;

    return(
        <div className="home-sidebar-container">
            <div className="home-sidebar">
                <img src={props.avatar} alt="avatar" className="user-avatar-side-home"/><br/>
                <span className="username-sidebar-home">{props.name}</span><br/>
                <span className="user-job-sidebar-home">{props.job}</span>

                <h4 id="title-evp-year">{props.titleEvpYear}</h4>

                <div className="progress-element-donate">
                    <p>{props.titleDonate}</p>
                    <div className="progress-container">
                        <progress max="300" value={props.donateValue}>{props.donateValue}</progress>
                    </div>
                    <p className="progress-label">{donateValue}</p>
                </div>

                <div className="progress-element-activity">
                    <p>{props.titleActivity}</p>
                    <div className="progress-container">
                        <progress max="15" value={props.activityValue}>{props.activityValue}</progress>
                    </div>
                    <p className="progress-label">{activityValue}</p>
                </div>
            </div>
        </div>
    );
}

export default HomeUserSideBar;
