import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { get } from "../../Components/Integration/API"
import "./RegisterActivity.css";
import HeaderUser from "../../Components/LayoutUser/HeaderUser";
import titleGlobalInfo from "../../Infos/title-info-global";
import TitleInfoGlobal from "../../Components/TitleGlobal/TitleInfoGlobal";
import RegisterActivityCard from "../../Components/CardsUser/RegisterActivityCard";
import sidebarInfo from "../../Infos/sidebar-info";
import SidebarHomeUser from "../../Components/SideBars/HomeUserSideBar";
import Footer from "../../Components/layout/Footer";

function RegisterActivity() {
    const mdate = new Date();
    const [summary, setSummary] = useState();
    
    useEffect(() => {
      get('form').then((response) => {
          setSummary(response);
      });
    }, []);
  
    return(
        <div className="register-activity-container overflow-scroll">
            <HeaderUser/>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-10 center-register-activity">
                        <div className="title-global-info-container">
                            {titleGlobalInfo.map((info) =>
                                <TitleInfoGlobal
                                    titleevpmain="REGISTRO DE AÇÕES"
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
                        <div className="feed-activity-container">
                            {summary?.map((info) =>
                                <RegisterActivityCard
                                    id={info.id}
                                    name={info.institution.name}
                                    phone={"Telefone: " + info.institution.phoneNumber}
                                    city={"Cidade: " + info.institution.city}
                                    activityValue={(info.type==="donation") ? "Doação no valor de "+ info.value+" reais": "Atividade de "+info.value+" horas"}
                                    activityText={info.activityText}
                                    activityDate={"Ação feita em " + info.dateOfEvent}
                                    activityState={info.activityState}
                                />
                            )}
                        </div>
                    </div>
                    <div className="col-md-2 sidebar-right-register-activity">
                        <div className="sidebar-activity-container">
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
                        <div className="button-new-activity-container">
                            <NavLink className="btn btn-primary button-new-register-activity" to="/formactivity">Criar nova atividade</NavLink>
                        </div>
                    </div>
                </div>
            </div>
            <Footer/>
        </div>
    );

}

export default RegisterActivity;
