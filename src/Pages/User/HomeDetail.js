import React, { useContext } from "react";
import "./HomeDetail.css";
import HeaderUser from "../../Components/LayoutUser/HeaderUser";
import { ModelContext } from "../../Components/ModelContext";
import homeUserFeedInfo from "../../Infos/home-user-feed-info";
import institutionInfo from "../../Infos/institution-info";
import HomeDetailCard from "../../Components/CardsUser/HomeDetailCard";
import sidebarInfo from "../../Infos/sidebar-info";
import SidebarHomeUser from "../../Components/SideBars/HomeUserSideBar";
import Footer from "./../../Components/layout/Footer";

function HomeDetail() {
    const mdate = new Date();
    const {context, setContext} = useContext(ModelContext);

    return(
        <div className="home-detail-container overflow-scroll">
            <HeaderUser/>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-10 home-detail-center-container">
                        <div className="home-detail-card-container">
                            {
                                <HomeDetailCard
                                    id={homeUserFeedInfo[context].id}
                                    img={homeUserFeedInfo[context].img}
                                    avatar={homeUserFeedInfo[context].avatar}
                                    username={homeUserFeedInfo[context].username}
                                    userjob={homeUserFeedInfo[context].userjob}
                                    nameinst={homeUserFeedInfo[context].nameinst}
                                    dateinst={homeUserFeedInfo[context].dateinst}
                                    phone={institutionInfo[context].phone}
                                    email={institutionInfo[context].email}
                                    street={institutionInfo[context].street}
                                    city={institutionInfo[context].city}
                                    instdate={institutionInfo[context].instdate}
                                    titledonate={institutionInfo[context].titledonate}
                                    donateds={institutionInfo[context].donateds}
                                />
                            }
                        </div>
                        <div className="col-md-10 home-detail-center-container">
                            <table>
                                <tbody>
                                    <tr><td className="info-fields"><p><b>Você pode escolher um ou ambos campos:</b></p></td></tr>
                                <tr>
                                        <td>
                                            <div className="input-group mb-3">
                                                <span className="input-group-text" id="basic-addon1"></span>
                                                <input type="text" className="form-control" placeholder="Valor a ser Doado"  aria-label="Donation Value" aria-describedby="basic-addon1"/>
                                            </div>
                                        </td>
                                        <td>
                                            <div className="input-group mb-3">
                                                <span className="input-group-text" id="basic-addon1"></span>
                                                <input type="text" className="form-control" placeholder="Horas de Voluntariado"  aria-label="VolunteerHours" aria-describedby="basic-addon1"/>
                                            </div>
                                        </td>
                                        <td>
                                            <div className="input-group mb-3">
                                                <span className="input-group-text" id="basic-addon1"></span>
                                                <input type="date" className="form-control"  aria-label="Date" aria-describedby="basic-addon1"/>
                                            </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <button type="submit" className="btn btn-primary home-detail">Confirmar</button>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                    <div className="col-md-2 home-detail-card-sidebar-right">
                        <div className="home-detail-card-sidebar-container">
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

export default HomeDetail;