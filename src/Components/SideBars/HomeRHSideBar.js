import React, { useEffect, useState } from "react";
import { get } from "../Integration/API"

function HomeRHSideBar(props) {

    const [summary, setSummary] = useState();
    
    useEffect(() => {
        get('report').then((response) => {
            setSummary(response);
        });
    }, []);
    
    const donateValue = "R$ " + summary?.amountDonated + ".00" + " / " + "R$ "  + 1000;
    const activityValue =  summary?.amountDoneActivity + " Hrs" + " / " + 40 + " Hrs";


    return(
        <div className="home-sidebar-container">
            <div className="home-sidebar">
                <img src={props.avatar} alt="avatar" className="user-avatar-side-home"/><br/>
                <span className="username-sidebar-home">{props.name}</span><br/>
                <span className="user-job-sidebar-home">{props.job}</span>

                <h4 id="title-evp-year">{props.titleEvpYear}</h4>

                <div className="progress-element-donate">
                    <p>{props.titleDonate}</p>
                    <p className="progress-label">{donateValue}</p>
                </div>

                <div className="progress-element-activity">
                    <p>{props.titleActivity}</p>
                    <p className="progress-label">{activityValue}</p>
                </div>
            </div>
        </div>
    );
}

export default HomeRHSideBar;