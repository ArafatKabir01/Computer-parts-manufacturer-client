import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';

const ManageProduct = () => {
    const [user] = useAuthState(auth)
    const [products, setproducts] = useState([])
    useEffect(() => {
        fetch('http://localhost:5000/parts')
        .then(res => res.json())
        .then(data => setproducts(data))
    }, [user])
    const handleDelete = id => {
        const proceed = window.confirm('are you sure?')
        console.log(id)
        if (proceed) {
            const url = `http://localhost:5000/allProduct/${id}`
            fetch(url, {
                method: "DELETE"
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data)
                    const remaining = products.filter(order => order._id !== id);
                    setproducts(remaining);
                })

        }
    }
    return (
        <div>
            <h2 className='p-5'>MyOrder {products.length}</h2>
            <div class="overflow-x-auto">
                <table class="table w-full">

                    <thead>
                        <tr>
                            <th>Component Name</th>
                            <th>Price Per Unit</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            products.map(product => <tr class="hover"><td>{product.name}</td><td>{product.price}</td><td><button onClick={() => handleDelete(product._id)} className="btn btn-primary">Delete</button></td></tr>)

                        }
                    </tbody>



                </table>
            </div>
            </div>
            );
};

            export default ManageProduct;