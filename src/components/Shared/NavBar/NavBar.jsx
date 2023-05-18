import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Provider/AuthProvider';
const NavBar = () => {
    const { user, logOut } = useContext(AuthContext);
    const handleLogOut = () => {
        logOut()
            .then(() => {
                console.log('logout successfully')
            })
            .catch(error => {
                const errorMessage = error.message;
                console.log(errorMessage);
            })
    }
    const navItems =
        <>
          <li><Link to='/'>Home</Link></li>
          <li><Link to='/all-toys'>All Toys</Link></li>
          <li><Link to='/blog'>Blog</Link></li>
           <li><Link to='/register'>Register</Link></li>
            {
                user?.email
                    ? <>
                        <li><Link to='/my-toys'>My Toys</Link></li>
                        <li><Link to='/add-a-toy'>Add A Toy</Link></li>
                        <li><button onClick={handleLogOut}>Logout</button></li>
                    </>
                    : <li><Link to='/login'>Login</Link></li>
            }
        </>
    return (
        <div className="navbar bg-base-200">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        {
                            navItems
                        }
                        <li><Link to='/profile'>User Profile</Link></li>
                    </ul>
                </div>
                <a className="btn btn-ghost normal-case text-xl">Toy Hero</a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {
                        navItems
                    }
                </ul>
            </div>
            <div className="navbar-end">
                {
                    user && <>
                        <span className='text-2xl'
                            title={`${user.displayName}`}
                        >{user.email}</span>
                    </>
                }
                <a className="btn">User Profile</a>
            </div>
        </div>
    );
};

export default NavBar;