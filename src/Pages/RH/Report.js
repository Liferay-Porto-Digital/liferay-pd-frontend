import React from "react";
import "./Report.css";
import HeaderRH from "../../Components/LayoutRH/HeaderRH";
import titleGlobalInfo from "../../Infos/title-info-global";
import TitleInfoGlobal from "../../Components/TitleGlobal/TitleInfoGlobal";
import ReportCard from "../../Components/CardsUser/ReportCard";
import sidebarInfo from "../../Infos/sidebarRH-info";
import SidebarHomeRH from "../../Components/SideBars/HomeRHSideBar";
import Footer from "../../Components/layout/Footer";

function Report() {
    var mdate = new Date();
    return(
        <div className="home-user-container overflow-scroll">
            <HeaderRH/>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-10 center-container-home">
                    <div className="title-global-info-container">
                                {titleGlobalInfo.map((info) =>
                                    <TitleInfoGlobal
                                        titleevpmain={"RELATÓRIOS DO EVP"}
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
                                <ReportCard/>
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

export default Report;
