import React from 'react';
import { useForm } from 'react-hook-form';

const MyReview = () => {
    const { register, handleSubmit } = useForm();
    const onSubmit = data => {
        console.log(data)
        const proceed = window.confirm(`you added ${data.name}?`)
        if(proceed){
            const url = `http://localhost:5000/review`
            fetch(url,{
                method:'POST',
                headers:{'content-type':'application/json'},
                body: JSON.stringify(data)
    
            })
            .then(res => res.json())
            .then(result => console.log(result))
            window.location.reload()

        }

    };
    
    return (
        <div>
             <div>
                <h2 className='text-center'>Make Review</h2><br />
                <form className='text-center' onSubmit={handleSubmit(onSubmit)}>
                    <input type='text' {...register("name")} placeholder='Your Name' required /><br /><br />
                    <textarea {...register("text")} placeholder='Text' required /><br /><br />
                    <button className="btn btn-primary">Submit</button>
                </form>
            </div>
        </div>
    );
};

export default MyReview;