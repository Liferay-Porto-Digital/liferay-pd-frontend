import React, { useEffect, useState } from "react";
import { get } from "../Integration/API"
import PacmanLoader from "react-spinners/BarLoader";

function HomeRHSideBar(props) {

    const [summary, setSummary] = useState();
    const [loading, setLoading] = useState(true);
    
    useEffect(() => {
        get('report').then((response) => {
            setSummary(response);
            setLoading(false);
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
                    {
                        loading ?

                        <PacmanLoader
                        color="#36d7b7"
                        cssOverride={{
                          marginLeft: 100
                        }}
                        />
                        
                        :

                        <p className="progress-label">{donateValue}</p>
                    }
                </div>

                <div className="progress-element-activity">
                    <p>{props.titleActivity}</p>
                    {
                        loading ?

                        <PacmanLoader
                        color="#36d7b7"
                        cssOverride={{
                          marginLeft: 100
                        }}
                        />
                        
                        :

                        <p className="progress-label">{activityValue}</p>
                    }
                    
                </div>
            </div>
        </div>    
    );
}

export default HomeRHSideBar;