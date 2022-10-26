import React from 'react';
import ListGroup from 'react-bootstrap/ListGroup';
import { Link } from 'react-router-dom';

const LeftSide = ({ c }) => {
    const { title,id } = c;
    return (
        <div className='w-100 mt-5'>

            <ListGroup className='me-5'>
                <ListGroup.Item><Link  to={`/courses/${c.id}`}>{title}</Link></ListGroup.Item>
            </ListGroup>


        </div>
    );
};

export default LeftSide;