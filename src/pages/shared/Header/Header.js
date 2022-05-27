import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { signOut } from 'firebase/auth'
import { Link } from 'react-router-dom';
import auth from '../../../firebase.init';
const Header = () => {
    const logOut = () =>{
        signOut(auth)
        
    }
    const [user, loading, error] = useAuthState(auth);
    const manueItems =<>
        <li><Link to='/'>Home</Link></li>
        <li><Link to='/product'>Product</Link></li>
        <li><Link to='/about'>About</Link></li>
        <li><Link to='/order'>Order</Link></li>
        <li>{user ? <></> : <Link to='/login'>Login</Link>}</li>
        <li>{user ? <button onClick={logOut} class="btn btn-outline btn-warning">Log Out</button> : <Link to='/signup'>SignUp</Link>}</li>
    </>   
    
    return (
        <div className="navbar bg-base-100">
            <div className="navbar-start pr-4 flex justify-center">
                <div className="dropdown">
                    <label tabindex="0" className="btn btn-ghost lg:hidden  ml-8">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabindex="0" className="ml-8 menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                       {manueItems}
                    </ul>
                </div>
                <Link to='/' className="btn btn-ghost normal-case text-xl">COMPUTER BUILDER</Link>
            </div>
            <div className="navbar-center hidden lg:flex ml-8">
                <ul className="menu menu-horizontal p-0">
                {manueItems}
                </ul>
            </div>
        </div>
    );
};

export default Header;