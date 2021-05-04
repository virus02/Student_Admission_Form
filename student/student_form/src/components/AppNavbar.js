import React, { useState } from "react";
import {
    Navbar,
    Collapse,
    NavbarToggler,
    NavbarBrand,
    NavItem,
    Container,
    Nav,
} from "reactstrap";

const AppNavbar = (props) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => setIsOpen(!isOpen);

    return (
        <div>
            <Navbar color="light" light expand="sm" className="mb-5">
                <Container>
                    <NavbarBrand href="#">Admission Form</NavbarBrand>
                    <NavbarToggler onClick={toggle}></NavbarToggler>
                    <Collapse isOpen={isOpen} navbar>
                        <Nav className="ml-auto" navbar>
                            <NavItem href="#">Login</NavItem>
                        </Nav>
                    </Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default AppNavbar;
