import React from 'react';

const Product = ({ product }) => {
    const { name, price, img, quantity, minQuantity, text } = product
    return (
        <div class=" justify-self-center card card-compact w-96 shadow-xl bg-slate-700">
            <figure><img className='pt-5' src={img} alt="Shoes" /></figure>
            <div class="card-body">
                <h2 class="card-title">{name}</h2>
                <p>price Per Unit: ${price}</p>
                <p>Available quantity: {quantity}</p>
                <p>Minimum order quantity: {minQuantity}</p>
                <p>{text}</p>
                <div class="rating rating-xs">
                    <input type="radio" name="rating-5" class="mask mask-star-2 bg-orange-400" />
                    <input type="radio" name="rating-5" class="mask mask-star-2 bg-orange-400" checked />
                    <input type="radio" name="rating-5" class="mask mask-star-2 bg-orange-400" />
                    <input type="radio" name="rating-5" class="mask mask-star-2 bg-orange-400" />
                    <input type="radio" name="rating-5" class="mask mask-star-2 bg-orange-400" />
                </div>
                <div class="card-actions justify-end">
                    <button class="btn btn-primary">Buy Now</button>
                </div>
            </div>

        </div>
    );
};

export default Product;