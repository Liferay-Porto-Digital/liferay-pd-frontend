import React from "react";

import "./Home.css";
import HeaderUser from "./../../Components/LayoutUser/HeaderUser";
import titleGlobalInfo from "../../Infos/title-info-global";
import TitleInfoGlobal from "../../Components/TitleGlobal/TitleInfoGlobal";
import homeUserFeedInfo from "../../Infos/home-user-feed-info";
import HomeUserFeedCard from "../../Components/CardsUser/HomeUserFeedCard";
import sidebarInfo from "../../Infos/sidebar-info";
import SidebarHomeUser from "../../Components/SideBars/SidebarHomeUser";
import Footer from "./../../Components/layout/Footer";

function Home() {
    const mdate = new Date();

    return(
        <div className="home-user-container overflow-scroll">
            <HeaderUser/>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-10 center-container-home order-1 order-md-0">
                        <div className="title-global-info-container">
                            {titleGlobalInfo.map((info) =>
                                <TitleInfoGlobal
                                    titleevpmain={"DOAÇÕES E ATIVIDADES VOLUNTÁRIAS"}
                                    titledonateglobal={info.titledonateglobal}
                                    titledonatevalor={info.titledonatevalor}
                                    donatevalue={info.donatevalue}
                                    titledonatemeta={info.titledonatemeta}
                                    donatemeta={info.donatemeta}
                                    titleactivityglobal={info.titleactivityglobal}
                                    titleactivityvalor={info.titleactivityvalor}
                                    activityvalue={info.activityvalue}
                                    titleactivitymeta={info.titleactivitymeta}
                                    activitymeta={info.activitymeta}
                                />
                            )}
                        </div>
                        <div className="feed-home-container">
                            {homeUserFeedInfo.map((info) =>
                                <HomeUserFeedCard
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

export default Home;
