import React from 'react'
import "./CreatePassword.css"
import { useNavigate } from 'react-router-dom'

const CreatePassWord = () => {

const Nav = useNavigate()

  return (
    <div className='Pass'>
        <div className='Passwrap'>
            <div className='Passheader'>
                <div className='Passlogo'></div>
            </div>
            <div className="container6">
      <div className="header4">
        <h2>Create Password</h2>
        <p>
          Kindly enter your password below to complete your join-in process.
          Ensure it's strong and secure.
        </p>
      </div>
      <div className="form6">
        <input type="password" placeholder="Enter desired password" />
        <button onClick={(()=> Nav("/StaffPage"))}>Create Password</button>
      </div>
    </div>
  

        </div>
    </div>
  )
}

export default CreatePassWord