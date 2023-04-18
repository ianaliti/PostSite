import React from "react";
import { Link, Outlet } from "react-router-dom";
import classes from'./About.module.css'

const About = () => {
    return (
        <div>
            <h1 className={classes.MyH1}>
                Our Team!
            </h1>
            <p>Who we are</p>
            <ul>
                <li><Link to='contacts'>Our contacts</Link></li>
                <li><Link to='team'>Bebs, Businka and us</Link></li>
            </ul>
            
            <Outlet />
        </div>
    )
}

export default About;

