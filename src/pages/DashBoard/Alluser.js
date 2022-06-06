import React from 'react';
import { useQuery } from 'react-query';



const Alluser = () => {
    const { data: users, isLoading, refetch } = useQuery('users', () => fetch('https://floating-sea-12317.herokuapp.com/user', {
        method: 'GET',
        headers:{
            authorization: `Bearer ${localStorage.getItem('accessToken')}`
        }
    }).then(res => res.json()));
    if (isLoading) {
        return <></>
    }
    // const { email, role } = user;
    const makeAdmin = user => {
        fetch(`https://floating-sea-12317.herokuapp.com/user/admin/${user.email}`, {
            method: 'PUT',
            headers: {
                authorization: `Bearer ${localStorage.getItem('accessToken')}`
            }
        })
            .then(res => {
                if(res.status === 403){
                    // toast.error('Failed to Make an admin');
                }
                return res.json()})
            .then(data => {
                if (data.modifiedCount > 0) {
    
                    window.confirm(`Make admin?`)
                    window.location.reload()
                }

            })
            
        
    }
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
                        users.map(user => <tr class="hover"><td>{user.email}</td><td>{ user.role !== "admin" && <button   onClick={()=>makeAdmin(user)} className="btn btn-primary">Make Admin</button>}</td></tr>)
                    }
                </tbody>



            </table>

        </div>
    );
};

export default Alluser;