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
                            <p className="info">Olá Colaborador(a),</p>
                            <p className="info">Este portal foi preparado para que você possa ter uma experiência mais
                                leve e intuitiva com o EVP. Veja os fluxos disponíveis:</p>
                            <p className="info"> - Acompanhe suas ações realizadas em "Minhas Ações"</p>
                            <p className="info"> - Cadastre ou consulte instituições no programa em "Instituições".</p>
                            <p className="info"> - Selecione e preencha o tipo de formulário em "Formulários".
                                Contamos com autocomplete a fim de facilitar o preenchimento do mesmo.</p>
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
