import React, { useContext } from "react";
import {useNavigate} from "react-router-dom";
import { ModelContext } from "../ModelContext";

function HomeRHFeedCard(props) {

    const {context, setContext} = useContext(ModelContext);
    const directDetail = useNavigate(); 
    const handlerRHregistryForm = () => {
        setContext(props.id);
        directDetail("/registryForm");
    }      

    return(
        <div className="card mb-3">
            <div className="row g-0  ">
                <div className="col-md-5 align-self-center">
                    <div className="card-body card-body-home">
                        <h5 className="card-title title-card-home">{props.nameinst}</h5>
                        <span className="card-text text-card-home">{props.dateinst}</span><br/>
                        <span className="card-text text-card-home">{props.cityinstp}</span><br/>
                    </div>
                </div>
                <div className="col-md-3 align-self-center ">
                    <h6 className="card-title title-card-info">
                        {props.optionConcession}
                    </h6>
                </div>
                <div className="col-md-2 offset-md-2">
                    <div className="card-body card-body-home">

                        <h5 className="card-title title-card-home">{props.username}</h5>
                        <span className="card-text text-card-home">{props.userjob}</span>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default HomeRHFeedCard;
