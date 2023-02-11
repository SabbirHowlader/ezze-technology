import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../Image/etl_logo_white.png'

const Navbar = () => {

    const menuItem =
        <React.Fragment>
            <li><Link to="/">PORTFOLIO</Link></li>
            <li><Link to="/">ABOUT US</Link></li>
            <li><Link to="/">PRESS</Link></li>
            <li><Link to="/">CAREER</Link></li>
            <li><Link to="/">CONTRACT</Link></li>
        </React.Fragment>

    return (
        <div className="navbar bg-neutral">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn lg:hidden">
                         <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h7" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        {menuItem}
                    </ul>
                </div>
                <div className='ml-10 '>
                    <Link to="/"><img className='right-0' src={logo} alt="" style={{width: 130 }} /></Link>
                </div>
            </div>
            <div className="navbar-end hidden lg:flex mr-5">
                <ul className="menu menu-horizontal text-white gap-1 px-1">
                    {menuItem}
                </ul>
            </div>
        </div>
    );
};

export default Navbar;