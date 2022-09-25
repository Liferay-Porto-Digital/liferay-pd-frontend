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
                                <option value="1" selected >Menos solicitações</option>
                                <option value="2">Mais solicitações</option>
                            </select>
                            <span>filtro</span>
                            <button className="btn btn-primary" id="btn-filter-institution">Minhas Instituições</button>
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
                        {/* <div className="col-md-8 center-institution">
                            <Link className="btn-add-institution" to="/addInstitution">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="38" height="38" fill="currentColor" class="bi bi-plus-circle-fill" viewBox="0 0 16 16">
                                        <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8.5 4.5a.5.5 0 0 0-1 0v3h-3a.5.5 0 0 0 0 1h3v3a.5.5 0 0 0 1 0v-3h3a.5.5 0 0 0 0-1h-3v-3z"/>
                                    </svg>
                            </Link>     
                        </div> */}
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
                            <NavLink className="btn btn-primary btn-add-institution"
                            to="/addInstitution">Adicionar Instituição</NavLink>
                        </div>
                    </div>
                </div>
            </div>
            <Footer/>
        </div>
    );
}

export default Institution;
