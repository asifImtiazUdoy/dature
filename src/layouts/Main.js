import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from './partials/Footer';
import Header from './partials/Header';

const Main = () => {
    return (
        <div>
            <Header></Header>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Main;