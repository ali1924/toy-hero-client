import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark, faHomeLgAlt } from '@fortawesome/free-solid-svg-icons';
import { AuthContext } from '../../Provider/AuthProvider';
// import logo from '../../../assets/logo.png';
import logo from '../../../assets/logo.jpg';
const NavBar = () => {
    const { user, logOut } = useContext(AuthContext);
    const [isOpen, setIsOpen] = useState(false);
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
            <li><Link to='/' className='text-white text-xl font-medium hover:text-accent'>Home</Link></li>
            <li><Link to='/toys' className='text-white text-xl font-medium hover:text-accent'>All Toys</Link></li>
            <li><Link to='/blog' className='text-white text-xl font-medium hover:text-accent'>Blog</Link></li>
            {
                user?.email
                    ? <>
                        <li><Link to='/my-toys' className='text-white text-xl font-medium hover:text-accent'>My Toys</Link></li>
                        <li><Link to='/add-toy' className='text-white text-xl font-medium hover:text-accent'>Add A Toy</Link></li>
                        <li><button onClick={handleLogOut} className='text-white text-xl font-medium hover:text-accent'>Logout</button></li>
                    </>
                    : <li><Link to='/login' className='text-white text-xl font-medium hover:text-accent'>Login</Link></li>
            }
        </>
    return (
        <div className="navbar bg-black w-full lg:px-12 h-20">
            <div className="navbar-start">
                <div className='dropdown'>
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <span onClick={() => setIsOpen(!isOpen)}>
                            {
                                isOpen ? <FontAwesomeIcon className='text-white w-12 h-12 mr-2' icon={faXmark}></FontAwesomeIcon>
                                    : <FontAwesomeIcon className='text-white w-12 h-12 mr-2' icon={faHomeLgAlt}></FontAwesomeIcon>
                            }
                        </span>
                    </label>
                    <ul tabIndex={0} className={`${isOpen ?'menu menu-compact dropdown-content mt-4 p-2 shadow bg-black rounded-box w-52 text-2xl':'hidden'}`}>
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
                    className="btn btn-ghost normal-case text-white text-xl font-medium hover:text-accent"
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
                <div className="tooltip hover:tooltip-open tooltip-left text-white text-xl font-medium hover:text-accent" data-tip={user?.displayName}>
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