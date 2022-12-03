import React from "react";

import "./AddInstitution.css";
import HeaderUser from "../../Components/LayoutUser/HeaderUser";
import titleGlobalInfo from "../../Infos/title-info-global";
import sidebarInfo from "../../Infos/sidebar-info";
import SidebarHomeUser from "../../Components/SideBars/HomeUserSideBar";
import Footer from "./../../Components/layout/Footer";
import TitleInfoGlobal from "../../Components/TitleGlobal/TitleInfoGlobal";
import {post} from "../../Components/Integration/API"


function AddInstitution() {
    const mdate = new Date();

    
    return(
        <div className="institute-detail-container overflow-scroll">
            <HeaderUser/>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-10 institute-detail-center-container">
                        <div className="title-global-info-container">
                            {titleGlobalInfo.map((info) =>
                                <TitleInfoGlobal
                                    titleevpmain="ADICIONAR NOVA INSTITUIÇÃO"
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
                        <div className="institute-detail-card-container">
                            <table className="table">
                                <thead>
                                    <tr>
                                        <th></th>
                                        <th></th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>
                                            <div className="input-group mb-3">
                                                <input type="text" className="form-control" placeholder="Nome da Organização"  aria-label="Organization" aria-describedby="basic-addon1"/>
                                            </div>
                                        </td>
                                        <td>
                                            <div className="input-group mb-3">
                                                <input type="text" className="form-control" placeholder="CNPJ" aria-label="FiscalNumberId" aria-describedby="basic-addon1"/>
                                            </div>
                                        </td>
                                        <td>
                                            <div className="input-group mb-3">
                                                <input type="url" className="form-control"  placeholder ="Url"aria-label="Url" aria-describedby="basic-addon1"/>
                                            </div>
                                        </td>
                                        <td>
                                            <div className="input-group mb-3">
                                                <input type="text" className="form-control" placeholder="Telefone"  aria-label="Phone" aria-describedby="basic-addon1"/>
                                            </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <div className="input-group mb-3">
                                                <input type="text" className="form-control" placeholder="Endereço"   aria-label="Street" aria-describedby="basic-addon1"/>
                                            </div>
                                        </td>
                                        <td>
                                            <div className="input-group mb-3">
                                                <input type="text" className="form-control" placeholder="Região"  aria-label="Region" aria-describedby="basic-addon1"/>
                                            </div>
                                        </td>
                                        <td>
                                            <div className="input-group mb-3">
                                                <input type="text" className="form-control" placeholder="CEP"  aria-label="PostalCode" aria-describedby="basic-addon1"/>
                                            </div>
                                        </td>
                                        <td>
                                            <div className="input-group mb-3">
                                                <input type="text" className="form-control" placeholder="Cidade"   aria-label="City" aria-describedby="basic-addon1"/>
                                            </div>
                                        </td>
                                       
                                    </tr>
                                    
                                    <tr>
                                        <td>
                                            <div className="input-group mb-3">
                                                <input type="text" className="form-control" placeholder="Email"  aria-label="Email" aria-describedby="basic-addon1"/>
                                            </div>
                                        </td>
                                        <td>
                                            <select className="form-select" aria-label="Default select example">
                                                <option value="valor1" selected>Brasil</option>
                                                <option value="valor2">Canadá</option>
                                                <option value="valor3">Chile</option>
                                                <option value="valor4">Estados Unidos</option>
                                                <option value="valor5">Bolívia</option>
                                                <option value="valor6">Portugal</option>
                                                <option value="valor7">Japão</option>
                                                <option value="valor8">Noruega</option>
                                                <option value="valor9">Suiça</option>
                                            </select>
                                        </td>
                                     </tr>
                                    <tr>
                                    <td>
                                            <div className="input-group mb-3">
                                                <textarea id="desc-inst"className="form-control" placeholder="Descrição da organização"  aria-label="Organization Description"></textarea>
                                            </div>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        <div>
                            <button id="btn-add-inst" type="submit" className="btn btn-primary" onClick={()=>alert("Instituição adicionada!")}>Confirmar</button>
                        </div>
                    </div>
                    <div className="col-md-2 institute-detail-card-sidebar-right">
                        <div className="institute-detail-card-sidebar-container">
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

export default AddInstitution;