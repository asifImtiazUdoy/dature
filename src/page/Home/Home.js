import React from 'react';
import { Link } from 'react-router-dom';
import About from '../About/About';
import Stats from '../Stats/Stats';
import { PhotoProvider, PhotoView } from 'react-photo-view';

const Home = () => {
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
                    <div className="card card-compact bg-base-100 shadow-xl md:scale-75 mb-5">
                        <figure>
                            <PhotoProvider>
                                <PhotoView key="1" src="https://placeimg.com/400/225/arch">
                                    <img style={{ objectFit: 'cover' }} className='w-full cursor-pointer' src="https://placeimg.com/400/225/arch" alt="Shoes" />
                                </PhotoView>
                            </PhotoProvider>
                        </figure>
                        <div className="card-body">
                            <h2 className="card-title justify-center">Dental Calculus</h2>
                            <p>If a dog chews shoes whose shoes does he choose?</p>
                            <div className="card-actions justify-center">
                            <button className="btn btn-primary">Buy Now</button>
                            </div>
                        </div>
                    </div>
                    <div className="card card-compact bg-base-100 shadow-2xl mb-5">
                        <figure>
                            <PhotoProvider>
                                <PhotoView key="1" src="https://placeimg.com/400/225/arch">
                                    <img style={{ objectFit: 'cover' }} className='w-full cursor-pointer' src="https://placeimg.com/400/225/arch" alt="Shoes" />
                                </PhotoView>
                            </PhotoProvider>
                        </figure>
                        <div className="card-body justify-center">
                            <h2 className="card-title justify-center">Tooth Protection</h2>
                            <p>If a dog chews shoes whose shoes does he choose?</p>
                            <div className="card-actions justify-center">
                            <button className="btn btn-primary text-center">Buy Now</button>
                            </div>
                        </div>
                    </div>
                    <div className="card card-compact bg-base-100 shadow-xl md:scale-75 mb-5">
                        <figure>
                            <PhotoProvider>
                                <PhotoView key="1" src="https://placeimg.com/400/225/arch">
                                    <img style={{ objectFit: 'cover' }} className='w-full cursor-pointer' src="https://placeimg.com/400/225/arch" alt="Shoes" />
                                </PhotoView>
                            </PhotoProvider>
                        </figure>
                        <div className="card-body">
                            <h2 className="card-title justify-center">Teeth Cleaning</h2>
                            <p>If a dog chews shoes whose shoes does he choose?</p>
                            <div className="card-actions justify-center mt-2">
                            <button className="btn btn-primary">View Details</button>
                            </div>
                        </div>
                    </div>
                </div>
                <About></About>
                <Stats></Stats>
        </div>
    );
};

export default Home;