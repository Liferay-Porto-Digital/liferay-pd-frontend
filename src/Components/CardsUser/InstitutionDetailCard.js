import React from "react";

function InstitutionDetailCard(props) {
    return(
        <div key={props.id} className="card card-institute-detail-border">
            <div className="row">
                <div className="col-sm-2">
                    <div className="card card-institute-detail-border">
                        <div className="card-body">
                            <img className="avatar-card avatar-card-institute-detail" src={props.avatar} alt="avatar"/><br/>
                            <h5 className="card-title title-card-institute-detail">{props.username}</h5>
                            <span className="card-text text-card-institute-detail">{props.userjob}</span><br/>
                            <span className="card-text text-card-institute-detail text-size-institute-detail">{props.dateinst}</span>
                        </div>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-sm-6">
                    <div className="card card-institute-detail-border">
                        <div className="card-body">
                            <img className="img-fluid card-img-bottom image-bottom-card-institute-detail" src={props.img} alt="image card"/>
                        </div>
                    </div>
                </div>
                <div className="col-sm-6">
                    <div className="card card-institute-detail-border">
                        <div className="card-body">
                            <h5 className="card-title title-card-institute-detail">{props.nameinst}</h5>
                            <span className="card-text text-card-institute-detail">{props.phone}</span><br/>
                            <span className="card-text text-card-institute-detail">{props.email}</span><br/>
                            <span className="card-text text-card-institute-detail">{props.street}</span><br/>
                            <span className="card-text text-card-institute-detail">{props.city}</span><br/><p/>
                            <h5 className="card-title title-card-institute-detail">{props.titledonate} - {props.donateds}</h5>
                            <span className="card-text text-card-institute-detail">{props.instdate}</span><br/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default InstitutionDetailCard;