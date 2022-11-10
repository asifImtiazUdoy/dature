import React from 'react';
import { useLoaderData } from 'react-router-dom';
import useTitle from '../../Hooks/useTitle';
import Service from './Service';

const AllServices = () => {
    useTitle('Services | Dature')
    const services = useLoaderData();

    return (
        <div className="grid gap-10 md:grid-cols-3 py-24 md:px-20 px-4">
            {
                services.map( (service) => <Service key={service._id} service={service} index={1}></Service>)
            }
        </div>
    );
};

export default AllServices;