import React, {useState} from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import "./LayoutUser/HeaderUser.css"
import { Link } from "react-router-dom";


export default function InfoModal() {
const [show, setShow] = useState(false);
const handleClose = () => setShow(false);
const handleShow = () => setShow(true);
return (
  <>
    <Button className="nextButton position-relative end-50" onClick={handleShow}>
        <svg id ="menu" xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="white" class="bi bi-list" viewBox="0 0 16 16">
        <path fill-rule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"/>
        </svg>
    </Button>

    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title style={{color:"#0b63ce"}}>MENU</Modal.Title>
      </Modal.Header>
      <Modal.Body ><Link style={{textDecoration:"none"}} to="/home">Home</Link></Modal.Body>
      <Modal.Body><Link style={{textDecoration:"none"}}  to="/registeractivity">Registro de Atividade</Link></Modal.Body>
      <Modal.Body><Link style={{textDecoration:"none"}}   to="/institution">Instituições</Link></Modal.Body>
      <Modal.Body><Link style={{textDecoration:"none"}}   to="/formdonation">Formulário de doações</Link></Modal.Body>
      <Modal.Body><Link style={{textDecoration:"none"}}   to="/formactivity">Formulário de atividades</Link></Modal.Body>
      <Modal.Body><Link style={{textDecoration:"none"}}   to="/admin">Administrador</Link></Modal.Body>
      <Modal.Footer>
      </Modal.Footer>
    </Modal>
  </>
);
}