import React from "react";

import "./TitleInfoGlobalRH.css";

function TitleInfoGlobalRH(props) {
    const mdate = new Date();
    return(
        <div className="titleRH-global-container">
            <div className="col titleRH-global-style">
                <h5 >{props.titleevpmain}</h5>
                <p className="title-global-style-year"> EVP {mdate.getFullYear()}</p>
            </div>
        </div>
    );
}

export default TitleInfoGlobalRH;
