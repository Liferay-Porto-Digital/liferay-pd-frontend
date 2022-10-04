import React, { createElement } from "react";
import Info from "../../Infos/home-RH-feed-info";

function ReportCard() {
    function SumDonate(){
        let soma = 0;
        Info.map(item => {
            soma = soma + item.valor
        })
        return soma + " reais";
    }
    function SumActivity(){
        let soma = 0;
        Info.map(item => {
            soma = soma + item.atividade
        })
        return soma + " horas";
    }
    function TableDonate(){

        let donate = [];
        Info.map((item)=> {
            if (item.valor !== null)
                donate.push(item.nameinst +"  =  "+ item.valor+" reais"+'\n');
        })
        return (
            <div>
                <h5>{donate[0]}</h5>
                <h5>{donate[1]}</h5>
            </div>
        );
    }
    function TableActivity(){

        let atividade = [];

        Info.map((item)=> {
            if (item.atividade !== null)
                atividade.push(item.nameinst +"  =  "+ item.atividade+" horas");
        })
        return (    
            <h5>{atividade[0]}</h5>
        );
    }


    
    return(
        <div className="container-report">
            <div className="row report-row">
                <div className="col-md-6 container-report">
                    <div className="row report-row">
                        <div className="col-md data">
                            <p>Total de doações</p>
                            <h5 classeName="data">{SumDonate()}</h5>
                        </div>
                        <div className="col-md data">
                            <p>Total de atividades</p>
                            <h5 classeName="data">{SumActivity()}</h5>
                        </div>
                    </div>
                    <div className="row report-row">
                        <div className="col-md data">
                            <p>Taxa de participação dos funcionários</p>
                            <h5 classeName="data">43%</h5>
                        </div>
                    </div>
                    <div className="row report-row">
                        <div id="table-donate" className="col-md data">
                            <p>Doações por instituição</p>
                            <h5 classeName="data">{TableDonate()}</h5>
                        </div>
                    </div>
                   
                </div>
                <div className="col-md-6 container-report">
                    <div className="row report-row">
                        <div className="col-md data">
                            <button className="btn btn-primary" id="btn-report">Exportar</button>
                        </div>
                    </div>
                <div className="row report-row">
                        <div className="col-md data">
                            <p>Atividade por instituição</p>
                            <h5 classeName="data">{TableActivity()}</h5>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ReportCard;
