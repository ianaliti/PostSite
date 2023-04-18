import React from "react";
import { Route, Routes } from "react-router-dom";
import About from "../pages/About";
import Posts from "../pages/Posts";
import Layout from "./Layout/Layout";
import { SinglePage } from "./SinglePage";
import { Login } from "../pages/Login";
import { RequireAuth } from "./hoc/RequireAuth";
import { AuthProvider } from "./hoc/AuthProvider";

const AppRouter = () => {
    return (
        <AuthProvider>
            <Routes>
                <Route path="/" element={<Layout/>} key={'/'}>
                <Route path="about/*" element = {<About />} key={'/about'}>
                    <Route path='contacts' element={<p>Insta: Van.Businka</p>} />
                    <Route path='team' element={<p>Our team</p>} />
                </Route>
                <Route path="posts" element = {<Posts />} key={'/posts'}/>
                <Route path="posts/:id" element = {
                    <RequireAuth>
                        <SinglePage />
                    </RequireAuth>
                } />
                <Route path='*' element = {<Posts />} key={'*'}/>
                <Route path='login' element = {<Login />} key={'/login'}/>
                </Route>
            </Routes>
        </AuthProvider>
    );
};

export default AppRouter;