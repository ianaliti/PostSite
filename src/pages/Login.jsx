import React from "react";
import MyButton from "../components/UI/button/MyButton";
import MyInput from "../components/UI/input/MyInput";
import { useLocation, useNavigate } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";
import classes from './Login.module.css'

const Login = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const {signin} = useAuth();

    const fromPage = location.state?.from?.pathname || '/';

    const handleSubmit = (event) => {
        event.preventDefault();
        const form = event.target; 
        const user = form.username.value;
        
        signin(user, () => navigate(fromPage, { replace: true }));
    }

    return (
        <div id="form">
            <h1>Get Started!</h1>
            <form onSubmit={handleSubmit}>
                <MyInput type="text" placeholder="Enter your login" name='username' id='login'/>
                <MyInput type="password" placeholder="Enter your password" id='password' />
                <MyButton type='submit'>Submit</MyButton>
            </form>
        </div>
    );
};

export {Login};