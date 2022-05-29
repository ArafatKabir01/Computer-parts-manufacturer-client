import React, { useEffect, useState } from 'react';

const Alluser = () => {
    const [users, setUsers] = useState([])
    useEffect(() => {
        fetch('http://localhost:5000/user')
            .then(res => res.json())
            .then(data => setUsers(data))
    }, [])
    return (
        <div>
            <table class="table w-full">

                <thead>
                    <tr>
                        <th>User Email</th>
                        
                        
                        <th>Make Admin</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        users.map(user => <tr class="hover"><td>{user.email}</td><td><button className="btn btn-primary">Make Admin</button></td></tr>)
                    }
                </tbody>



            </table>

        </div>
    );
};

export default Alluser;