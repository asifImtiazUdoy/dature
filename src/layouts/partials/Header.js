import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';
import logo from '../../logo.png'

const Header = () => {
    const {user, logOut} = useContext(AuthContext);

    const handleLogOut = () => {
        logOut()
        .then()
        .catch( e => console.error(e))
    }

    const menu = <>
        <li className='px-3'><Link className='btn btn-sm btn-outline btn-info px-4 py-2 uppercase' to="/">Home</Link></li>
        <li className='px-3'><Link className='btn btn-sm btn-outline btn-info px-4 py-2 uppercase' to="/blog">Blog</Link></li>
        <li className='px-3'><Link className='btn btn-sm btn-outline btn-info px-4 py-2 uppercase' to="/services">Services</Link></li>
    </>;
    return (
        <div className="drop-shadow-xl h-12 fixed w-full z-10">
            <div className="navbar bg-base-100 md:px-20">
                <div className="navbar-start">
                    <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        {
                            menu
                        }
                    </ul>
                    </div>
                    <Link className="normal-case text-xl"><img src={logo} alt="Logo" width="120" /></Link>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal p-0">
                    {
                        menu
                    }
                    </ul>
                </div>
                <div className="navbar-end">
                    {
                        user?.email ? 
                        <button onClick={handleLogOut} className="btn btn-sm px-4 py-2">Logout</button>
                        :
                        <Link to="/login" className="btn btn-sm px-4 py-2">Login</Link>
                    }
                </div>
            </div>
        </div>
    );
};

export default Header;