import React from 'react';
import { useLoaderData } from 'react-router-dom';

const MyReview = () => {
    const {name, review} = useLoaderData();
    return (
        <div className='border border-2 m-4 p-4'>
            <div className="font-bold">{name}</div>
            <div className="text-sm opacity-50">{review}</div>
        </div>
    );
};

export default MyReview;