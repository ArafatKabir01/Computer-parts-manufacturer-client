import React, { useEffect, useState } from 'react';

const ManageOrder = () => {
    const [allorders, setAllorders] = useState([])
    useEffect(() => {
        fetch('http://localhost:5000/orderParts')
            .then(res => res.json())
            .then(data => setAllorders(data))
    }, [])
    return (
        <div>
            <h2 className='p-5'>ALL Order {allorders.length}</h2>
            <div class="overflow-x-auto">
                <table class="table w-full">

                    <thead>
                        <tr>
                            <th>Component Name</th>
                            <th>Total Quantity</th>
                            <th>Email</th>
                            <th>Price Per Unit</th>
                            <th>Total Amount</th>
                            <th></th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            allorders.map(order => <tr class="hover"><td>{order.productName}</td><td>{order.quantity}</td><td>{order.email}</td><td>{order.price}</td><td>{order.price * order.quantity}</td><td><button className="btn btn-primary">Order Confirem</button></td></tr>)

                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ManageOrder;