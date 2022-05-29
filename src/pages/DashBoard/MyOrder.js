import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { set } from 'react-hook-form';
import auth from '../../firebase.init';

const MyOrder = () => {
    const [user] = useAuthState(auth)
    const [orders, setOrders] = useState([])
    useEffect(() => {
        fetch(`http://localhost:5000/myorders?email=${user.email}`, {
            method: 'GET',
            headers: {
                'authorization': `Bearer ${localStorage.getItem('accessToken')}`
            }
        })
            .then(res => res.json())
            .then(data => setOrders(data))
    }, [user])
    const handleDelete = id => {
        const proceed = window.confirm('are you sure?')
        console.log(id)
        if (proceed) {
            const url = `http://localhost:5000/orderParts/${id}`
            fetch(url, {
                method: "DELETE"
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data)
                    const remaining = orders.filter(order => order._id !== id);
                    setOrders(remaining);
                })

        }
    }
    return (
        <div>
            <h2 className='p-5'>MyOrder {orders.length}</h2>
            <div class="overflow-x-auto">
                <table class="table w-full">

                    <thead>
                        <tr>
                            <th>Component Name</th>
                            <th>Total Quantity</th>
                            <th>Price Per Unit</th>
                            <th>Total Amount</th>
                            <th></th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            orders.map(order => <tr class="hover"><td>{order.productName}</td><td>{order.quantity}</td><td>{order.price}</td><td>{order.price * order.quantity}</td><td><button onClick={() => handleDelete(order._id)} className="btn btn-primary">Cancel</button></td></tr>)

                        }
                    </tbody>



                </table>
            </div>
        </div>
    );
};

export default MyOrder;