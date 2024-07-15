import React, { useState } from 'react';
import HomePage from './pages/HomePage/Home';
import Login from './pages/LoginPage/Login';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Dashbord from './pages/components/Admin/Dashbord/Dashbord';
import Administrator from './pages/components/Admin/Administrators/Administrator';
import SideBar from './pages/components/SideBar/SideBar';
import ViewProfile from './pages/components/Admin/Administrators/ViewProfile/ViewProfile';
import Customer from './pages/components/Admin/Customer/Customer';
import Setting from './pages/components/Admin/Setting/Setting';
import Compony from './pages/components/Admin/Setting/Compony/Compony';
// import SuppierSetting from './pages/components/Admin/Setting/SuppierSetting/SuppierSetting';









export default function App() {
  const [collapsed, setCollapsed] = useState(false);

  // Define routes where SideBar should be hidden
  const hideSideBarRoutes = ['/', '/home'];

  // Function to determine if SideBar should be hidden
  const shouldHideSideBar = (path) => {
    return hideSideBarRoutes.includes(path);
  };

  return (
    <div>
      <Router>
        {/* Conditionally render SideBar based on route */}
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/home" element={<HomePage />} />
          {/* Routes where SideBar should be displayed */}
          <Route path="/dashbord" element={<Dashbord />} />
          <Route path="/administrator" element={<Administrator />} />
          <Route path='/viewprofile' element={<ViewProfile/>}/>
          <Route path='/customer' element={<Customer/>} />
          <Route path='/setting' element={<Setting/>}/>
          <Route path='/compony' element={<Compony/>}/>
          {/* <Route path='/noty' element={<SuppierSetting/>}/> */}
        </Routes>

        {/* Conditionally render SideBar based on route */}
        {!shouldHideSideBar(window.location.pathname) && (
          <SideBar collapsed={collapsed} setCollapsed={setCollapsed} />
        )}
      </Router>
    </div>
  );
}
