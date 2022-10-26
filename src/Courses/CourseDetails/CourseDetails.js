import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Pdf from "react-to-pdf";
import "./pdf.css"


const ref = React.createRef();

const CourseDetails = () => {

    const courseDetail = useLoaderData();
    const { id, title, price, image, duration, details } = courseDetail;

    return (
        <div className='container'>

            <div className='d-flex'>
            <div>
            <h2 className='text-warning'>Details About The Course....</h2>
            </div>
            <div className='ms-2 mt-1'>
            <Pdf targetRef={ref} filename="code-example.pdf">
                    {({ toPdf }) => <Button variant="success" onClick={toPdf}>Generate Pdf</Button>}
            </Pdf>
            </div>
            </div>
            <Card ref={ref} className='mx-auto mb-2 w-50 mt-2'>
                <Card.Title className='fw-bold'>{title}</Card.Title>
                <Card.Img className='img-fluid' style={{ height: '450px' }} variant="top" src={image} />
                <Card.Body>
                    <Card.Title className='text-dark'>{details}</Card.Title>
                    <Card.Text className='text-dark'>Price:${price}</Card.Text>
                    <Card.Text className='text-dark'>Duration:{duration}</Card.Text>

                    <Link to='/courses'><Button variant="primary">Go to all</Button></Link><br></br>
                    <Link to={`/premium/${courseDetail.id}`}><Button variant="warning" className='text-white fw-bold mt-2'>Get Premium Access</Button></Link>

                </Card.Body>
            </Card>

        </div>
    );
};

export default CourseDetails;