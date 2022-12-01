import React, {useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { get } from "../../Components/Integration/API";
import "./Institution.css";
import HeaderUser from "../../Components/LayoutUser/HeaderUser";
import titleGlobalInfo from "../../Infos/title-info-global";
import TitleInfoGlobal from "../../Components/TitleGlobal/TitleInfoGlobal";
import InstitutionCard from "../../Components/CardsUser/InstitutionCard";
import sidebarInfo from "../../Infos/sidebar-info";
import SidebarHomeUser from "../../Components/SideBars/HomeUserSideBar";
import Footer from "../../Components/layout/Footer";

function Institution() {
    const mdate = new Date();
    const input = document.querySelector('#search-institution')
    
    const [integrate, setIntegrate] = useState();
    useEffect(() => {
        get("institution").then((response) => {
            setIntegrate(response);
        })
    });

    function searchBtn() {
        const getParam = async (path) => {
            const connectAPI = await fetch(`https://evp-api.herokuapp.com/api/v1/institution/${path}`)
            const data = await connectAPI.json()
            return data;
        };
        getParam(input).then((response) => {
            setIntegrate(response);
        })
    };

    
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
                            <input type="search" id="search-institution" placeholder="Name of Institution" name="search"/>
                            <button className="btn btn-primary" id="btn-filter-institution" onClick={searchBtn()}>Buscar</button>
                            <select className="form-select" id="select-order-institution" name="selectFilterInstitution">
                                <option value="1" selected >Todas Instituições</option>
                                <option value="2">Mais solicitações</option>
                                <option value="3">Menos solicitações</option>
                            </select>
                            <button className="btn btn-primary" id="btn-filter-institution">Filtrar</button>
                        </div>
                        <div className="institution-card-container">
                            {integrate?.map((info) =>
                                <InstitutionCard
                                    name={info.name}
                                    phone={info.phoneNumber}
                                    email={info.email}
                                    donateds={info.description}
                                    titledonate={info.city}
                                    instdate={info.url}
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
