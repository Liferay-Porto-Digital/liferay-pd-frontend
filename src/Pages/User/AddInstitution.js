import React, { useState, useEffect } from "react";
import "./AddInstitution.css";
import HeaderUser from "../../Components/LayoutUser/HeaderUser";
import titleGlobalInfo from "../../Infos/title-info-global";
import sidebarInfo from "../../Infos/sidebar-info";
import SidebarHomeUser from "../../Components/SideBars/HomeUserSideBar";
import Footer from "./../../Components/layout/Footer";
import TitleInfoGlobal from "../../Components/TitleGlobal/TitleInfoGlobal";




function AddInstitution() {
    const mdate = new Date();
    const [integrate, setIntegrate] = useState();
    const [name, setName] = useState();
    const [registrationNumber, setRegistrationNumber] = useState();
    const [url, setUrl] = useState();
    const [phoneNumber, setPhoneNumber] = useState();
    const [adress, setAdress] = useState();
    const [estado, setEstado] = useState();
    const [zipCode, setZipCode] = useState();
    const [city, setCity] = useState();
    const [email, setEmail] = useState();
    const [description, setDescription] = useState();


    function addButton() {
        const postInst = async () => {
            const connectAPI = await fetch('https://evp-api.herokuapp.com/api/v1/institution', { method: 'POST',  body: JSON.stringify({
                city: city,
                description: description,
                email: email,
                name : name,
                phoneNumber: phoneNumber,
                registrationNumber: registrationNumber,
                state: estado,
                street: adress,
                url: url,
                zipCode: zipCode }), 
                headers: {
                'Content-type': 'application/json; charset=UTF-8',
              }})
            return connectAPI;
        };
        postInst().then((response) => {
        })
        alert("Instituição Criada!")
    };
    

    
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
                                                <input type="text" className="form-control" placeholder="Nome da Organização"  aria-label="Organization" aria-describedby="basic-addon1" value={name} onChange={e => setName(e.target.value)}/>
                                            </div>
                                        </td>
                                        <td>
                                            <div className="input-group mb-3">
                                                <input type="text" className="form-control" placeholder="CNPJ" aria-label="FiscalNumberId" aria-describedby="basic-addon1" value={registrationNumber} onChange={e => setRegistrationNumber(e.target.value)} />
                                            </div>
                                        </td>
                                        <td>
                                            <div className="input-group mb-3">
                                                <input type="url" className="form-control"  placeholder ="Url"aria-label="Url" aria-describedby="basic-addon1" value={url} onChange={e => setUrl(e.target.value)}/>
                                            </div>
                                        </td>
                                        <td>
                                            <div className="input-group mb-3">
                                                <input type="text" className="form-control" placeholder="Telefone"  aria-label="Phone" aria-describedby="basic-addon1" value={phoneNumber} onChange={e => setPhoneNumber(e.target.value)}/>
                                            </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <div className="input-group mb-3">
                                                <input type="text" className="form-control" placeholder="Endereço"   aria-label="Street" aria-describedby="basic-addon1" value={adress} onChange={e => setAdress(e.target.value)}/>
                                            </div>
                                        </td>
                                        <td>
                                            <div className="input-group mb-3">
                                                <input type="text" className="form-control" placeholder="Região"  aria-label="Region" aria-describedby="basic-addon1" value={estado} onChange={e => setEstado(e.target.value)}/>
                                            </div>
                                        </td>
                                        <td>
                                            <div className="input-group mb-3">
                                                <input type="text" className="form-control" placeholder="CEP"  aria-label="PostalCode" aria-describedby="basic-addon1" value={zipCode} onChange={e => setZipCode(e.target.value)}/>
                                            </div>
                                        </td>
                                        <td>
                                            <div className="input-group mb-3">
                                                <input type="text" className="form-control" placeholder="Cidade"   aria-label="City" aria-describedby="basic-addon1" value={city} onChange={e => setCity(e.target.value)}/>
                                            </div>
                                        </td>
                                       
                                    </tr>
                                    
                                    <tr>
                                        <td>
                                            <div className="input-group mb-3">
                                                <input type="text" className="form-control" placeholder="Email"  aria-label="Email" aria-describedby="basic-addon1" value={email} onChange={e => setEmail(e.target.value)}/>
                                            </div>
                                        </td>
                                     </tr>
                                    <tr>
                                    <td>
                                            <div className="input-group mb-3">
                                                <textarea id="desc-inst"className="form-control" placeholder="Descrição da organização"  aria-label="Organization Description" value={description} onChange={e => setDescription(e.target.value)}></textarea>
                                            </div>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        <div>
                            <button id="btn-add-inst" type="submit" className="btn btn-primary" onClick={addButton}>Confirmar</button>
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