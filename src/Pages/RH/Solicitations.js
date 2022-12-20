import React, { useEffect, useState } from "react";
import "./Solicitations.css";
import HeaderRH from "../../Components/LayoutRH/HeaderRH";
import titleGlobalInfo from "../../Infos/title-info-global";
import TitleInfoGlobal from "../../Components/TitleGlobal/TitleInfoGlobal";
import HomeRHFeedCard from "../../Components/CardsUser/HomeRHFeedCard";
import sidebarInfo from "../../Infos/sidebarRH-info";
import SidebarHomeRH from "../../Components/SideBars/HomeRHSideBar";
import Footer from "../../Components/layout/Footer";
import { get } from "../../Components/Integration/API";
import PacmanLoader from 'react-spinners/PacmanLoader';

function Solicitations() {
    const mdate = new Date();
    const [input, setInput] = useState();
    const [dropdown, setDropdown] = useState(1);
    const [integrate, setIntegrate] = useState();
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setLoading(false);
        editDropdown();
    }, [dropdown]);

    function searchBtn() {
        const getParam = async (path) => {
            const connectAPI = await fetch(`https://evp-api.herokuapp.com/api/v1/solicitations/institution/${path}`)
            const data = await connectAPI.json()
            return data;
        };
        getParam(input).then((response) => {
            console.log(response)
            setIntegrate(response);
        })
    }

    const editDropdown = d => {
        if (dropdown == 1) {
            get("solicitation/recent").then((response) => {
                setIntegrate(response);
            })
        }
        if (dropdown == 2) {
            get("solicitation/older").then((response) => {
                setIntegrate(response);
            })
        }
        if (dropdown == 3) {
            get("solicitation/donation").then((response) => {
                setIntegrate(response);
            })
        }
        if (dropdown == 4) {
            get("solicitation/activity").then((response) => {
                setIntegrate(response);
            })
        }
    }

    return(
        <div className="home-user-container overflow-scroll">
            <HeaderRH/>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-10 center-container-home">
                    <div className="title-global-info-container">
                                {titleGlobalInfo.map((info) =>
                                    <TitleInfoGlobal
                                        titleevpmain={"SOLICITAÇÕES"}
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
                                <input type="search" id="search-institution" placeholder="Buscar por Nome de Instituição" name="search" value={input} onChange={e => setInput(e.target.value)}/>
                                <button className="btn btn-primary" id="btn-filter-institution" onClick={searchBtn}>Buscar</button>
                                <form onSubmit={editDropdown}>
                                    <select className="form-select" id="select-order-solicitation" name="selectFilterInstitution" value={dropdown} onChange={text => setDropdown(text.target.value)}>
                                        <option value="1" selected >Mais recentes</option>
                                        <option value="2">Mais antigas</option>
                                        <option value="3">Doações</option>
                                        <option value="4">Atividades</option>
                                    </select>
                                </form>
                            </div>
                        <div className="feed-home-container">
                            {
                            
                            loading ?

                            <PacmanLoader
                            color="#36d7b7"
                            cssOverride={{
                            marginLeft: 100
                            }}
                            />
                            
                            :
                                                        
                            integrate?.map((info) =>
                                <HomeRHFeedCard
                                    username={info.collaborator.name}
                                    userjob={info.collaborator.jobRole}
                                    nameinst={info.institution.name}
                                    dateinst={"Data Ação: " + info.dateOfEvent}
                                    optionConcession = {(info.type==="donation") ? "Doação no valor de "+ info.value+" reais": "Atividade de "+info.value+" horas"}
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
