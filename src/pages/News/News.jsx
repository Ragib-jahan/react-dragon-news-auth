import React from 'react';
import RightSideNav from '../Shared/RightSideNav/RightSideNav';
import { useParams } from 'react-router-dom';
import Navbar from '../Shared/Navbar/Navbar';

const News = () => {

    const {id} = useParams();
    return (
        <div>
            <Navbar></Navbar>
            <div className='grid grid-cols-4'>
                <div className='col-span-3'>
                    <h2>this is news</h2>
                    {id}
                </div>

                <div>
                    <RightSideNav></RightSideNav>
                </div>
            </div>
        </div>
    );
};

export default News;