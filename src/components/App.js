import React, { Component } from 'react';

import '../styles/App.css';
import { Nav, Navbar,NavItem } from 'react-bootstrap';




class App extends Component {
   


    render() {
        return (
            <div>
                <Navbar>
                    <Navbar.Header>
                        <Navbar.Brand>
                            <a href="/">Shaban_raza</a>
                        </Navbar.Brand>
                    </Navbar.Header>
                    <Nav>
                        <NavItem eventKey={1} href="/home">Home</NavItem>
                    </Nav>
                    <Nav pullRight>
                        <NavItem eventKey={2} href="/login">Login</NavItem>
                        <NavItem eventKey={2} href="/register">Register</NavItem>
                    </Nav>
                </Navbar>
            </div>
     
        );
    }
}




export default App;
