import React from 'react'
import HomePage from './pages/HomePage/Home'
import Login from './pages/LoginPage/Login'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Dashbord from './pages/components/Admin/Dashbord';

export default function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/home" element={<HomePage />} />
          <Route path="/dashbord" element={<Dashbord/>}/>
        </Routes>
      </Router>
    </div>
  )
}
