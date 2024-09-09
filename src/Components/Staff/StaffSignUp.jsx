import React from 'react'
import "./StaffSignUp.css"
import { FaArrowLeft } from 'react-icons/fa6'
import { useNavigate } from 'react-router-dom'

const StaffSignUp = () => {

const Nav = useNavigate()

  return (
    <div className='Staff'>
        <div className='Staffwrap'>
            <div className='Staffheader'>
                <div className='Stafflogo'></div>
            </div>
            <div className="join-company-container">
      <div className="back-button">
        <FaArrowLeft onClick={(()=> Nav("/"))}/>
      </div>
      <h2>Join an existing company</h2>
      <p>Kindly enter the email address used to invite you.</p>
      <form className="join-company-form">
        <input type="email" placeholder="enter company email address" required />
        <button type="submit" onClick={(()=> Nav("/CreatePassWord"))}>Continue</button>
      </form>
      <div className="login-link2">Already have an account? <a onClick={(()=> Nav("/Login"))} >Login</a></div>
    </div>
        </div>
    </div>
  )
}

export default StaffSignUp