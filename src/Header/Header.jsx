
import { NavLink } from "react-router-dom"
import "./Header.css"



function Header() {


  return (
    <div className='HeaderContainer'>

          <section className="leftnav">
        <img src="src/assets/WorkET (1).png" alt="" />
      </section>
      
      <section className="middleNav">
        <p> <NavLink to="/home">Home</NavLink></p>
        <p><NavLink to="features">Features</NavLink></p>
        <p><NavLink to="aboutus">About Us</NavLink></p>
        <p><NavLink to="pricing">Pricing</NavLink></p>
        <p><NavLink to="ContactUs">Contact Us</NavLink></p>
      </section>
      <section className= "rightn">
        <img src="src/assets/Notification.png" alt="" />
        <img src="src/assets/Frame 1000001694.png" alt="" />
       <NavLink to="/GetStarted"> <button ><h5>Get Started</h5></button></NavLink>
      </section>
          </div>
      

        
   
  
  )
}

export default Header