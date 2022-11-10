import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';
import { baseUrl } from '../../Helper/Helper';

const MyReview = () => {
    const [review, setReview] = useState([]);
    const {user} = useContext(AuthContext);

    useEffect( () => {
        fetch(`${baseUrl}/reviews?email=${user?.email}`)
        .then(res => res.json())
        .then(data => setReview(data))
    }, [user?.email])
    
    return (
        <div className="py-20">
            {
                review.map(item => {
                    return (
                        <div key={item._id} className='border border-2 m-4 p-4'>
                            <div className="font-bold">{item.email}</div>
                            <div className="text-sm opacity-50">{item.review}</div>
                        </div>
                    )
                })
            }
        </div>
    );
};

export default MyReview;