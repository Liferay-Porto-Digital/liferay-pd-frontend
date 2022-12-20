import React, { useEffect, useState } from "react";
import { get } from "../Integration/API"
import PacmanLoader from 'react-spinners/PacmanLoader'

function ReportCard() {

  const [summary, setSummary] = useState();
  const [loading, setLoading] = useState(true);


  
    
  useEffect(() => {
    get('report').then((response) => {
        setSummary(response);
        setLoading(false);
    });
  }, []);

    return(
        <div className="container-report">
            <div className="row report-row">
                <div className="col-md-6 container-report">
                    {
                        loading ? 

                        <PacmanLoader
                        color="#36d7b7"
                        size={40}
                        />

                        :

                        <><div className="row report-row">
                            <div className="col-md data">
                                <p>Total de Doações</p>
                                <h5 classeName="data">{"R$ " + summary?.amountDonated}</h5>
                            </div>
                            <div className="col-md data">
                                <p>Total de Atividades</p>
                                <h5 classeName="data">{summary?.amountDoneActivity + " horas"}</h5>
                            </div>
                        </div><div className="row report-row">
                                <div id="table-donate" className="col-md data">
                                    <p>Doações por Instituição</p>
                                    <h5 classeName="data">{"R$ " + summary?.donationsPerInstitution}</h5>
                                </div>
                                <div className="col-md data">
                                    <p>Atividade por Instituição</p>
                                    <h5 classeName="data">{summary?.activityPerInstitution + " horas"}</h5>
                                </div>
                            </div><div className="row report-row">
                                <div className="col-md data">
                                    <p>Doações Realizadas</p>
                                    <h5 classeName="data">{summary?.numberOfDonations}</h5>
                                </div>
                                <div className="col-md data">
                                    <p>Atividades Realizadas</p>
                                    <h5 classeName="data">{summary?.numberOfActivities}</h5>
                                </div>
                            </div></>
                    }
                    
                </div>
                <div className="col-md-6 container-report">
                    <div className="row report-row">
                        <div className="col-md data" style={{padding: 210}}>
                            <a href="https://evp-api.herokuapp.com/api/v1/report/export/excel"><button className="btn btn-primary" id="btn-report" >Exportar</button></a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ReportCard;
