import React from "react";

import "./HomeRH.css";
import HeaderRH from "../../Components/LayoutRH/HeaderRH";
import TitleInfoGlobalRH from "../../Components/TitleGlobal/TitleInfoGlobalRH";
import homeRHFeedInfo from "../../Infos/home-RH-feed-info";
import HomeRHFeedCard from "../../Components/CardsUser/HomeRHFeedCard";
import sidebarInfo from "../../Infos/sidebarRH-info";
import SidebarHomeRH from "../../Components/SideBars/HomeRHSideBar";
import Footer from "../../Components/layout/Footer";

function HomeRH() {
    var mdate = new Date();
    return(
        <div className="home-user-container overflow-scroll">
            <HeaderRH/>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-10 center-container-home order-1 order-md-0">
                            <TitleInfoGlobalRH titleevpmain={"DOAÇÕES E ATIVIDADES VOLUNTÁRIAS"}/>
                        <div className="feed-home-container">
                            {homeRHFeedInfo.map((info) =>
                                <HomeRHFeedCard
                                    id={info.id}
                                    img={info.img}
                                    avatar={info.avatar}
                                    username={info.username}
                                    userjob={info.userjob}
                                    nameinst={info.nameinst}
                                    dateinst={info.dateinst}
                                    cityinst={info.cityinst}
                                    valor ={info.valor}
                                    atividade ={info.atividade}
                                    optionConcession = {info.optionConcession}

                                />
                            )}
                        </div>
                    </div>
                    <div className="col-md-2 sidebar-right-home">
                        <div className="sidebar-home-container">
                            {sidebarInfo.map((info) =>
                                <SidebarHomeRH
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

export default HomeRH;
