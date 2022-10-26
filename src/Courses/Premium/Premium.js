import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { useContext } from 'react';
import { AuthContext } from '../../Contexts/AuthProvider/AuthProvider';

const Premium = () => {
    const aboutCourse = useLoaderData();
    const { title, image, price,duration } = aboutCourse;
    const {user} = useContext(AuthContext);
    return (
        <div>

            <div className='container'>
                <h2 className='text-warning'>Congratulations!! for being a premium customer {user?.displayName}</h2>
                <Card className='mx-auto mb-2 w-50 mt-2'>
                    <Card.Img className='img-fluid' style={{ height: '450px' }} variant="top" src={image} />
                    <Card.Body>
                        <Card.Title>{title}</Card.Title>
                        <Card.Text>Price:${price}</Card.Text>
                        <Card.Text>Duration:{duration}</Card.Text>

                        <Link to='/courses'><Button variant="primary">Go to all</Button></Link>
                    </Card.Body>
                </Card>
             </div>

            </div>
            );
};

            export default Premium;