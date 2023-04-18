import React from "react";
import { Outlet, NavLink, useNavigate } from "react-router-dom";
import { useAuth } from "../../hooks/useAuth"; 
import MyButton from "../UI/button/MyButton";


const Layout = () => {
    const {signout} = useAuth();
    const navigate = useNavigate();
    return (
        <>
        <header className='navbar'>
        <MyButton onClick={() => signout(() => navigate('/', {replace: true}))} style={{backgroundColor: 'white', display: 'flex', justifyContent: 'start' }}>Log out</MyButton>
        <div className='navbar__links'>
            <NavLink to='/about'>About us </NavLink>
            <NavLink to='/posts'>About Van.Businka</NavLink>
        </div>
      </header>

      <Outlet />

      <footer className="footer">2023</footer>
      </>
    )
}

export default Layout;