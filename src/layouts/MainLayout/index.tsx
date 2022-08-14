import React from 'react';
import Navbar from "../components/Navbar";

interface IProps {
    children: React.ReactNode
}

function MainLayout({children}: IProps) {
    return (
        <div>
            <Navbar/>
            <div className="container mx-auto px-2">
                {children}
            </div>
        </div>
    )
}

export default MainLayout;