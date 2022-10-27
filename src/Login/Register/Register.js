import React from 'react';
import { useContext } from 'react';
import { useState } from 'react';
import toast from 'react-hot-toast';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { AuthContext } from '../../Contexts/AuthProvider/AuthProvider';
import { Link } from 'react-router-dom';

const Register = () => {

    const [error, setError] = useState('');
    const [accepted, setAccepted] = useState(false);

    const { createUser } = useContext(AuthContext);

    const handleSubmit = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const PhotoURL = form.PhotoURL.value;
        const email = form.email.value;
        const password = form.password.value;
        console.log(name, PhotoURL, email, password);

        if(!/(?=.*[A-Z].*[A-Z])/.test(password))
        {
          setError('Please provide atleast two uppercase');
          return;
        }
        if(password.length < 6)
        {
          setError('Password should be at least 6 characters.');
           return;
        }
        if(!/(?=.*[!@#$&*])/.test(password))
        {
           setError('Please add at least one special character'); 
           return ; 
        }
        
        createUser(email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
                setError('');
                form.reset();
                toast.success('Now you are a registered User');
            })
            .catch(error => {
                console.error(error);
                setError(error.message);
            })
    }


    const handleAccepted = event => {
        setAccepted(event.target.checked);
    }

    return (
        <div>
            <h1 className='d-flex justify-content-center text-primary fw-bolder'>Register Please</h1>
            <Form onSubmit={handleSubmit} className='w-50 mx-auto mt-5'>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Your Name</Form.Label>
                    <Form.Control name="name" type="text" placeholder="Enter Name" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>PhotoURL</Form.Label>
                    <Form.Control name="PhotoURL" type="text" placeholder="PhotoURL" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Email</Form.Label>
                    <Form.Control name="email" type="email" placeholder="Email" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control name="password" type="password" placeholder="Password" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check
                        type="checkbox"
                        onClick={handleAccepted}
                        label={<>Accept Terms and Conditions</>}
                    />
                </Form.Group>

                <Form.Text className="text-danger">
                    {error}
                </Form.Text><br />

                <Button variant="primary" type="submit" disabled={!accepted}>
                    Register
                </Button><br />
                <h5 className='my-3 text-warning'>Already have an Account.Log In then!!</h5>
                <Link to='/login'> <Button variant="outline-primary">Login</Button></Link>
            </Form>

        </div>
    );
};

export default Register;