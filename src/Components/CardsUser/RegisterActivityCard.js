import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { ModelContext } from "../ModelContext";

function RegisterActivityCard(props) {
 

    return(
        <div className="card mb-3">
            <div className="row g-0 align-items-center">
                <div className="col-md-7">
                    <div className="card-body card-body-activity">
                        <h5 className="card-title title-card-activity">{props.name}</h5>
                        <span className="card-text text-card-activity">{props.phone}</span><br/>
                        <span className="card-text text-card-activity">{props.city}</span>
                    </div>
                </div>
                <div className="col-md-5">
                    <div className="card-body card-body-activity">
                        <h5 className="card-title title-card-activity">{props.activityValue}</h5>
                        <span className="card-text text-card-activity">{props.activityText}</span><br/>
                        <span className="card-text text-card-activity">{props.activityDate}</span>
                    </div>
                </div>
                <div className="col-md-2 offset-md-0">
                    <div className="card-body card-body-activity">
                        <div className={StateColor()}></div>
                        <span className="card-text text-card-activity">{props.activityTitle}</span>
                    </div>
                </div>
            </div>
        </div>
    );

    function StateColor() {
        let stateClass = "signal-state-reg-activity-"
        return stateClass += (props.activityTitle == "Concluida") ? "con":"and"
    }
}

export default RegisterActivityCard;
