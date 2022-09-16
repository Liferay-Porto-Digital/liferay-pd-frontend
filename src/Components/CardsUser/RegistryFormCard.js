import "./registryFormCard.css";
import React from "react";


function RegistryFormCard(props) {
    //select the kind of solicitation
    var type = props.optionConcession;
    var valor = props.valor;
    const TypeSolicitation = () => {
        if (type === "Propostas")
            return "Doação"
        else
            valor = props.atividade;
            return "Atividade"
    }
    return (

        <div key={props.id} className="solicitation-register" >
            <div id="title-typeSolicitation" className="row"><h5>{TypeSolicitation() + " para a instituição " + props.nameinst}</h5></div>
            <div className="row">
                <div className="col-sm-5 order-1 order-md-0">
                    
                    <span className="registryData-text"><strong> Nome:&nbsp;</strong>{props.username}  {props.usernameSec}</span>
                    <span className="registryData-text"><strong>Email:&nbsp;</strong>{props.email}</span>
                    <span className="registryData-text"><strong>Organização:&nbsp;</strong>{props.nameinst}</span>
                    <span className="registryData-text"><strong>Site:&nbsp;</strong> {props.url }</span>
                    <span className="registryData-text"><strong>Cidade:&nbsp;</strong>{props.city}</span>
                    <span className="registryData-text"><strong>CEP:&nbsp;</strong>{props.cep}</span>
                    <span className="registryData-text"><strong>Valor:&nbsp;</strong>{valor}</span>
                    <span className="registryData-text"><strong>Opções de Concessão:&nbsp;</strong>{props.optionConcession}</span>
                    <span className="registryData-text"><strong>Objetivos:&nbsp;</strong>{props.objectives.join(" / ")}</span>
                    <span className="registryData-text"><strong>Grupos:&nbsp;</strong>{props.groups}</span>
                    
                </div>
                <div className="col-sm-5">
                    <span className="registryData-text"><strong>Tel.:&nbsp;</strong>{props.tel}</span>
                    <span className="registryData-text"><strong>CNPJ:&nbsp;</strong>{props.cnpj}</span>
                    <span className="registryData-text"><strong>Endereço:&nbsp;</strong>{props.addressinst}</span>
                    <span className="registryData-text"><strong>Região:&nbsp;</strong>{props.region}</span>
                    <span className="registryData-text"><strong>País:&nbsp;</strong>{props.country}</span>
                </div>

            </div>

        </div>

    );
}

export default RegistryFormCard;
