import React from "react";

function RegisterActivityDetailCard(props) {
    return(
        <div className="card card-register-detail-border">
            <div className="row">
                <div className="col-sm-2">
                    <div className="card card-register-detail-border">
                        <div className="card-body">
                            <img className="avatar-card avatar-card-register-detail" src={props.avatar} alt="avatar"/><br/>
                            <h5 className="card-title title-card-register-detail">{props.username}</h5>
                            <span className="card-text text-card-register-detail">{props.userjob}</span><br/>
                            <span className="card-text text-card-register-detail text-size-register-detail">{props.dateinst}</span>
                        </div>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-sm-6">
                    <div className="card card-register-detail-border">
                        <div className="card-body">
                            <img className="img-fluid card-img-bottom image-bottom-card-register-detail" src={props.img} alt="image card"/>
                        </div>
                    </div>
                </div>
                <div className="col-sm-6">
                    <div className="card card-register-detail-border">
                        <div className="card-body">
                            <div className={StateColor()}></div>
                            <span className="card-text text-card-register-detail text-size-register-detail">{props.activityTitle}</span><p/>
                            <h5 className="card-title title-card-register-detail">{props.name}</h5>
                            <span className="card-text text-card-register-detail">{props.phone}</span><br/>
                            <span className="card-text text-card-register-detail">{props.city}</span><br/>
                            <span className="card-text text-card-register-detail text-size-register-detail">{props.activityText} - {props.activityValue}</span><br/>
                        </div>
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

export default RegisterActivityDetailCard;