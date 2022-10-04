import React, { useContext, useState } from "react";

import "./FormDonation.css";
import HeaderUser from "../../Components/LayoutUser/HeaderUser";
import titleGlobalInfo from "../../Infos/title-info-global";
import { ModelContext } from "../../Components/ModelContext";
import sidebarInfo from "../../Infos/sidebar-info";
import SidebarHomeUser from "../../Components/SideBars/HomeUserSideBar";
import Footer from "./../../Components/layout/Footer";
import TitleInfoGlobal from "../../Components/TitleGlobal/TitleInfoGlobal";

function FormDonation() {
    const mdate = new Date();
    const [organizationName, setOrganizationName] = useState("")
    const {context, setContext} = useContext(ModelContext);
    const mapOrganization = {
        "Imip" : {
            url : "http://www1.imip.org.br/imip/home/index.html",
            email: "maria@email.com",
            telefone: "(81) 91461-8811",
            nome_contato: "Maria",
            sobrenome : "Cristina",
            id: "0",
            rua : "Rua dos Coelhos,200 - Boa Vista",
            cidade: "Recife",
            regiao: "PE",
            cep: "50070-902"
        }, 
        "Solidariza Recife" : {
         url : "solidarizarecife.com",
         email: "solidarizarecife@solidarizarecife.com.br",
         telefone: "999999",
         nome_contato: "Maria",
         sobrenome : "Cristina",
         id: "1",
         rua : "Centro do Recife",
         cidade: "Recife",
         regiao: "PR",
         cep: "50540-092"
        }
     }
     const handleOrganizationChange = (e) => {
             const value = e.target.value
             setOrganizationName (value)
     }
     const organizationData = mapOrganization[organizationName]
     const organizations = Object.keys(mapOrganization)
     const filteredOrganizations = organizations.filter((organization) => {
          return organization.includes(organizationName)
         })
         
 

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
                                                <input type="tel" className="form-control" placeholder="Telefone"  aria-label="Telefone" aria-describedby="basic-addon1"value={organizationData?.telefone}/>
                                            </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <div className="input-group mb-3">
                                                <span className="input-group-text" id="basic-addon1"></span>
                                                <input type="text" className="form-control" placeholder="Nome"  aria-label="Contact Name" aria-describedby="basic-addon1"value={organizationData?.nome_contato}/>
                                            </div>
                                        </td>
                                        <td>
                                            <div className="input-group mb-3">
                                                <span className="input-group-text" id="basic-addon1"></span>
                                                <input type="url" className="form-control" placeholder="Sobrenome"  aria-label="lastname" aria-describedby="basic-addon1"value={organizationData?.sobrenome}/>
                                            </div>
                                        </td>
                                        <td>
                                            <div className="input-group mb-3">
                                                <span className="input-group-text" id="basic-addon1"></span>
                                                <input type="text" className="form-control" placeholder="CNPJ"  aria-label="FiscalNumberId" aria-describedby="basic-addon1"value={organizationData?.id}/>
                                            </div>
                                        </td>

                                        <td>
                                            <div className="input-group mb-3">
                                                <span className="input-group-text" id="basic-addon1"></span>
                                                <input type="text" className="form-control" placeholder="Rua"  aria-label="Street" aria-describedby="basic-addon1"value={organizationData?.rua}/>
                                            </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <div className="input-group mb-3">
                                                <span className="input-group-text" id="basic-addon1"></span>
                                                <input type="text" className="form-control" placeholder="Cidade"  aria-label="City" aria-describedby="basic-addon1"value={organizationData?.cidade}/>
                                            </div>
                                        </td>
                                        <td>
                                            <div className="input-group mb-3">
                                                <span className="input-group-text" id="basic-addon1"></span>
                                                <input type="text" className="form-control" placeholder="Região"  aria-label="Region" aria-describedby="basic-addon1"value={organizationData?.regiao}/>
                                            </div>
                                        </td>
                                        <td>
                                            <div className="input-group mb-3">
                                                <span className="input-group-text" id="basic-addon1"></span>
                                                <input type="text" className="form-control" placeholder="CEP"  aria-label="PostalCode" aria-describedby="basic-addon1"value={organizationData?.cep}/>
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
                                                <span className="input-group-text" id="basic-addon1"></span>
                                                <input type="text" className="form-control" placeholder="Valor da Doação"  aria-label="DonationValue" aria-describedby="basic-addon1"/>
                                            </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td><p><b>Você pode escolher um ou mais objetos:</b></p></td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <div className="form-check">
                                                <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
                                                <label className="form-check-label" for="flexCheckDefault"> Auxílio em Desastres</label>
                                            </div>
                                        </td>
                                        <td>
                                            <div className="form-check">
                                                <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
                                                <label className="form-check-label" for="flexCheckDefault"> Fornecer comida / água / abrigo</label>
                                            </div>
                                        </td>
                                        <td>
                                            <div className="form-check">
                                                <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
                                                <label className="form-check-label" for="flexCheckDefault"> Saúde</label>
                                            </div>
                                        </td>
                                        <td>
                                            <div className="form-check">
                                                <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
                                                <label className="form-check-label" for="flexCheckDefault"> Educação</label>
                                            </div>                                            
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <div className="form-check">
                                                <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
                                                <label className="form-check-label" for="flexCheckDefault"> Liberdade / Justiça</label>
                                            </div>
                                        </td>
                                        <td>
                                            <div className="form-check">
                                                <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
                                                <label className="form-check-label" for="flexCheckDefault">Capacitação Profissional</label>
                                            </div>
                                        </td>
                                        <td>
                                            <div className="form-check">
                                                <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
                                                <label className="form-check-label" for="flexCheckDefault"> Outros</label>
                                            </div>
                                        </td>
                                        <td>
                                            <div className="input-group mb-3">
                                                <span className="input-group-text" id="basic-addon1"></span>
                                                <input type="text" className="form-control" placeholder="Para outros objetivos"  aria-label="Others" aria-describedby="basic-addon1"/>
                                            </div>
                                        </td>
                                    </tr>
                                    <tr><p><b>Você pode escolher um ou mais grupo de pessoas:</b></p></tr>
                                    <tr>
                                        <td>
                                            <div className="form-check">
                                                <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
                                                <label className="form-check-label" for="flexCheckDefault"> Vulnerabilidade socioeconômica local / Global</label>
                                            </div>
                                        </td>
                                        <td>
                                            <div className="form-check">
                                                <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
                                                <label className="form-check-label" for="flexCheckDefault"> Doença / Transtorno mental</label>
                                            </div>
                                        </td>
                                        <td>
                                            <div className="form-check">
                                                <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
                                                <label className="form-check-label" for="flexCheckDefault"> Situação de rua</label>
                                            </div>
                                        </td>
                                        <td>
                                            <div className="form-check">
                                                <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
                                                <label className="form-check-label" for="flexCheckDefault"> Outros</label>
                                            </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <div className="input-group mb-3">
                                                <span className="input-group-text" id="basic-addon1"></span>
                                                <input type="text" className="form-control" placeholder="Para outro tipo vulnerabilidade"  aria-label="Others" aria-describedby="basic-addon1"/>
                                            </div>
                                        </td>
                                        <td>
                                            <div className="input-group mb-3">
                                                <span className="input-group-text" id="basic-addon1"></span>
                                                <input type="date" className="form-control"  aria-label="Date" aria-describedby="basic-addon1"/>
                                            </div>
                                        </td>
                                        <td>
                                            <button type="submit" className="btn btn-primary">Confirmar</button>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <div  className="input-group mb-3">
                                                <span className="input-group-text" id="basic-addon1"></span>
                                                <textarea className="form-control" aria-label="Organization Description" placeholder="Descrição da Organização"></textarea>
                                            </div>
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

export default FormDonation;