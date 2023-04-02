import React from 'react'
import { BrowserRouter as Router, Routes, Route, useNavigate } from "react-router-dom";
import Login from './Auth/Login';
import Register from './Auth/Register';
import { SidebarLayout } from './Component/header-side';
import Dashboard from './Pages/dashboard';
import LoadSmartMeter from './Pages/loadSmartMeter';
import SellAirtime from './Pages/sellAirtime';
import SellData from './Pages/sellData';
import SellElectricity from './Pages/sellElectricity';
import SellTvSubscription from './Pages/sellTvSubscription';



export default function RouterPage() {
  return (
    <div>
        <Router>
            <Routes> 
                <Route element={<SidebarLayout />}>
                  
                      <Route path='/dashboard' exact element={<Dashboard/>} />
                      <Route path='/sell-electricity' exact element={<SellElectricity/>} />
                      <Route path='/sell-airtime' exact element={<SellAirtime/>} />
                      <Route path='/sell-data' exact element={<SellData/>} />
                      <Route path='/sell-tv-subscription' exact element={<SellTvSubscription/>} />
                      <Route path='/load-smart-meter' exact element={<LoadSmartMeter/>} />
               
                </Route>
                <Route path="/" exact element={<Login />} />
                <Route path="/register" exact element={<Register />} />
                {/* <Route path="/dashboard" exact element={<Dashboard />} /> */}
            </Routes>
        </Router>
    </div>
  )
}
