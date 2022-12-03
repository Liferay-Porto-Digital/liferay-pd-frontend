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
    const [input, setInput] = useState();    
    const [dropdown, setDropdown] = useState(1);
    const [integrate, setIntegrate] = useState();
    
    useEffect(() => {
        editDropdown();
        // get("institution").then((response) => {
        //     setIntegrate(response);
        // })
    }, [dropdown]);
    function searchBtn() {
        const getParam = async (path) => {
            const connectAPI = await fetch(`https://evp-api.herokuapp.com/api/v1/institution/${path}`)
            const data = await connectAPI.json()
            return data;
        };
        getParam(input).then((response) => {
            console.log(response)
            setIntegrate([response]);
        })
    };

    const editDropdown = d => {
        if (dropdown == 1) {
            get("institution").then((response) => {
                setIntegrate(response);
            })
        }
        if (dropdown == 2) {
            get("institution/more-solicitation").then((response) => {
                setIntegrate(response);
            })
        }
        if (dropdown == 3) {
            get("institution/less-solicitation").then((response) => {
                setIntegrate(response);
            })
        }
    }
    
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
                            <input type="search" id="search-institution" placeholder="Name of Institution" name="search" value={input} onChange={e => setInput(e.target.value)}/>
                            <button className="btn btn-primary" id="btn-filter-institution" onClick={searchBtn}>Buscar</button>
                            <form onSubmit={editDropdown}>
                                <select className="form-select" id="select-order-institution" name="selectFilterInstitution" value={dropdown} onChange={text => setDropdown(text.target.value)}>
                                    <option value="1" selected >Todas Instituições</option>
                                    <option value="2">Mais solicitações</option>
                                    <option value="3">Menos solicitações</option>
                                </select>
                            </form>
                        </div>
                        <div className="institution-card-container">
                            {integrate?.map((info) =>
                                <InstitutionCard
                                    name={info.name}
                                    phone={"Telefone: " + info.phoneNumber}
                                    email={"Email: " + info.email}
                                    donateds={info.numberOfActionsReceived}
                                    titledonate={"Total de Ações Recebidas"}
                                    instdate={"Instituição cadstrada em " + info.dateOfCreation}
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
