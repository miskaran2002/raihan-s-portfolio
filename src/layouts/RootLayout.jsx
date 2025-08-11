import React from 'react';
import { Outlet } from 'react-router';
import Navbar from '../page/Navbar/Navbar';

const RootLayout = () => {
    return (
        <div>
            <Navbar />
            <main className="pt-16">
                <Outlet />
            </main>
        </div>
    );
};

export default RootLayout;