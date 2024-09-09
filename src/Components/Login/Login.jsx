import React from 'react'
import "./Login.css"
import { FaArrowLeft } from 'react-icons/fa6'
import { useNavigate } from 'react-router-dom'



const Login = () => {

const Nav = useNavigate()

  return (
    <div className='Login'>
    <div className='loginwrap'>
    <div className='loginheader'>
        <div className='loginlogo'></div>
    </div>
    <div className='login-container'>
    <div className="back-button1">
        <FaArrowLeft onClick={(()=> Nav("/SignUp"))}/>
      </div>
    <main className="login-main">
    <h1>Welcome back,</h1>
        <p>We miss you! <span className="emoji">😊</span></p>
        
        <form className="login-form">
          <h2>Login</h2>
          <div className="input-group">
            <input type="email" placeholder="Enter email address" required />
          </div>
          
          <div className="input-group">
            <input type="password" placeholder="Password" required />
          </div>
          <div className="form-footer">
            <a className="forgot-password" onClick={(()=> Nav("/ForgotPassword"))}>Forgot password?</a>
          </div>
          <button type="submit" className="login-button">Login</button>
        </form>
        
        <span className="sign-up-prompt">
          Don't have an account yet? <a className="sign-up-link" onClick={(()=> Nav("/"))}>Join WorkET today</a>
        </span>
      </main>
      </div>
    </div>
    </div>
  )
}

export default Login