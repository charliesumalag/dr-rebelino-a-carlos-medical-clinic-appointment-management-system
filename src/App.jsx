import React from 'react'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./pages/layout/Layout";
import Home from "./pages/home/Home";
import Login from "./pages/Auth/login/Login";
import Signup from './pages/Auth/signup/Signup';

const App = () => {
  return (
    <BrowserRouter>
     <Routes>
      <Route path='/' element={ <Layout /> }>
        <Route index element={ <Home /> }></Route>
      </Route>
      <Route path='/login' element={ <Login /> }></Route>
      <Route path='/signup' element={ <Signup /> }></Route>
     </Routes>
    </BrowserRouter>
  )
}

export default App
