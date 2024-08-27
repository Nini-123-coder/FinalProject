import React from 'react'
import './App.css'
import Layout from './Layout/Layout'
import SignUp from './Components/Sign Up/SignUp'
import {
  createBrowserRouter,
  RouterProvider,
  
} from "react-router-dom";
import ("https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap");

const router = createBrowserRouter(
  [
  {
    // path: "/",
    // element: <Layout/>,
    children: [
      {
      path: "/",
      element: <SignUp/>
    },

  ]   
  },
  
]
);



const App = () => {

  return (
    <RouterProvider router={router} />
  )

}

export default App