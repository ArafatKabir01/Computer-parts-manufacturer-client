import React from 'react';

const Product = ({ product }) => {
    const { name, price, img, quantity, minQuantity, text } = product
    return (
        <div className=" justify-self-center card card-compact w-96 shadow-xl bg-slate-700">
            <figure><img className='pt-5' src={img} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title">{name}</h2>
                <p>price Per Unit: ${price}</p>
                <p>Available quantity: {quantity}</p>
                <p>Minimum order quantity: {minQuantity}</p>
                <p>{text}</p>
                <div className="rating rating-xs">
                    <input type="radio" name="rating-5" className="mask mask-star-2 bg-orange-400" />
                    <input type="radio" name="rating-5" className="mask mask-star-2 bg-orange-400"  />
                    <input type="radio" name="rating-5" className="mask mask-star-2 bg-orange-400" />
                    <input type="radio" name="rating-5" className="mask mask-star-2 bg-orange-400" />
                    <input type="radio" name="rating-5" className="mask mask-star-2 bg-orange-400" />
                </div>
                <div className="card-actions justify-end">
                    <button className="btn btn-primary">Buy Now</button>
                </div>
            </div>

        </div>
    );
};

export default Product;