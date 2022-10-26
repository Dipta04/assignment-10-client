import React from 'react';
import { useLoaderData } from 'react-router-dom';
import LeftSide from '../LeftSide/LeftSide';
import RightSide from '../RightSide/RightSide';

const Course = () => {
    const AllCourses = useLoaderData();
    return (
        <div className='d-lg-flex justify-content-center '>
            <div>
                {
                    AllCourses.map(c => <LeftSide
                    key={c.id}
                    c={c}
                    ></LeftSide>)
                }
            </div>
            <div>
            <h2>{AllCourses.length}</h2>
            {
                AllCourses.map(course => <RightSide
                key={course.id}
                course={course}
                ></RightSide>)
            }
            </div>
        </div>
    );
};

export default Course;