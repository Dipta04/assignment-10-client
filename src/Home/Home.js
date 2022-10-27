import React from 'react';
import background from "../images/assign-2.png";
import Card from 'react-bootstrap/Card';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <div>

            <Card className="bg-light text-dark">
                <Card.ImgOverlay className='d-lg-flex'>
                    <div className='mt-5 me-5'>
                    <Card.Title className='fw-bolder text-primary fst-italic'><h2>Happy Learning</h2></Card.Title>
                    <Card.Text>
                       <p className='text-info fw-bold'>In this learning platform we offer you online based courses.</p> 
                      <p className='text-info fw-bold'> Where you can learn about pogramming languages and many more.Where you can gather more skill.</p>
                      <p className='text-info fw-bold'>This E-learning platform will give you the best service with a resonable price.</p>
                      <p className='text-info fw-bold'>If you want to learn more than please get the premium courses of our platform</p>
                      <p className='text-info fw-bold'>And start your special journey with us.</p>
                      <p className='text-info fw-bold'>Thank you.</p>
                      <br></br>
                      <Link to='/courses'><Button className='mt-2'>Go to courses</Button></Link>
                    </Card.Text>
                    </div>
                    <div>
                    <Card.Img className='w-100' style={{height:"800px"}} src={background} alt="Card image"/>
                    </div>
                </Card.ImgOverlay>
            </Card>

        </div>
    );
};

export default Home;