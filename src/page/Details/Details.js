import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import { baseUrl } from '../../Helper/Helper';

const Details = () => {
    const [active, setActive] = useState(0);
    const [review, setReview] = useState([]);

    const service = useLoaderData();
    const {_id, name, image, description, price, rating} = service;

    useEffect( () => {
        fetch(`${baseUrl}/reviews/${_id}`)
            .then(res =>  res.json())
            .then(data => {
                setReview(data);
            })
    } ,[_id]);

    const handleSubmit = (event) => {
        event.preventDefault();
        const form = event.target;
        const r_name = form.name.value;
        const review = form.review.value;

        fetch(`${baseUrl}/review`, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify({
                service: _id,
                name: r_name,
                review: review
            })
        })
        .then(res => res.json())
        .then(data => {
            console.log(data)
            if(data.acknowledged){
                form.reset();
                alert('Review has been sent');
            }
        })
        .catch(e => console.error(e))
    }

    return (
        <div>
            <div className="hero min-h-content bg-base-100 py-24">
                <div className="hero-content grid md:grid-cols-2 items-start">
                    <div className='md:px-10'>
                        <img src={image} className="rounded-lg shadow-2xl border-solid border-4 border-info" alt="About" />
                    </div>
                    <div>
                        <h2 className="text-3xl font-bold uppercase text-center md:text-left">{name}</h2>
                        <p className="py-2 mt-4 text-xl text-justify"><span className='font-bold'>Price:</span> ${price}</p>
                        <p className="py-2 text-xl text-justify"><span className='font-bold'>Rating:</span> <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-6 h-6 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path></svg>{rating}</p>
                        <p className="py-2 text-xl text-justify">{description}</p>
                    </div>
                </div>
            </div>
            <div className="tabs md:mx-20 mb-2 tab-bordered">
                <button onClick={() => setActive(0)} className={`tab tab-bordered text-xl font-bold border-b-transparent -mb-px ${active === 0 ? 'tab-active':''}`}>All Reviews</button>
                <button onClick={() => setActive(1)} className={`tab tab-bordered text-xl font-bold border-b-transparent -mb-px ${active === 1 ? 'tab-active':''}`}>Give a Review</button>
            </div>
            <div className="tab-content md:mx-20 mb-20">
                <div className={active === 1 ? 'hidden':''}>
                    {
                        review.map(item => {
                            return (
                                <div key={item._id} className='border border-2 m-4 p-4'>
                                    <div className="font-bold">{item.name}</div>
                                    <div className="text-sm opacity-50">{item.review}</div>
                                </div>
                            )
                        })
                    }
                </div>
                <div className={active === 0 ? 'hidden':''}>
                    <h3 className="text-3xl font-bold uppercase text-center md:text-left my-8">Write Your Review!</h3>
                    <form onSubmit={handleSubmit}>
                        <input type="text" name='name' placeholder="Type Your Name" className="input input-bordered w-full mb-4 rounded-sm" required/>
                        <textarea name='review' className="textarea textarea-bordered rounded-sm w-full" placeholder="Type Your Review"></textarea>
                        <button type='submit' className="btn btn-primary mt-4 rounded-lg">Submit</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Details;