import React from 'react';
import { PhotoProvider, PhotoView } from 'react-photo-view';
import { Link } from 'react-router-dom';

const Service = ({service, index}) => {
    const {_id, name, image, description, price} = service;
    return (
        <div className={`card card-compact bg-base-100 shadow-xl ${index !== 1 ? 'md:scale-75':'md:scale-100'} mb-5`}>
            <figure>
                <PhotoProvider>
                    <PhotoView key={_id} src={image}>
                        <img style={{ objectFit: 'cover' }} className='w-full cursor-pointer' src={image} alt="Service" />
                    </PhotoView>
                </PhotoProvider>
            </figure>
            <div className="card-body">
                <h2 className="card-title justify-center">{name}</h2>
                <p>{description}</p>
                <div className="card-actions justify-between items-center">
                    <span className="badge badge-warning badge-outline text-2xl p-4">${price}</span>
                    <Link to={`/service/${_id}`} className="btn btn-primary">View Details</Link>
                </div>
            </div>
        </div>
    );
};

export default Service;