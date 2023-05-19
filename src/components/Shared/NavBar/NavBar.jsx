import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Provider/AuthProvider';
// import logo from '../../../assets/logo.png';
import logo from '../../../assets/logo.jpg';
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
            <li><Link to='/toys'>All Toys</Link></li>
            <li><Link to='/blog'>Blog</Link></li>
            {
                user?.email
                    ? <>
                        <li><Link to='/my-toys'>My Toys</Link></li>
                        <li><Link to='/add-toy'>Add A Toy</Link></li>
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
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52 text-2xl ">
                        {
                            navItems
                        }
                    </ul>
                </div>
                <img
                    className='w-24 h-12 bg-slate-300'
                    src={logo}
                    alt=""
                />
                <Link
                    className="btn btn-ghost normal-case text-2xl"
                >Toy Hero</Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1 text-2xl ">
                    {
                        navItems
                    }
                </ul>
            </div>
            <div className="navbar-end text-2xl">
                <div className="tooltip hover:tooltip-open tooltip-left" data-tip={user?.displayName}>
                    {
                        user && <div className="avatar">
                            <div className="w-14 h-14 rounded-full tooltip hover:tooltip-open tooltip-left">
                                <img
                                    src="https://i.ibb.co/R6Z2nFM/55.jpg"
                                />
                            </div>
                        </div>
                    }
                </div>
            </div>
        </div>
    );
};

export default NavBar;