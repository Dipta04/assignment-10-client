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
                    <Navbar.Brand><Link className='text-decoration-none text-info fw-bold' to='/home'>Happy Learning</Link></Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link><Button variant="outline-secondary"><Link className='text-decoration-none text-white' to='/home'>Home</Link></Button></Nav.Link>
                            <Nav.Link><Button variant="outline-secondary"><Link className='text-decoration-none text-white' to='/courses'>Courses</Link></Button></Nav.Link>
                            <Nav.Link><Button className='text-white' variant="outline-secondary">FAQ</Button></Nav.Link>
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
                                <Button className='me-3' variant="outline-secondary"><Link className='text-decoration-none text-white' to='/login'>Login</Link></Button>
                                <Button variant="outline-secondary"><Link className='text-decoration-none text-white' to='/register'>Register</Link></Button>
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