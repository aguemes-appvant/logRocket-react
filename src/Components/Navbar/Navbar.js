import React from "react";
import Container from 'react-bootstrap/Container';
import NavbarBs from 'react-bootstrap/Navbar'
import brand  from '../../Assets/img/brand.png'

const Navbar = () => {
  return (
    <NavbarBs className="bg-body-tertiary">
      <Container>
        <NavbarBs.Brand><img src={brand} alt="marca" height={20} width={20}></img></NavbarBs.Brand>
        <NavbarBs.Toggle />
        <NavbarBs.Collapse className="justify-content-end">
          <NavbarBs.Text>¡Welcome!</NavbarBs.Text>
        </NavbarBs.Collapse>
      </Container>
    </NavbarBs>
  );
};

export default Navbar;
