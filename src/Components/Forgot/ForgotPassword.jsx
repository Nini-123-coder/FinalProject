import React from 'react'
import "./ForgotPassword.css"
import { FaArrowLeft } from 'react-icons/fa6'
import { useNavigate } from 'react-router-dom'


const ForgotPassword = () => {

const Nav = useNavigate()

  return (
    <div className='Forgot'>
        <div className='Forgotwrap'>
            <div className='Forgotheader'>
                <div className='Forgotlogo'></div>
            </div>
            
            <div className="containers">
            <div className="back-button">
        <FaArrowLeft onClick={(()=> Nav("/"))}/>
      </div>
      <h1>Forget Password?</h1>
      <p>No worries! Kindly enter the email address associated with your account</p>
      <form>
        <input type="email" placeholder="Enter email address" className='inputed' required />
        <button type="submit" className='submit'>Submit</button>
      </form>
      <a className="login-links" >Remember Password? <span onClick={(()=> Nav("/Login"))}>Login</span></a>
    </div>
        </div>
    </div>
  )
}

export default ForgotPassword