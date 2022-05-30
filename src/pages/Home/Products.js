import React, { useEffect, useState } from 'react';
import Product from './Product';

const Products = () => {
    const [products , setProducts] = useState([])
    useEffect(()=>{
        fetch('https://floating-sea-12317.herokuapp.com/parts')
        .then(res => res.json())
        .then(data => setProducts(data))
    },[])
    return (
        <div className=''>
            <h2 className='justify-items-stretch text-center text-4xl pb-8 pt-8 text-blue-500 font-bold'>COMPONENTS</h2><br/><br/><br/>
            <div className=' grid grid-cols-1 md:grid-cols-4 pb-8 gap-1.5'>
            {
                products.map(product => <Product key={product._id} product={product}></Product>)
            }
            </div>
            
        </div>
    );
};

export default Products;