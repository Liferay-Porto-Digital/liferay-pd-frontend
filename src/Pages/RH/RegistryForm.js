import React, { useContext } from "react";
import "./RegistryForm.css";
import HeaderRH from "../../Components/LayoutRH/HeaderRH";
import {ModelContext} from "../../Components/ModelContext";
import TitleInfoGlobalRH from "../../Components/TitleGlobal/TitleInfoGlobalRH";
import sidebarInfo from "../../Infos/sidebarRH-info";
import homeRHFeedInfo from "../../Infos/home-RH-feed-info";
import SidebarHomeRH from "../../Components/SideBars/HomeRHSideBar";
import RegistryFormCard from "../../Components/CardsUser/RegistryFormCard";
import Footer from "../../Components/layout/Footer";


function RegistryForm() {
    var mdate = new Date();
    const {context,setContext} = useContext(ModelContext);
    
    return(
        <div className="home-user-container overflow-scroll">
            <HeaderRH/>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-10 center-container-home">
                        <TitleInfoGlobalRH titleevpmain={"REGISTRO DO FORMULÁRIO"}/>
                        <div>
                            {
                                <RegistryFormCard
                                    id = {homeRHFeedInfo[context].id} 
                                    username = {homeRHFeedInfo[context].username}
                                    usernameSec = {homeRHFeedInfo[context].usernameSec}
                                    email = {homeRHFeedInfo[context].email} 
                                    tel = {homeRHFeedInfo[context].tel} 
                                    userjob = {homeRHFeedInfo[context].userjob} 
                                    nameinst = {homeRHFeedInfo[context].nameinst}
                                    cnpj = {homeRHFeedInfo[context].cnpj}
                                    addressinst = {homeRHFeedInfo[context].addressinst}
                                    city = {homeRHFeedInfo[context].city}
                                    region = {homeRHFeedInfo[context].region}
                                    country = {homeRHFeedInfo[context].country}
                                    dateinst = {homeRHFeedInfo[context].dateinst} 
                                    localinst = {homeRHFeedInfo[context].localinst}
                                    descriptionInst = {homeRHFeedInfo[context].descriptionInst}
                                    url = {homeRHFeedInfo[context].url} 
                                    cep = {homeRHFeedInfo[context].cep} 
                                    valor = {homeRHFeedInfo[context].valor} 
                                    atividade = {homeRHFeedInfo[context].atividade} 
                                    optionConcession = {homeRHFeedInfo[context].optionConcession}
                                    objectives = {homeRHFeedInfo[context].objectives} 
                                    objectivesOthers = {homeRHFeedInfo[context].objectivesOthers} 
                                    groups = {homeRHFeedInfo[context].groups} 
                                    groupOthers = {homeRHFeedInfo[context].groupOthers} 

                                />
                            
                            }
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

export default RegistryForm;
