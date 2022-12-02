import React from "react";

import "./HomeRH.css";
import HeaderRH from "../../Components/LayoutRH/HeaderRH";
import titleGlobalInfo from "../../Infos/title-info-global";
import TitleInfoGlobal from "../../Components/TitleGlobal/TitleInfoGlobal";
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
                        <div className="title-global-info-container">
                                {titleGlobalInfo.map((info) =>
                                    <TitleInfoGlobal
                                        titleevpmain={"INFORMAÇÕES GERAIS EVP"}
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
                           <p className="info">Olá Administrador(a),</p>
                            <p className="info">Este portal foi preparado especialmente para que você possa ter maior
                                controle do andamento do EVP. Veja os fluxos disponíveis:</p>
                            <p className="info"> - Para realizar consultas sobre o programa se
                                dirija à aba de "Solicitações" onde dispomos de filtros e barra de pesquisa.</p>
                            <p className="info"> - Para acompanhar as métricas gerais do EVP acesse a página de
                                "Relatórios" onde também será possível exportar um arquivo excel do mesmo.</p>
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
