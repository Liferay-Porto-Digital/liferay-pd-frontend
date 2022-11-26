import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { ModelContext } from "../ModelContext";

function InstitutionCard(props) {
    const {context, setContext} = useContext(ModelContext);
    const directDetail = useNavigate();

    const handlerInstituteDetail = () => {
        setContext(props.id);
        directDetail("/institutiondetail");
    }

    return(
        <div className="card mb-3">
            <div className="row g-0">
                <div className="col-md-8">
                    <div className="card-body card-body-institute">
                        <h5 className="card-title title-card-institute">{props.name}</h5>
                        <span className="card-text text-card-institute">{props.phone}</span><br/>
                        <span className="card-text text-card-institute">{props.email}</span><br/>
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="card-body card-body-institute">
                        <h5 className="card-title title-card-institute">{props.donateds}</h5>
                        <span className="card-text text-card-institute">{props.titledonate}</span><br/>
                        <span className="card-text text-card-institute">{props.instdate}</span>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default InstitutionCard;