import React from 'react'
import "./GetStarted.css"
import { useNavigate } from 'react-router-dom'

const GetStarted = () => {

const Nav = useNavigate()

  return (
    <div className='getbody'>
        <div className='getwrap'>
            <div className='getwrapper'>
                <div className='gethead'>
                    <div className='gethead1'></div>
                </div>
                <div className='getwraps'></div>
            </div>
            <div className='getwrapper1'>
              <div className='getwrapperhead'>
                <div className='headwrapper'>
                  <h1>Let's get you started,</h1>
                  <h2>Welcome to WorkET!</h2>
                  <p>Select an account type to get started.</p>
                </div>
                <div className="container">
      <div className="card">
        <div className="text-container">
          <h2>Create an Employer of record (EOR) company account</h2>
          <p>The company wants to pay salaries and manage employees in Nigeria without the need for establishing legal entities.</p>
        </div>
        <button onClick={(()=> Nav("/SignUp"))}className="select-button">Select</button>
      </div>
      <div className="card">
        <div className="text-container">
          <h2>I was invited to join a company</h2>
          <p>You received an invitation to join a company and want to set up your personal account.</p>
        </div>
        <button className="select-button">Select</button>
        </div>
        <div className="login-container1">
        <a href="#" className="login-link1">Already have an account? <span onClick={(()=> Nav("/Login"))}>Log In</span></a>
      </div>
        </div>
              </div>
             
            </div>
        </div>
    </div>
  )
}

export default GetStarted