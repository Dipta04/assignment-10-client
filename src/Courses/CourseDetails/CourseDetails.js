import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const CourseDetails = () => {

    const courseDetail = useLoaderData();
    const { id, title, price, image, duration, details } = courseDetail;

    return (
        <div className='container'>

            <Card className='mx-auto mb-2 w-50 mt-2'>
                <Card.Img className='img-fluid' style={{ height: '450px' }} variant="top" src={image} />
                <Card.Body>
                    <Card.Title>{title}</Card.Title>
                    <Card.Title>{details}</Card.Title>
                    <Card.Text>Price:${price}</Card.Text>
                    <Card.Text>Duration:{duration}</Card.Text>
                    
                  <Link to='/courses'><Button variant="primary">Go to all</Button></Link>
                </Card.Body>
            </Card>

        </div>
    );
};

export default CourseDetails;