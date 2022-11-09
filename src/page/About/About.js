import React from 'react';

const About = () => {
    return (
        <div className="hero min-h-content bg-base-200 mt-32 py-5">
            <div className="hero-content grid md:grid-cols-2">
                <div className='md:px-10'>
                    <img src="./about.jpg" className="rounded-lg shadow-2xl border-solid border-4 border-info" alt="About" />
                </div>
                <div>
                    <h1 className="text-5xl font-bold uppercase text-center md:text-left">About Us</h1>
                    <p className="py-6 text-xl text-justify">Dentures actually improve our smiles and overall apperance. Not only they make us look better, but also make our life easier. Enjoy simple things as food, conversation and smile. Forget about uncomfortable social encounters. Our focus is on your overall well being and helping you achieve optimal health and esthetics. </p>
                </div>
            </div>
        </div>
    );
};

export default About;