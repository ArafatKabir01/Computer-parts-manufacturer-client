import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';

import { useForm } from "react-hook-form";

import { useNavigate, useParams } from 'react-router-dom';
import auth from '../../firebase.init';


const Order = () => {
    const navigate = useNavigate()
    const { productid } = useParams()
    const [user, loading, error] = useAuthState(auth);
    console.log(user)
    const [detailsProduct, setDtailsProduct] = useState({})
    useEffect(() => {
        console.log(productid)
        const url = `https://floating-sea-12317.herokuapp.com/order/${productid}`
        fetch(url)
            .then(res => res.json())
            .then(data => setDtailsProduct(data))
    }, []);

    const { register, handleSubmit , formState: { errors } } = useForm();
    const onSubmit = data => {
        console.log(data)
        const url = `https://floating-sea-12317.herokuapp.com/userorder`
            fetch(url,{
                method:'POST',
                headers:{'content-type':'application/json'},
                body: JSON.stringify(data)
    
            })
            .then(res => res.json())
            .then(result => console.log(result))
            
        if(data.productName && data.quantity){
            navigate('/dashboard')
        }
        
    };

    return (
        <div>
            <div className="card lg:card-side bg-base-100 shadow-xl">
                <figure> <img style={{ width: "400px" }} src={detailsProduct.img} /></figure>
                <div className="card-body">
                    <h2 className="card-title">{detailsProduct.name}</h2>
                    <p>{detailsProduct.text}</p>
                    <p>Quantity: {detailsProduct.quantity}</p>
                    <p>Minimum Order Quantity: {detailsProduct.minQuantity}</p>
                    <p>price: {detailsProduct.price}</p>

                    <div className="card-actions justify-end">
                        <label for="my-modal-6" class="btn modal-button">Parches</label>
                        <input type="checkbox" id="my-modal-6" class="modal-toggle" />
                        <div class="modal modal-bottom sm:modal-middle">
                            <div class="modal-box">
                                <figure> <img style={{ width: "200px" }} src={detailsProduct.img} /></figure>
                                <form onSubmit={handleSubmit(onSubmit)}>
                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text">Your Email</span>
                                        </label>
                                        <input {...register("email", { required: true })} type="email" value={user.email} className="input input-bordered" />
                                    </div>
                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text">Product Name</span>
                                        </label>
                                        <input {...register("productName", { required: true })} type="text" value={detailsProduct.name} className="input input-bordered" />
                                    </div>
                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text">Product price</span>
                                        </label>
                                        <input {...register("price", { required: true })} type="text" value={detailsProduct.price} className="input input-bordered" />
                                    </div>
                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text">Set Quantity</span>
                                        </label>
                                        <input {...register("quantity",{min:10}, { required: true })} type="text"  className="input input-bordered" />
                                        {errors.quantity && <span>Please Minimum Quantity upto 10</span>}
                                    </div>
                                    <div className="form-control mt-6">
                                        <button className="btn btn-primary">Confirm</button>
                                    </div>
                                </form>
                                
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Order;