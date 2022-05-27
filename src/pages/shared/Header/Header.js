import React from 'react';
import { Link } from 'react-router-dom';
const Header = () => {
    const manueItems =<>
        <li><Link to='/'>Home</Link></li>
        <li><Link to='/about'>About</Link></li>
        <li><Link to='/login'>Login</Link></li>
        <li><Link to='/signup'>SignUp</Link></li>
    </>   
    
    return (
        <div class="navbar bg-base-100">
            <div class="navbar-start pr-4 flex justify-center">
                <div class="dropdown">
                    <label tabindex="0" class="btn btn-ghost lg:hidden  ml-8">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabindex="0" class="ml-8 menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                       {manueItems}
                    </ul>
                </div>
                <Link to='/' class="btn btn-ghost normal-case text-xl">COMPUTER BUILDER</Link>
            </div>
            <div class="navbar-center hidden lg:flex ml-8">
                <ul class="menu menu-horizontal p-0">
                {manueItems}
                </ul>
            </div>
        </div>
    );
};

export default Header;