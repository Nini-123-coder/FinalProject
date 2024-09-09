import React from 'react'
import "./Footer.css"

function Footer() {
  return (
    <div className='FooterContainer'>
        <div className='footerwrapper'>

             <section className='rightFooter'>
                <img src="src/assets/WorkET (1).png" alt="" />
                <div className='contactHolder'>
                    <img src="src/assets/Icon.png" alt="" />
                    <p>Email<br/>Admin@workit.com
                    </p>

                </div>
                <div className='contactHolder'>
                    <img src="src/assets/Icon (1).png" alt="" />
                    <p>Call Us <br/>+234567534778</p>

                </div>

            </section>
             <section className='leftfooter'>
                <div className='Legal'>
                    <h3>Legal Information</h3>
                    <h6>Terms Of Service</h6>
                    <p>Privacy Policy</p>
                </div>
                <div className='Emailholder'>
                    
                    <h3>Subscribe</h3>
                    <input type="text" placeholder='Email here' />
                    <div className='sendbutton'>
                    <button><p> Send now</p></button>
                    <div className='SocialmediaWrapper'>
                    <img src="src/assets/1.png" alt="" />
                    <img src="src/assets/2.png" alt="" />
                    <img src="src/assets/3.png" alt="" srcset="" />
                    </div>
                    
                    </div>


                    

                </div>

            </section>

        </div>
        <div className='copyright'>
            <h5>Copyright © 2024 - Group 12</h5>
            <ul>
                <li>Home</li>
                <li>Contact Us</li>
                <li>Terms of service</li>
                <li>Privacy Policy</li>
            </ul>
        </div>
        
    


    </div>
  )
}

export default Footer