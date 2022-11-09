import React from 'react';
import { Outlet } from 'react-router-dom';
import About from '../page/About/About';
import Stats from '../page/Stats/Stats';
import Footer from './partials/Footer';
import Header from './partials/Header';

const Main = () => {
    return (
        <div>
            <Header></Header>
            <Outlet></Outlet>
            <About></About>
            <Stats></Stats>
            <Footer></Footer>
        </div>
    );
};

export default Main;