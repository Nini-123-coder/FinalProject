import React from 'react'
import './App.css'
import Layout from './Layout/Layout'
import SignUp from './Components/Sign Up/SignUp'
import GetStarted from './Components/Get/GetStarted'
import Login from './Components/Login/Login'
import CreatePassWord from './Components/Create/CreatePassWord'
import {HashRouter, Routes, Route } from 'react-router-dom'
import StaffSignUp from './Components/Staff/StaffSignUp'
import "@fontsource/poppins"
import ForgotPassword from './Components/Forgot/ForgotPassword'
import StaffPage from './Components/StaffPage/StaffPage'
import Home from './Components/Home/Home'
import Features from './Features/Features'
import ContactUs from './ContactUs/ContactUs'
import AboutUs from './Components/About/AboutUs'
import Pricing from './pricing/Pricing'


const App = () => {

  return (
    <HashRouter>
      <Routes>
        {/* <Route path='/' element={<Home/>}/> */}
      <Route
        path='/'
      element = {<Layout/>}
      />
        <Route path ="home" element={<Home/>} /> 
        <Route path = "features" element = {<Features/>}/>
        <Route path = "contactus" element = {<ContactUs/>}/>
        <Route path = "aboutus" element = {<AboutUs/>}/>
        <Route path = "pricing" element = {<Pricing/>}/>
        <Route path='/GetStarted' element = {<GetStarted/>} />
        <Route path='/SignUp' element = {<SignUp/>} />
        <Route path='/Login' element = {<Login/>} />
        <Route path='/StaffSignUp' element = {<StaffSignUp/>} />
        <Route path='/CreatePassWord' element = {<CreatePassWord/>} />
        <Route path='/ForgotPassword' element = {<ForgotPassword/>} />
        <Route path='/StaffPage' element = {<StaffPage/>}/>
      </Routes>
    </HashRouter>
  )

}

export default App