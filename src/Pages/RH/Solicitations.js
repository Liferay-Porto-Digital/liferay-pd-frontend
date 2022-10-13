import React from "react";

import "./Solicitations.css";
import HeaderRH from "../../Components/LayoutRH/HeaderRH";
import TitleInfoGlobalRH from "../../Components/TitleGlobal/TitleInfoGlobalRH";
import homeRHFeedInfo from "../../Infos/home-RH-feed-info";
import HomeRHFeedCard from "../../Components/CardsUser/HomeRHFeedCard";
import sidebarInfo from "../../Infos/sidebarRH-info";
import SidebarHomeRH from "../../Components/SideBars/HomeRHSideBar";
import Footer from "../../Components/layout/Footer";

function Solicitations() {
    //função trocar os options do select

    const Btn_all = () => {
        var select = document.getElementById("select-order-solicitation");
        var opt = ['Mais recentes','Mais antigas','Colaborador','Instituição'];
        select.replaceChildren();
        opt.forEach(function (element,chave){
            select.appendChild(new Option(element,chave))
            
        })
    }

    const Btn_donate = () => {
        var select = document.getElementById("select-order-solicitation");
        var opt = ['Maior valor','Menor valor'];
        select.replaceChildren();
        opt.forEach(function (element,chave){
            select.appendChild(new Option(element,chave))
            
        })
    }

    const Btn_activite = () => {
        var select = document.getElementById("select-order-solicitation");
        var opt = ['Mais horas','Menos horas'];
        select.replaceChildren();
        opt.forEach(function (element,chave){
            select.appendChild(new Option(element,chave))
            
        })
    }
    var mdate = new Date();
    return(
        <div className="home-user-container overflow-scroll">
            <HeaderRH/>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-10 center-container-home">
                            <TitleInfoGlobalRH titleevpmain={"SOLICITAÇÕES"}/>
                            <div className="filter-institution-container">
                            <input type="search" id="search-institution" placeholder="Search" name="search"/>
                            <span id="text-info-custom">ordenar</span>
                            <select className="form-select" id="select-order-solicitation" name="selectFilterInstitution">
                                <option value="1" selected >Mais recentes</option>
                                <option value="2">Mais antigas</option>
                                <option value="3">Colaborador</option>
                                <option value="3">Instituição</option>
                                <option value="3">Doações</option>
                                <option value="3">Atividades</option>
                                <option value="3">Doações</option>
                            </select>
                            <button className="btn btn-primary" id="btn-solicitation-all" onClick={()=>{Btn_all()}}>Filtrar</button>
                        </div>
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

export default Solicitations;
