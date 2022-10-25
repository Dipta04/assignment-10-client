import React from 'react';
import { useContext } from 'react';
import { Button, Image } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Contexts/AuthProvider/AuthProvider';
import { FaUser } from 'react-icons/fa';

const Header = () => {

    const {user,logOut} = useContext(AuthContext);

    const handleLogOut = () =>{
        logOut()
        .then( () => {})
        .catch( error => console.error(error))
    }

    return (
        <div>

            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand href="#home">Happy Learning</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link><Button variant="outline-secondary"><Link className='text-decoration-none text-white' to='/home'>Home</Link></Button></Nav.Link>
                            <Nav.Link href="#features">Courses</Nav.Link>
                            <Nav.Link href="#pricing">FAQ</Nav.Link>
                            <Nav.Link><Button variant="outline-secondary"><Link className='text-decoration-none text-white' to='/blog'>Blog</Link></Button></Nav.Link>
                        </Nav>
                        <Nav>
                            <Nav.Link>
                                {
                                user?.uid
                                 ?
                                    <Button variant="outline-secondary" className='text-white' onClick={handleLogOut}>Log out</Button>
                                 :
                                <>
                                <Link className='text-decoration-none text-white me-3' to='/login'>Login</Link>
                                <Link className='text-decoration-none text-white' to='/register'>Register</Link>
                                </>
                                 }
                            </Nav.Link>
                            <Nav.Link eventKey={2} href="#memes">
                                {
                                    user?.photoURL
                                        ?
                                    <Image style={{height:'30px'}} roundedCircle src={user?.photoURL}></Image>
                                     :
                                    <FaUser></FaUser>
                                }
                            </Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>

        </div>
    );
};

export default Header;