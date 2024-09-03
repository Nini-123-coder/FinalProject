import React from 'react'
import "./SignUp.css"
import { useNavigate } from 'react-router-dom'

const SignUp = () => {

  const Nav = useNavigate()
  return (
    <div className='body'>
        <div className='bodywrap'>
            <div className='bodywrapper'>
                <div className='bodyhead'>
                    <div className='bodyhead1'></div>
                </div>
                <div className='bodywraps'></div>
            </div>
            <div className='bodywrapper1'>
            <div className="register-container">
      <h1>Welcome,</h1>
      <h2>Create an Employer Account</h2>
      <form className="form-container">
      <div className="form-row">
        <div className="form-group">
          <input type="text" placeholder="First Name" name="firstName" required />
        </div>
        <div className="form-group">
        <input type="text" placeholder="Company Name" name="companyName" required />
        </div>
      </div>

      <div className="form-row">
        <div className="form-group">
        <input type="email" placeholder="Enter Email Address" name="email" required />
        </div>
        <div className="form-group">
          <input type="number" placeholder="Phone Number" name="phoneNumber" required />
        </div>
      </div>

      <div className="form-row">
        <div className="form-group">
          <input type="password" placeholder="Password" name="password" required />
        </div>
        <div className="form-group">
          <input type="password" placeholder="Confirm Password" name="confirmPassword" required />
        </div>
      </div>
      </form>
      <input type="checkbox" id="terms" required />
      <label className='terms'>I agree to all the <span>Terms, Privacy Policy</span></label>
      <div className='button'>
    <button onClick={(()=> Nav("/Login"))}>Resgister</button>
    </div>
    <div className='account'>
    <label className='terms'>Already have an account? <span onClick={(()=> Nav("/Login"))}>Login</span></label>
    </div>
    </div>
    
            </div>
        </div>
    </div>
  )
}

export default SignUp