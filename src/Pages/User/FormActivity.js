import React, { useEffect, useState } from "react";
import "./FormActivity.css";
import HeaderUser from "../../Components/LayoutUser/HeaderUser";
import titleGlobalInfo from "../../Infos/title-info-global";
import sidebarInfo from "../../Infos/sidebar-info";
import SidebarHomeUser from "../../Components/SideBars/HomeUserSideBar";
import Footer from "./../../Components/layout/Footer";
import TitleInfoGlobal from "../../Components/TitleGlobal/TitleInfoGlobal";

function FormActivity() {    const mdate = new Date();
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
    const [url, setUrl] = useState();
    const [email, setEmail] = useState();
    const [phoneNumber, setPhoneNumber] = useState();
    const [registrationNumber, setRegistrationNumber] = useState();
    const [estado, setEstado] = useState();
    const [street, setStreet] = useState();
    const [zipCode, setZipCode] = useState();
    const [city, setCity] = useState();


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
                const connectAPI = await fetch('https://evp-api.herokuapp.com/api/v1/form/add/activity', { method: 'POST',  body: JSON.stringify({
                    dateOfEvent: dateOfEvent,
                    disasterObjective: disaster,
                    educationObjective: education,
                    healthObjective: health,
                    healthVulnerability: disease,
                    homelessVulnerability: streetSituation,
                    institutionCity: organizationData?.city || city,
                    institutionEmail: organizationData?.email || email,
                    institutionName: organizationName,
                    institutionPhoneNumber: organizationData?.phoneNumber || phoneNumber,
                    institutionRegistrationNumber: organizationData?.registrationNumber || registrationNumber,
                    institutionState: organizationData?.state || estado,
                    institutionStreet: organizationData?.street || street,
                    institutionUrl: organizationData?.url || url,
                    institutionZipCode: organizationData?.zipCode || zipCode,
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
                console.log(response);
                if (response.status === 201) {
                    alert("Formul??rio Criado!")
                    }
                    else {
                        alert("Formul??rio N??o Criado, Erro Em Algum Campo!")
                    }
            })
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
                                    titleevpmain="FORMUL??RIO DE ATIVIDADES"
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
                                                <input type="text" className="form-control" list="datalistOptions" placeholder="Nome da Organiza????o" onChange={handleOrganizationChange}  aria-label="NameOrg" aria-describedby="basic-addon1" value={organizationName}/>
                                                <datalist id="datalistOptions">
                                                    {filteredOrganizations.map((organization) => (
                                                        <option value={organization.name}/>                                                        
                                                    ))}
                                                </datalist>
                                            </div>
                                            
                                        </td>
                                        <td>
                                            <div className="input-group mb-3">
                                                <span className="input-group-text" id="basic-addon1"></span>
                                                <input type="text" className="form-control" placeholder="Url"  aria-label="url" aria-describedby="basic-addon1" value={(url==="")? url : organizationData?.url } onChange={e => setUrl(e.target.value)}/>
                                            </div>
                                        </td>
                                        <td>
                                            <div className="input-group mb-3">
                                                <span className="input-group-text" id="basic-addon1"></span>
                                                <input type="email" className="form-control" placeholder="Email"  aria-label="Email" aria-describedby="basic-addon1"value={(email ==="")? email : organizationData?.email } onChange={e => setEmail(e.target.value)}/>
                                            </div>
                                        </td>
                                        <td>
                                            <div className="input-group mb-3">
                                                <span className="input-group-text" id="basic-addon1"></span>
                                                <input type="tel" className="form-control" placeholder="Telefone"  aria-label="Telefone" aria-describedby="basic-addon1"value={(phoneNumber === "") ?  phoneNumber : organizationData?.phoneNumber} onChange={e => setPhoneNumber(e.target.value)}/>
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
                                                <input type="text" className="form-control" placeholder="CNPJ"  aria-label="FiscalNumberId" aria-describedby="basic-addon1"value={(registrationNumber === "") ? registrationNumber : organizationData?.registrationNumber} onChange={ e => setRegistrationNumber(e.target.value)}/>
                                            </div>
                                        </td>

                                        <td>
                                            <div className="input-group mb-3">
                                                <span className="input-group-text" id="basic-addon1"></span>
                                                <input type="text" className="form-control" placeholder="Rua"  aria-label="Street" aria-describedby="basic-addon1"value={(street === "") ? street : organizationData?.street} onChange={e => setStreet(e.target.value)}/>
                                            </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <div className="input-group mb-3">
                                                <span className="input-group-text" id="basic-addon1"></span>
                                                <input type="text" className="form-control" placeholder="Cidade"  aria-label="City" aria-describedby="basic-addon1"value={(city === "") ? city : organizationData?.city} onChange= {e => setCity(e.target.value)}/>
                                            </div>
                                        </td>
                                        <td>
                                            <div className="input-group mb-3">
                                                <span className="input-group-text" id="basic-addon1"></span>
                                                <input type="text" className="form-control" placeholder="Estado (ex: PE, RJ...)"  aria-label="Estado" aria-describedby="basic-addon1"value={(estado === "") ? estado : organizationData?.state} onChange= {e => setEstado(e.target.value)}/>
                                            </div>
                                        </td>
                                        <td>
                                            <div className="input-group mb-3">
                                                <span className="input-group-text" id="basic-addon1"></span>
                                                <input type="text" className="form-control" placeholder="CEP (min: 8 d??gitos)"  aria-label="PostalCode" aria-describedby="basic-addon1"value={(zipCode === "") ? zipCode : organizationData?.zipCode} onChange= {e => setZipCode(e.target.value)}/>
                                            </div>
                                        </td>
                                        <td>
                                            <div className="input-group mb-3">
                                                <span className="input-group-text" id="basic-addon1"></span>
                                                <input type="text" className="form-control" placeholder="Quantidade de Horas"  aria-label="DonationValue" aria-describedby="basic-addon1" value={valueDonation} onChange={ e => setValueDonation(e.target.value)}/>
                                            </div>
                                        </td>
                                        </tr>
                                        <tr>
                                    </tr>
                                    <tr>
                                        <td><p><b>Voc?? pode escolher um ou mais objetivos:</b></p></td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <div className="form-check">
                                                <input className="form-check-input" type="checkbox" id="flexCheckDefault" value={disaster} onChange={e => setDisaster(!disaster)}/>
                                                <label className="form-check-label" for="flexCheckDefault"> Aux??lio em Desastres</label>
                                            </div>
                                        </td>
                                        <td>
                                            <div className="form-check">
                                                <input className="form-check-input" type="checkbox" id="flexCheckDefault" value={food} onChange={e => setFood(!food)}/>
                                                <label className="form-check-label" for="flexCheckDefault"> Fornecer comida / ??gua / abrigo</label>
                                            </div>
                                        </td>
                                        <td>
                                            <div className="form-check">
                                                <input className="form-check-input" type="checkbox" id="flexCheckDefault" value={health} onChange={e => setHealth(!health)}/>
                                                <label className="form-check-label" for="flexCheckDefault"> Sa??de</label>
                                            </div>
                                        </td>
                                        <td>
                                            <div className="form-check">
                                                <input className="form-check-input" type="checkbox" id="flexCheckDefault" value={education} onChange={e => setEducation(!education)}/>
                                                <label className="form-check-label" for="flexCheckDefault"> Educa????o</label>
                                            </div>                                            
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <div className="form-check">
                                                <input className="form-check-input" type="checkbox" id="flexCheckDefault" value={justice} onChange={e => setJustice(!justice)}/>
                                                <label className="form-check-label" for="flexCheckDefault"> Liberdade / Justi??a</label>
                                            </div>
                                        </td>
                                        <td>
                                            <div className="form-check">
                                                <input className="form-check-input" type="checkbox" id="flexCheckDefault" value={capacitation} onChange={e => setCapacitation(!capacitation)}/>
                                                <label className="form-check-label" for="flexCheckDefault">Capacita????o Profissional</label>
                                            </div>
                                        </td>
                                        <td>
                                            <div className="input-group mb-3">
                                                <span className="input-group-text" id="basic-addon1"></span>
                                                <input type="text" className="form-control" placeholder="Para outros objetivos"  aria-label="Others" aria-describedby="basic-addon1" value={otherObjective} onChange={e => setOtherObjective(e.target.value)}/>
                                            </div>
                                        </td>
                                    </tr>
                                    <tr><p><b>Voc?? pode escolher um ou mais grupo de pessoas:</b></p></tr>
                                    <tr>
                                        <td>
                                            <div className="form-check">
                                                <input className="form-check-input" type="checkbox" id="flexCheckDefault" value={vulnerability} onChange={e => setVulnerability(!vulnerability)}/>
                                                <label className="form-check-label" for="flexCheckDefault"> Vulnerabilidade socioecon??mica local / Global</label>
                                            </div>
                                        </td>
                                        <td>
                                            <div className="form-check">
                                                <input className="form-check-input" type="checkbox" id="flexCheckDefault" value={disease} onChange={e => setDisease(!disease)}/>
                                                <label className="form-check-label" for="flexCheckDefault"> Doen??a / Transtorno mental</label>
                                            </div>
                                        </td>
                                        <td>
                                            <div className="form-check">
                                                <input className="form-check-input" type="checkbox" id="flexCheckDefault" value={streetSituation} onChange={e => setStreetSituation(!streetSituation)}/>
                                                <label className="form-check-label" for="flexCheckDefault"> Situa????o de rua</label>
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
                                                <textarea className="form-control" aria-label="Organization Description" placeholder="Descri????o da Organiza????o" value={organizationData?.description}></textarea>
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