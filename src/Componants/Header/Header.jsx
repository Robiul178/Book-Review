// import React from 'react';

import { NavLink } from "react-router-dom";

const Header = () => {
    const links = <>

        <li><NavLink
            to="/"
            className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "active" : ""
            }
        >
            Home
        </NavLink></li>
        <li><NavLink
            to="/listbooks"
            className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "active" : ""
            }
        >
            List Books
        </NavLink></li>

        <li><NavLink
            to="/pageToRead"
            className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "active" : ""
            }
        >
            Page To Read
        </NavLink></li>
        <li><NavLink
            to="/blogs"
            className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "active" : ""
            }
        >
            Blogs
        </NavLink></li>

    </>

    return (
        <div className="navbar bg-base-100 ">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </div>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        {links}
                    </ul>
                </div>
                <div className="text-3xl font-bold">
                    <NavLink to='/'>Book Vibe</NavLink>
                </div>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1 text-xl">
                    {links}
                </ul>
            </div>
            <div className="navbar-end gap-4">
                <button className="btn btn-outline">Sing In</button>
                <button className="btn btn-outline btn-primary">Sing Up</button>
            </div>
        </div >
    );
};

export default Header;