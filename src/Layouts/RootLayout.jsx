import React from 'react';
import { Outlet } from 'react-router';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';

const RootLayout = () => {
    return (
        <div className='mx-auto max-w-[1440px] flex flex-col min-h-screen'>
            <Navbar></Navbar>
            <main className='grow'>
                <Outlet></Outlet>
            </main>
            <Footer></Footer>
        </div>
    );
};

export default RootLayout;