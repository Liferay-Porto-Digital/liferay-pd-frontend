import React from "react";

function HomeDetailCard(props) {
    return(
        <div key={props.id} className="card card-home-detail-border">
            <div className="row">
                <div className="col-sm-2">
                    <div className="card card-home-detail-border">
                        <div className="card-body">
                            <img className="avatar-card avatar-card-home-detail" src={props.avatar} alt="avatar"/><br/>
                            <h5 className="card-title title-card-home-detail">{props.username}</h5>
                            <span className="card-text text-card-home-detail">{props.userjob}</span><br/>
                            <span className="card-text text-card-home-detail date-size-home-detail">{props.dateinst}</span>
                        </div>
                    </div>
                </div>
                <div className="col-sm-10">
                    <div className="card card-home-detail-border">
                        <div className="card-body"></div>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-sm-6">
                    <div className="card card-home-detail-border">
                        <div className="card-body">
                            <img className="img-fluid card-img-bottom image-bottom-card-home-detail" src={props.img} alt="image card"/>
                        </div>
                    </div>
                </div>
                <div className="col-sm-6">
                    <div className="card card-home-detail-border">
                        <div className="card-body">
                            <h5 className="card-title title-card-home-detail">{props.nameinst}</h5>
                            <span className="card-text text-card-home-detail">{props.phone}</span><br/>
                            <span className="card-text text-card-home-detail">{props.email}</span><br/>
                            <span className="card-text text-card-home-detail">{props.street}</span><br/>
                            <span className="card-text text-card-home-detail">{props.city}</span><br/><p/>
                            <h5 className="card-title title-card-home-detail">{props.titledonate} - {props.donateds}</h5>
                            <span className="card-text text-card-home-detail">{props.instdate}</span><br/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default HomeDetailCard;
