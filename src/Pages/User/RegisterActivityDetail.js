import React, { useContext } from "react";

import "./RegisterActivityDetail.css";
import HeaderUser from "../../Components/LayoutUser/HeaderUser";
import { ModelContext } from "../../Components/ModelContext";
import homeUserFeedInfo from "../../Infos/home-user-feed-info";
import registerActivityInfo from "../../Infos/register-activity-info";
import RegisterActivityDetailCard from "../../Components/CardsUser/RegisterActivityDetailCard";
import sidebarInfo from "../../Infos/sidebar-info";
import SidebarHomeUser from "../../Components/SideBars/HomeUserSideBar";
import Footer from "./../../Components/layout/Footer";

function RegisterActivityDetail() {
    const mdate = new Date();
    const {context, setContext} = useContext(ModelContext);

    return(
        <div className="register-detail-container overflow-scroll">
            <HeaderUser/>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-10 register-detail-center-container">
                        <div className="register-detail-card-container">
                            {
                                <RegisterActivityDetailCard
                                    id={registerActivityInfo[context].id}
                                    img={registerActivityInfo[context].img}
                                    avatar={homeUserFeedInfo[context].avatar}
                                    username={homeUserFeedInfo[context].username}
                                    userjob={homeUserFeedInfo[context].userjob}
                                    dateinst={homeUserFeedInfo[context].dateinst}
                                    name={registerActivityInfo[context].name}
                                    phone={registerActivityInfo[context].phone}
                                    city={registerActivityInfo[context].city}
                                    activityText={registerActivityInfo[context].activityText}
                                    activityValue={registerActivityInfo[context].activityValue}
                                    activityDate={registerActivityInfo[context].activityDate}
                                />
                            }
                        </div>
                    </div>
                    <div className="col-md-2 register-detail-card-sidebar-right">
                        <div className="register-detail-card-sidebar-container">
                            {sidebarInfo.map((info) =>
                                <SidebarHomeUser
                                    avatar={info.avatar}
                                    name={info.name}
                                    job={info.job}
                                    titleEvpYear={info.titleEvpYear +" "+ mdate.getFullYear()}
                                    titleDonate={info.titleDonate}
                                    donateValue={info.donateValue}
                                    donateMax={info.donateMax}
                                    titleActivity = {info.titleActivity}
                                    activityValue={info.activityValue}
                                    activityMax={info.activityMax}
                                />
                            )}
                        </div>
                    </div>
                </div>
            </div>
            <Footer/>
        </div>
    );
}

export default RegisterActivityDetail;