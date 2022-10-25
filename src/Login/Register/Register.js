import React from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

const Register = () => {

    

    return (
        <div>

            <Form className='w-50 mx-auto mt-5'>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Your Name</Form.Label>
                    <Form.Control type="text" placeholder="Enter Name" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>PhotoURL</Form.Label>
                    <Form.Control type="text" placeholder="PhotoURL" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Email</Form.Label>
                    <Form.Control type="email" placeholder="Email" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" />
                </Form.Group>

                <Form.Text className="text-muted">
                        
                </Form.Text><br/>

                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>

        </div>
    );
};

export default Register;