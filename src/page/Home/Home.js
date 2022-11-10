import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import About from '../About/About';
import Service from '../Service/Service';
import Stats from '../Stats/Stats';

const Home = () => {
    const services = useLoaderData();
    console.log(services);
    return (
        <div>
            <div className="hero min-h-screen" style={{ backgroundImage: `url("./banner.jpg")` }}>
                <div className="hero-overlay bg-opacity-60"></div>
                    <div className="hero-content text-center text-neutral-content">
                        <div className="max-w-md">
                            <h1 className="mb-5 text-5xl text-white font-bold">Nothing Beats a Great Smile</h1>
                            <Link className='btn btn-info shadow-xl px-4 py-2 uppercase mt-4' to="/services">Our All Services</Link>
                        </div>
                    </div>
                </div>
                <div className="px-20 -mt-28 grid md:grid-cols-3">
                    {
                        services.map( (service, index) => <Service key={service._id} service={service} index={index}></Service>)
                    }
                </div>
                <About></About>
                <Stats></Stats>
        </div>
    );
};

export default Home;