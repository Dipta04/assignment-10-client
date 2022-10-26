import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';



const Premium = () => {
    const aboutCourse = useLoaderData();
    const { title, image, price,duration } = aboutCourse;
    
    return (
        <div>

            <div className='container'>
                
                <Card className='mx-auto mb-2 w-50 mt-2'>
                <h2 className='text-warning'>Congratulations!! for being a premium customer</h2>
                <Card.Title>{title}</Card.Title>
                    <Card.Img className='img-fluid' style={{ height: '450px' }} variant="top" src={image} />
                    <Card.Body>
                        <Card.Text className='text-dark'>Price:${price}</Card.Text>
                        <Card.Text className='text-dark'>Duration:{duration}</Card.Text>

                        <Link to='/courses'><Button variant="primary">Go to all</Button></Link>
                    </Card.Body>
                </Card>
             </div>

            </div>
            );
};

            export default Premium;