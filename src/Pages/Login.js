import React from "react";
import Form from "react-bootstrap/Form";
import {NavLink, Link} from "react-router-dom";

import Navbar from "../Components/layout/HeaderLogin";
import Footer from "../Components/layout/Footer";
import "./Login.css";

function Login() {
    return(
        <div className="login-page-container">
            <Navbar/>
            <div className="login-page-card">
                <h4 id="title-card-login">Login</h4>
                <Form>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        {/* <Form.Label>Email address</Form.Label> */}
                        <Form.Control type="email" placeholder="Email" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        {/* <Form.Label>Password</Form.Label> */}
                        <Form.Control type="password" placeholder="Password" />
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <NavLink className="btn btn-primary buttom-submit-custom" to="/home">Submit</NavLink>
                    </Form.Group>

                    <Link className="forgot-password" to="/">Esqueceu sua senha?</Link>
                </Form>
            </div>
            <Footer/>
        </div>
    );
}

export default Login;