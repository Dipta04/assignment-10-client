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
                    <Card.Title className='fw-bold text-info'>Happy Learning</Card.Title>
                    <Card.Text>
                       <p>In this learning platform we offer you online based courses.</p> 
                      <p> Where you can learn about pogramming languages and many more.Where you can gather more skill.</p>
                      <p>This E-learning platform will give you the best service with a resonable price.</p>
                      <p>If you want to learn more than please get the premium courses of our platform</p>
                      <p>And start your special journey with us.</p>
                      <p>Thank you.</p>
                      <br></br>
                      <Link to='/courses'><Button className='mt-2'>Go to courses</Button></Link>
                    </Card.Text>
                    </div>
                    <div>
                    <Card.Img className='w-75' style={{height:"800px"}} src={background} alt="Card image"/>
                    </div>
                </Card.ImgOverlay>
            </Card>

        </div>
    );
};

export default Home;