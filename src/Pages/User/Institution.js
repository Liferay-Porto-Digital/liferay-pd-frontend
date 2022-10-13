import React from "react";
import { NavLink } from "react-router-dom";

import "./Institution.css";
import HeaderUser from "../../Components/LayoutUser/HeaderUser";
import titleGlobalInfo from "../../Infos/title-info-global";
import TitleInfoGlobal from "../../Components/TitleGlobal/TitleInfoGlobal";
import institutionInfo from "../../Infos/institution-info";
import InstitutionCard from "../../Components/CardsUser/InstitutionCard";
import sidebarInfo from "../../Infos/sidebar-info";
import SidebarHomeUser from "../../Components/SideBars/HomeUserSideBar";
import Footer from "../../Components/layout/Footer";

function Institution() {
    const mdate = new Date();

    return(
        <div className="institution-container overflow-scroll">
            <HeaderUser/>
            <div className="container-fluid">
                <div className="row">
     
                    <div className="col-md-10 center-institution">
                        <div className="title-global-info-container">
                            {titleGlobalInfo.map((info) =>
                                <TitleInfoGlobal
                                    titleevpmain="INSTITUIÇÕES DO PROGRAMA"
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
                        <div className="filter-institution-container">
                            <input type="search" id="search-institution" placeholder="Search" name="search"/>
                            <span>ordenar</span>
                            <select className="form-select" id="select-order-institution" name="selectFilterInstitution">
                                <option value="1" selected >Minhas Instituições</option>
                                <option value="2">Mais solicitações</option>
                                <option value="2">Menos solicitações</option>
                            </select>
                            <button className="btn btn-primary" id="btn-filter-institution">Filtrar</button>
                        </div>
                        <div className="institution-card-container">
                            {institutionInfo.map((info) =>
                                <InstitutionCard
                                    id={info.id}
                                    img={info.img}
                                    name={info.name}
                                    phone={info.phone}
                                    email={info.email}
                                    donateds={info.donateds}
                                    titledonate={info.titledonate}
                                    instdate={info.instdate}
                                />
                            )}
                        </div>
                    </div>
                    <div className="col-md-2 sidebar-right-institution">
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
                        <div className="button-new-activity-container">
                            <NavLink className="btn btn-primary btn-add-institution" to="/addInstitution">Adicionar Instituição</NavLink>
                        </div>
                    </div>
                </div>
            </div>
            <Footer/>
        </div>
    );
}

export default Institution;
