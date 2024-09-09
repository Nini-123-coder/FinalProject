import React from 'react'
import "./ContactUs.css"

function ContactUs() {
  return (
    <div className='ContactUsContainer'>
        <div className='GetInTouchWrapper'>
            <section className='GetInTouchWrapperleft'>
                <h1>Get in Touch</h1>
                <p>Have a question about our services?<br/>
                 Need assistance with your account?<br/>
                Feel free to contact us using the <br/>
                 information below. Our team is here to<br/> 
                 help you.</p>
            </section>
            <section className='GetInTouchWrapperright'>
                <img src="src/assets/Frame 1000001699.png" alt="" />
            </section>
        </div>

        <div className='ContactWrapper'>
          <h2>Contact Us</h2>
          <section className='NameInput'>
            <h4>Name</h4>
            <input type="text"  placeholder='enter your name' />

          </section>
          <section className='EmailInput'>
            <h4>E-mail</h4>
            <input type="text"  placeholder='enter your email here'/>
          </section>
          <section className='MessageInput'>
            <h4>Message</h4>
            <input type="text"  placeholder='Type your message here'/>

          </section>

          
        </div>
        <div className='Mapwrapper'>
            <img src="src/assets/Rectangle (1).png" alt="" />
          </div>

        <section className='contactInformation'>
          <h2>Contact Information:</h2>
          <h4>Email: admin@worket.com</h4>
          <h4>Phone Number: +234 816 228 2957</h4>
          <h4>Address: 153 muyibi Street, Olodi-apapa, Nigeria</h4>
        </section>
          

    </div>
  )
}

export default ContactUs