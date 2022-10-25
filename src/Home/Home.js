import React from 'react';
import background from "../images/assign-2.png";
import Card from 'react-bootstrap/Card';
import { Button } from 'react-bootstrap';

const Home = () => {
    return (
        <div>

            <Card className="bg-light text-dark">
                <Card.ImgOverlay>
                    <Card.Title>Happy Learning</Card.Title>
                    <Card.Text>
                        In this learning platform we offer you online based courses.Where you can learn about
                        pogramming languages and many more.Where you can gather more skill.<br></br>
                        <Button className='mt-2'>Go to courses</Button>
                    </Card.Text>
                    <Card.Img className='w-50' style={{height:"800px"}} src={background} alt="Card image"/>
                </Card.ImgOverlay>
            </Card>

        </div>
    );
};

export default Home;