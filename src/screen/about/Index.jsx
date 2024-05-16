import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const About = () => {
    const location = useLocation();
    console.log(location, "loca");
    return (
        <>
            <div className='bg-blue-500 text-white p-4'>
                {location.state.id}
            </div>
            <div className="">
                <Link to={'/'}>Home</Link>
            </div>
        </>

    )
}

export default About
