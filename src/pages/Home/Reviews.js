import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import Review from './Review';

const Reviews = () => {
    const [reviews , setReviews] = useState([])
    useEffect(()=>{
        fetch('http://localhost:5000/reviews')
        .then(res => res.json())
        .then(data => setReviews(data.reverse().slice(10)))
    },[])

    
    return (
        <div className="max-w-xxl">
            <h2 className='justify-items-stretch text-center text-4xl pb-8 pt-8 text-blue-500 font-bold'>Reviews</h2><br/><br/><br/>
            <div className=' grid grid-cols-1 md:grid-cols-4 pb-8 gap-1.5'>
            {
                 reviews.map(review => <Review key={review._id} review={review}></Review>)
             }
            </div>
            

             
        </div>
    );
};

export default Reviews;