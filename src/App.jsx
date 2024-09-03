import React from 'react'
import './App.css'
import Layout from './Layout/Layout'
import SignUp from './Components/Sign Up/SignUp'
import GetStarted from './Components/Get/GetStarted'
import Login from './Components/Login/Login'
import {HashRouter, Routes, Route } from 'react-router-dom'
import ("https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap");



const App = () => {

  return (
    <HashRouter>
      <Routes>
        <Route path='/' element = {<GetStarted/>} />
        <Route path='/SignUp' element = {<SignUp/>} />
        <Route path='/Login' element = {<Login/>} />
      </Routes>
    </HashRouter>
  )

}

export default App