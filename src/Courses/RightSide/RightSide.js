import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';

const RightSide = ({ course }) => {
    const { id, title, price, image, duration } = course;

    return (
        <div>
            <Card className='mx-auto mb-2'>
                <Card.Img variant="top" src={image}/>
                <Card.Body>
                    <Card.Title>{title}</Card.Title>
                    <Card.Text>Price:${price}</Card.Text>
                    <Card.Text>Duration:{duration}</Card.Text>
                    <Link to={`/courses/${course.id}`}><Button variant="primary">Details</Button></Link>
                </Card.Body>
            </Card>

        </div>
    );
};

export default RightSide;