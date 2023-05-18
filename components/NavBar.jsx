import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Button from "react-bootstrap/Button";
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import LogInModal from './Routes/LogInModal';

function NavBar() {
  const [modalShow, setModalShow] = useState(false);
    const navigate = useNavigate()
  return (
    <Navbar>
      <Container>
        <Navbar.Brand href="#home">Magic Quote Generator</Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
        <Button variant="outline-primary" onClick={()=> navigate('/Sign-Up')}>Sign Up</Button>
        <Button variant="primary mx-2" onClick={() => setModalShow(true)}>Add Quote</Button>
        </Navbar.Collapse>
      </Container>
      <LogInModal show={modalShow} onHide={() => setModalShow(false)}/>
    </Navbar>
  );
}


export default NavBar