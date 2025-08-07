import React from 'react'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/home/Home";
import Login from "./pages/Auth/login/Login";
import LayoutAdmin from "./pages/administrator/dashboard/Layout";
import Layout from "./pages/layout/Layout";
import Signup from './pages/Auth/signup/Signup';
import Dashboard from  '../src/pages/administrator/dashboard/dashboardHome/Dashboard';

const App = () => {
  return (
    <BrowserRouter>
     <Routes>
      <Route path='/' element={ <Layout /> }>
        <Route index element={ <Home /> }></Route>
      </Route>
      <Route path='/login' element={ <Login /> }></Route>
      <Route path='/signup' element={ <Signup /> }></Route>
      <Route path='/admin' element={ <LayoutAdmin /> }>
        <Route index element={ <Dashboard /> }></Route>
      </Route>
     </Routes>
    </BrowserRouter>
  )
}

export default App
