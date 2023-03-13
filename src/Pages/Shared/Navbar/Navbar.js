import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {


    const menuItems = <>
        <li className='text-black font-semibold'><Link to='/'>Home</Link></li>
        <li className='text-black font-semibold'><Link to='/about'>About</Link></li>
        <li className='text-black font-semibold'><Link to='/services'>Services</Link></li>
        <li className='text-black font-semibold'><Link to='/login'>Login</Link></li>
        {/* <li><Link to='/login'>Login</Link></li> */}
        {/* {
            user?.email ?
                <>
                    <li className='text-black font-semibold'><Link to='/orders'>Orders</Link></li>
                    <li className='text-black font-semibold'>
                        <button onClick={handleLogOut} className='btn-ghost'>Sign Out</button>
                    </li>
                </>
                :
                <li className='text-black font-semibold'><Link to='/login'>Login</Link></li>
        } */}
    </>


    return (
        <div className="navbar bg-base-100 px-6 py-4">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-green-400 rounded-box w-52">
                        {menuItems}
                    </ul>
                </div>
                <Link to='/' className="btn btn-ghost normal-case text-3xl font-bold text-red-700 font-serif">Law Firm</Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {menuItems}
                </ul>
            </div>
            <div className="navbar-end">
                <Link to='' className="btn bg-red-700 rounded-full  border-none">Get started</Link>
            </div>
        </div>
    );
};

export default Navbar;