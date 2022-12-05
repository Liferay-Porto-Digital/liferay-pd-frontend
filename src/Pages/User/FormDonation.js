import React, { useEffect, useState } from "react";
import "./FormActivity.css";
import HeaderUser from "../../Components/LayoutUser/HeaderUser";
import titleGlobalInfo from "../../Infos/title-info-global";
import sidebarInfo from "../../Infos/sidebar-info";
import SidebarHomeUser from "../../Components/SideBars/HomeUserSideBar";
import Footer from "./../../Components/layout/Footer";
import TitleInfoGlobal from "../../Components/TitleGlobal/TitleInfoGlobal";

function FormActivity() {
    const mdate = new Date();
    const [nameContact, setNameContact] = useState();
    const [lastNameContact, setLastNameContact] = useState();
    const [dateOfEvent, setDateOfEvent] = useState();
    const [valueDonation, setValueDonation] = useState();
    const [disaster, setDisaster] = useState(false);
    const [disease, setDisease] = useState(false);
    const [food, setFood] = useState(false);
    const [health, setHealth] = useState(false);
    const [education, setEducation] = useState(false);
    const [justice, setJustice] = useState(false);
    const [capacitation, setCapacitation] = useState(false);
    const [otherObjective, setOtherObjective] = useState();
    const [otherVulnerabilities, setOtherVulnerabilities] = useState();
    const [vulnerability, setVulnerability] = useState(false);
    const [streetSituation, setStreetSituation] = useState(false);
    const [organizationName, setOrganizationName] = useState("")
    const [mapOrganization, setMapOrganization] = useState([])
     const handleOrganizationChange = (e) => {
             const value = e.target.value
             setOrganizationName (value)
     }
     useEffect(() => {
        const getParam = async () => {
            const connectAPI = await fetch(`https://evp-api.herokuapp.com/api/v1/institution/`)
            const data = await connectAPI.json()
            return data;
        };
        getParam().then((response) => {
            setMapOrganization(response);
        });
     }, [])
     const organizationData = mapOrganization.find((organization) => {
        return organization.name.toLowerCase() === organizationName.toLowerCase()
     });
     const filteredOrganizations = mapOrganization.filter((organization) => {
          return organization.name.toLowerCase().includes(organizationName.toLowerCase())
         })

         function addButton() {
            const postInst = async () => {
                const connectAPI = await fetch('https://evp-api.herokuapp.com/api/v1/form/add/donation', { method: 'POST',  body: JSON.stringify({
                    dateOfEvent: dateOfEvent,
                    disasterObjective: disaster,
                    educationObjective: education,
                    healthObjective: health,
                    healthVulnerability: disease,
                    homelessVulnerability: streetSituation,
                    institutionCity: organizationData.city,
                    institutionEmail: organizationData.email,
                    institutionName: organizationName,
                    institutionPhoneNumber: organizationData.phoneNumber,
                    institutionRegistrationNumber: organizationData.registrationNumber,
                    institutionState: organizationData.state,
                    institutionStreet: organizationData.street,
                    institutionUrl: organizationData.url,
                    institutionZipCode: organizationData.zipCode,
                    justiceObjective: justice,
                    lastNameContact: lastNameContact,
                    monetaryVulnerability: vulnerability,
                    nameContact: nameContact,
                    otherObjective: otherObjective,
                    otherVulnerability: otherVulnerabilities,
                    professionalObjective: capacitation,
                    suppliesObjective: food,
                    value: valueDonation
                }),
                    headers: {
                    'Content-type': 'application/json; charset=UTF-8',
                  }})

                return connectAPI;
            };
            postInst().then((response) => {
            })
            alert("Formulário Criado!")
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
                                    titleevpmain="FORMULÁRIO DE DOAÇÕES"
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
                                                <span className="input-group-text" id="basic-addon1"></span>
                                                <input type="text" className="form-control" list="datalistOptions" placeholder="Nome da Organização" onChange={handleOrganizationChange}  aria-label="NameOrg" aria-describedby="basic-addon1" value={organizationName}/>
                                                <datalist id="datalistOptions">
                                                    {filteredOrganizations.map((organization) => (
                                                        <option value={organization}/>                                                        
                                                    ))}
                                                </datalist>
                                            </div>
                                            
                                        </td>
                                        <td>
                                            <div className="input-group mb-3">
                                                <span className="input-group-text" id="basic-addon1"></span>
                                                <input type="text" className="form-control" placeholder="Url"  aria-label="url" aria-describedby="basic-addon1" value={organizationData?.url}/>
                                            </div>
                                        </td>
                                        <td>
                                            <div className="input-group mb-3">
                                                <span className="input-group-text" id="basic-addon1"></span>
                                                <input type="email" className="form-control" placeholder="Email"  aria-label="Email" aria-describedby="basic-addon1"value={organizationData?.email}/>
                                            </div>
                                        </td>
                                        <td>
                                            <div className="input-group mb-3">
                                                <span className="input-group-text" id="basic-addon1"></span>
                                                <input type="tel" className="form-control" placeholder="Telefone"  aria-label="Telefone" aria-describedby="basic-addon1"value={organizationData?.phoneNumber}/>
                                            </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <div className="input-group mb-3">
                                                <span className="input-group-text" id="basic-addon1"></span>
                                                <input type="text" className="form-control" placeholder="Nome do Contato"  aria-label="Contact Name" aria-describedby="basic-addon1"value={nameContact} onChange={ e => setNameContact(e.target.value)}/>
                                            </div>
                                        </td>
                                        <td>
                                            <div className="input-group mb-3">
                                                <span className="input-group-text" id="basic-addon1"></span>
                                                <input type="url" className="form-control" placeholder="Sobrenome do Contato"  aria-label="lastname" aria-describedby="basic-addon1"value={lastNameContact} onChange={e => setLastNameContact(e.target.value)}/>
                                            </div>
                                        </td>
                                        <td>
                                            <div className="input-group mb-3">
                                                <span className="input-group-text" id="basic-addon1"></span>
                                                <input type="text" className="form-control" placeholder="CNPJ"  aria-label="FiscalNumberId" aria-describedby="basic-addon1"value={organizationData?.registrationNumber}/>
                                            </div>
                                        </td>

                                        <td>
                                            <div className="input-group mb-3">
                                                <span className="input-group-text" id="basic-addon1"></span>
                                                <input type="text" className="form-control" placeholder="Rua"  aria-label="Street" aria-describedby="basic-addon1"value={organizationData?.street}/>
                                            </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <div className="input-group mb-3">
                                                <span className="input-group-text" id="basic-addon1"></span>
                                                <input type="text" className="form-control" placeholder="Cidade"  aria-label="City" aria-describedby="basic-addon1"value={organizationData?.city}/>
                                            </div>
                                        </td>
                                        <td>
                                            <div className="input-group mb-3">
                                                <span className="input-group-text" id="basic-addon1"></span>
                                                <input type="text" className="form-control" placeholder="Estado (ex: PE, RJ...)"  aria-label="Estado" aria-describedby="basic-addon1"value={organizationData?.state}/>
                                            </div>
                                        </td>
                                        <td>
                                            <div className="input-group mb-3">
                                                <span className="input-group-text" id="basic-addon1"></span>
                                                <input type="text" className="form-control" placeholder="CEP (min: 8 dígitos)"  aria-label="PostalCode" aria-describedby="basic-addon1"value={organizationData?.zipCode}/>
                                            </div>
                                        </td>
                                        <td>
                                            <div className="input-group mb-3">
                                                <span className="input-group-text" id="basic-addon1"></span>
                                                <input type="text" className="form-control" placeholder="Valor a ser Doado"  aria-label="DonationValue" aria-describedby="basic-addon1" value={valueDonation} onChange={ e => setValueDonation(e.target.value)}/>
                                            </div>
                                        </td>
                                        </tr>
                                        <tr>
                                    </tr>
                                    <tr>
                                        <td><p><b>Você pode escolher um ou mais objetivos:</b></p></td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <div className="form-check">
                                                <input className="form-check-input" type="checkbox" id="flexCheckDefault" value={disaster} onChange={e => setDisaster(!disaster)}/>
                                                <label className="form-check-label" for="flexCheckDefault"> Auxílio em Desastres</label>
                                            </div>
                                        </td>
                                        <td>
                                            <div className="form-check">
                                                <input className="form-check-input" type="checkbox" id="flexCheckDefault" value={food} onChange={e => setFood(!food)}/>
                                                <label className="form-check-label" for="flexCheckDefault"> Fornecer comida / água / abrigo</label>
                                            </div>
                                        </td>
                                        <td>
                                            <div className="form-check">
                                                <input className="form-check-input" type="checkbox" id="flexCheckDefault" value={health} onChange={e => setHealth(!health)}/>
                                                <label className="form-check-label" for="flexCheckDefault"> Saúde</label>
                                            </div>
                                        </td>
                                        <td>
                                            <div className="form-check">
                                                <input className="form-check-input" type="checkbox" id="flexCheckDefault" value={education} onChange={e => setEducation(!education)}/>
                                                <label className="form-check-label" for="flexCheckDefault"> Educação</label>
                                            </div>                                            
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <div className="form-check">
                                                <input className="form-check-input" type="checkbox" id="flexCheckDefault" value={justice} onChange={e => setJustice(!justice)}/>
                                                <label className="form-check-label" for="flexCheckDefault"> Liberdade / Justiça</label>
                                            </div>
                                        </td>
                                        <td>
                                            <div className="form-check">
                                                <input className="form-check-input" type="checkbox" id="flexCheckDefault" value={capacitation} onChange={e => setCapacitation(!capacitation)}/>
                                                <label className="form-check-label" for="flexCheckDefault">Capacitação Profissional</label>
                                            </div>
                                        </td>
                                        <td>
                                            <div className="input-group mb-3">
                                                <span className="input-group-text" id="basic-addon1"></span>
                                                <input type="text" className="form-control" placeholder="Para outros objetivos"  aria-label="Others" aria-describedby="basic-addon1" value={otherObjective} onChange={e => setOtherObjective(e.target.value)}/>
                                            </div>
                                        </td>
                                    </tr>
                                    <tr><p><b>Você pode escolher um ou mais grupo de pessoas:</b></p></tr>
                                    <tr>
                                        <td>
                                            <div className="form-check">
                                                <input className="form-check-input" type="checkbox" id="flexCheckDefault" value={vulnerability} onChange={e => setVulnerability(!vulnerability)}/>
                                                <label className="form-check-label" for="flexCheckDefault"> Vulnerabilidade socioeconômica local / Global</label>
                                            </div>
                                        </td>
                                        <td>
                                            <div className="form-check">
                                                <input className="form-check-input" type="checkbox" id="flexCheckDefault" value={disease} onChange={e => setDisease(!disease)}/>
                                                <label className="form-check-label" for="flexCheckDefault"> Doença / Transtorno mental</label>
                                            </div>
                                        </td>
                                        <td>
                                            <div className="form-check">
                                                <input className="form-check-input" type="checkbox" id="flexCheckDefault" value={streetSituation} onChange={e => setStreetSituation(!streetSituation)}/>
                                                <label className="form-check-label" for="flexCheckDefault"> Situação de rua</label>
                                            </div>
                                        </td>
                                        <td>
                                            <div className="input-group mb-3">
                                                <span className="input-group-text" id="basic-addon1"></span>
                                                <input type="text" className="form-control" placeholder="Para outra vulnerabilidade"  aria-label="Others" aria-describedby="basic-addon1" value={otherVulnerabilities} onChange={e => setOtherVulnerabilities(e.target.value)}/>
                                            </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <div className="input-group mb-3">
                                                <span className="input-group-text" id="basic-addon1"></span>
                                                <input type="date" className="form-control"  aria-label="Date" aria-describedby="basic-addon1"  value={dateOfEvent} onChange={e => setDateOfEvent(e.target.value)}/>
                                            </div>
                                        </td>
                                        <td>
                                        <div  className="input-group mb-3">
                                                <span className="input-group-text" id="basic-addon1"></span>
                                                <textarea className="form-control" aria-label="Organization Description" placeholder="Descrição da Organização" value={organizationData?.description}></textarea>
                                            </div>                                           
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <button type="submit" className="btn btn-primary btn-confirmar-form-donation" onClick={addButton}>Confirmar</button>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
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

export default FormActivity;