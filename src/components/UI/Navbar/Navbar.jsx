import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
    return (
        <header className='navbar'>
        <div className='navbar__links'>
            <NavLink to='/about'>About us </NavLink>
            <NavLink to='/posts'>About Van.Businka</NavLink>
        </div>
      </header>
    );
};

export default Navbar;