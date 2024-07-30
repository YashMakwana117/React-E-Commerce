import React, { useEffect, useState } from 'react';
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
import ProductsSetting from './pages/components/Admin/Products/ProductsSetting';
import Purchase from './pages/components/Admin/Purchase/Purchase';
import LinearProgress from '@mui/material/LinearProgress';
import ItemView from './pages/components/Admin/Purchase/ItemView/ItemView';
import EditView from './pages/components/Admin/Purchase/EditView/EditView';
import Damages from './pages/components/Admin/Damages/Damages';
import Stock from './pages/components/Admin/Stock/Stock';
import POS from './pages/components/Admin/POS/POS';
import PosOrder from './pages/components/Admin/POSOrder/PosOrder';
import ReturnOrder from './pages/components/Admin/ReturnOrder/ReturnOrder';
import OnlineOrder from './pages/components/Admin/OnlineOrder/OnlineOrder';
import CateGories from './pages/components/Main/Categories/CateGories';
import MostPopulerProduct from './pages/components/Main/MostPopulerProduct/MostPopulerProduct';


export default function App() {
  const [collapsed, setCollapsed] = useState(false);
  const [loading, setLoading] = useState(true);
  // const location = useLocation();
  
  // Define routes where SideBar should be hidden
  const hideSideBarRoutes = ['/', '/Home','/category/:category','/category','/populerProduct'];

  // Function to determine if SideBar should be hidden
  const shouldHideSideBar = (path) => {
    return hideSideBarRoutes.some(route => {
      const regex = new RegExp(`^${route.replace(/:\w+/g, '[^/]+')}$`);
      return regex.test(path);
    });
  };

  useEffect(() => {
    const handleLoad = () => {
      setLoading(false);
    };

    // Check if the page is already loaded
    if (document.readyState === 'complete') {
      handleLoad();
    } else {
      window.addEventListener('load', handleLoad);

      // Cleanup event listener on component unmount
      return () => {
        window.removeEventListener('load', handleLoad);
      };
    }
  }, []);

  if (loading) {
    return <LinearProgress />;
  }

  return (
    <div>
      <Router>
        {/* Conditionally render SideBar based on route */}
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/Home" element={<HomePage />} />
          <Route path="/category/:category" element={<CateGories />} />
          <Route path="/populerProduct" element={<MostPopulerProduct />} />
          {/* Routes where SideBar should be displayed */}
          <Route path="/dashbord" element={<Dashbord />} />
          <Route path="/administrator" element={<Administrator />} />
          <Route path='/viewprofile' element={<ViewProfile/>}/>
          <Route path='/customer' element={<Customer/>} />
          <Route path='/setting' element={<Setting/>}/>
          <Route path='/compony' element={<Compony/>}/>
          <Route path='/products' element={<ProductsSetting/>}/>
          <Route path='/purchase' element={<Purchase/>}/>
          <Route path='/purchase/view' element={<ItemView/>}/>
          <Route path='/purchase/edit' element={<EditView/>}/>
          <Route path='/damages' element={<Damages/>}/>
          <Route path='/stock' element={<Stock/>}/>
          <Route path='/pos' element={<POS/>}/>
          <Route path='/posOrder' element={<PosOrder/>}/>
          <Route path='/online-orders' element={<OnlineOrder/>}/>
          <Route path='/return-orders' element={<ReturnOrder/>}/>
          
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
