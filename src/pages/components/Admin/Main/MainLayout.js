import React, { useState } from 'react';
import SideBar from '../../SideBar/SideBar'; // Adjust the import path based on your project structure
import TopBar from '../TopBar/TopBar';
// import { Layout } from 'antd';

// const { Content } = Layout;

const MainLayout = ({ children }) => {
    const [collapsed, setCollapsed] = useState(false);

    return (
        <>
        <div className="main-layout">
            <SideBar collapsed={collapsed} setCollapsed={setCollapsed} />
            <div className={`content ${collapsed ? 'collapsed' : ''}`}>
                {children}
            </div>
        </div>
        </>
    );
}

export default MainLayout;