import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, Outlet } from 'react-router-dom';
import auth from '../../firebase.init';
import useAdmin from '../../Hooks/UseAdmin';

const DashBoard = () => {
    const [user] = useAuthState(auth);
    const [admin] = useAdmin(user);
    return (
        <div>
            <div class="drawer drawer-mobile">
                <input id="my-drawer-2" type="checkbox" class="drawer-toggle" />
                <div class="drawer-content ">
                    {/* <!-- Page content here --> */}
                    <h2 className='text-5xl text-purple-500'>Dashboard</h2>
                    <Outlet></Outlet>
                    <label for="my-drawer-2" class="btn btn-primary drawer-button lg:hidden">Open drawer</label>

                </div>
                <div class="drawer-side">
                    <label for="my-drawer-2" class="drawer-overlay"></label>
                    <ul class="menu p-4 overflow-y-auto w-80 bg-base-100 text-base-content">
                        {/* <!-- Sidebar content here --> */}
                        <li> <Link to="/dashboard">My Orders</Link></li>
                        <li><Link to="/dashboard/myProfile">My Profile</Link></li>
                        <li><Link to="/dashboard/myReview">My Review</Link></li>
                        { admin && <li><Link to="/dashboard/manageOrder">Manage All Orders</Link></li>}   
                        { admin && <li><Link to="/dashboard/addProduct">Add Product</Link></li>}   
                        {/* <li><Link to="/dashboard/makeAdmin">Make Admin</Link></li>    */}
                        { admin && <li><Link to="/dashboard/allUser">All User</Link></li> }  
                        { admin &&<li><Link to="/dashboard/manageProduct">Manage Products</Link></li> }  
                        
                    </ul>

                </div>
            </div>
        </div>
    );
};

export default DashBoard;