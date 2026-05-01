import NavBar from '@/components/NavBar';
import React from 'react';
import { montserrat } from '../layout';

const AuthLayout = ({ children }) => {
    return (
        <div className={`${montserrat.className}`}>
            <NavBar></NavBar>
            {children}
        </div>
    );
};

export default AuthLayout;