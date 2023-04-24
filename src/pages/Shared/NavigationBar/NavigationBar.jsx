import React, { useContext } from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FaUserCircle } from 'react-icons/fa';
import { AuthContext } from '../../../providers/AuthProviders';

const NavigationBar = () => {

    const { user } = useContext(AuthContext);

    return (
        <Container>
            <Navbar bg="light" expand="lg" className='mb-3'>
                <Container>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="mx-auto">
                            <Link to='/'>Home</Link>
                            <Link className="mx-3" to='/about'>About</Link>
                            <Link to='/career'>Career</Link>
                        </Nav>
                        <Nav>
                            {user && <FaUserCircle style={{ fontSize: '2rem' }}></FaUserCircle>}
                            {user ?
                                <Button variant="secondary">Logout</Button> :
                                <Link to='/login'>
                                    <Button variant="secondary">Login</Button>
                                </Link>
                            }
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </Container>
    );
};

export default NavigationBar;