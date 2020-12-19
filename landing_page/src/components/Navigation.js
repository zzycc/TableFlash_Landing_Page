import React from 'react';
import {Navbar, Nav} from 'react-bootstrap'
import './Navigation.css'
class Navigation extends React.Component{
    render(){
        return (
            <Navbar expand="lg" variant="light" bg="light" fixed="bottom">
                <Navbar.Brand href="#">
                    <img alt="" src= "/table_flash.png" width="100" height="30"/>
                </Navbar.Brand>
                <Nav className="mr-auto">
                    <Nav.Link href="https://deals.tableflash.com/">
                        <div class='deal'/>
                        {" "} Deals
                    </Nav.Link>
                    <Nav.Link href="https://customer.tableflash.com/about">
                        <div alt='' class='about'/>
                        {" "}About TableFlash
                    </Nav.Link>
                    <Nav.Link href="https://customer.tableflash.com/terms">
                        <div alt='' class='term'/>
                        Term & Condition
                    </Nav.Link>
                    <Nav.Link href="https://customer.tableflash.com/contact">
                        <div alt='' class='contact'/>
                        Contact Us
                    </Nav.Link>
                </Nav>
            </Navbar>
        )
    }
}
export default Navigation