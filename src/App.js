import React, {Suspense, useState} from "react";
import {BrowserRouter, Routes, Route} from "react-router-dom";

import Login from "./Pages/Login";
import Home from "./Pages/User/Home";
import RegisterActivity from "./Pages/User/RegisterActivity";
import Institution from "./Pages/User/Institution";
import AddInstitution from "./Pages/User/AddInstitution"
import Report from "./Pages/RH/Report"
import HomeRH from "./Pages/RH/HomeRH"
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { ModelContext } from "./Components/ModelContext";
import HomeDetail from "./Pages/User/HomeDetail";
import Solicitations from "./Pages/RH/Solicitations";
import RegisterActivityDetail from "./Pages/User/RegisterActivityDetail";
import InstitutionDetail from "./Pages/User/InstitutionDetail";
import FormActivity from "./Pages/User/FormActivity";
import RegistryForm from "./Pages/RH/RegistryForm";
import FormDonation from "./Pages/User/FormDonation";

function App() {
    const [context, setContext] = useState(null);

    return(
        <div className="app-container">
            <ModelContext.Provider value={{context, setContext}}>
                <Suspense fallback={<div>Loading page...</div>}>
                    <BrowserRouter>
                        <Routes>
                            <Route path="/" element={<Login/>}/>
                            <Route path="/home" element={<Home/>}/>
                            <Route path="/admin" element={<HomeRH/>}/>
                            <Route path="/registryform" element={<RegistryForm />}/>
                            <Route path="/report" element={<Report/>}/>
                            <Route path="/registeractivity" element={<RegisterActivity/>}/>
                            <Route path="/institution" element={<Institution/>}/>
                            <Route path="/addInstitution" element={<AddInstitution/>}/>
                            <Route path="/homedetail" element={<HomeDetail/>}/>
                            <Route path="/registeractivitydetail" element={<RegisterActivityDetail/>}/>
                            <Route path="/solicitations" element={<Solicitations/>}/>
                            <Route path="/institutiondetail" element={<InstitutionDetail/>}/>
                            <Route path="/formactivity" element={<FormActivity/>}/>
                            <Route path="/formdonation" element={<FormDonation/>}/>
                        </Routes>
                    </BrowserRouter>
                </Suspense>
            </ModelContext.Provider>
        </div>
    );
}

export default App;
