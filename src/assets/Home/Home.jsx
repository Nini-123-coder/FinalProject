import React from 'react'
import "./Home.css"
import { useState } from 'react';

import image1 from "../../assets/Frame 1000001699 (1).png";
import image2 from "../..//assets/Rectangle 3.png";
import image3 from"../../assets/Frame 1000001699 (1).png";
import image4 from "../../assets/Frame 1000001699 (1).png";
import image5 from "../../assets/Frame 1000001699 (1).png";
import image6 from "../../assets/Frame 1000001699 (1).png";

function Home() {

  
    
    
  return (
    <div className='HomeContainer'>
      <div className='firstSection'>
        <section className='left'>
          <h1>Simplify Your Payroll and<br/>
             Employee management<br/>
             with WorkET</h1>

             <p>A cloud-based solution tailored for<br/>
               Nigerian startups and small businesses.</p>

               <button>Get Started</button>
        </section>
        <section className='right'>
          <img src="src/assets/Work in progress.png" alt="" />
        </section>

      </div>

      <div className='secondsection'>
      <h1>The basic necessities your HR<br/>
      needs to succeed, in one place.</h1>
      <section className='topbox'>
        <div className='imageholder'>
          <img src="src/assets/Container.png" alt="" />
        </div>
        <div className='imagewords'>
          <h1>Payroll Processing</h1>
          <p>WorkET simplifies payroll processing by<br/>
             automating tax calculations, managing
             <br/> allowances, generating detailed reports,<br/>
              and integrating with banks for direct <br/>
              deposit. Our system ensures<br/>
               compliance with Nigerian labor laws<br/>
                and provides customizable templates<br/>
                 for a streamlined experience.</p>
        </div>
      </section>
      <section className='bottombox'>
        <div className='imagewords'>
          <h1>Employee Management</h1>
          <p>WorkET simplifies payroll processing by<br/>
             automating tax calculations, managing
             <br/> allowances, generating detailed reports,<br/>
              and integrating with banks for direct <br/>
              deposit. Our system ensures<br/>
               compliance with Nigerian labor laws<br/>
                and provides customizable templates<br/>
                 for a streamlined experience.</p>
                 </div>
           <div className='imageholder'>
          <img src="src/assets/Container (1).png" alt="" />
          </div>
       
      </section>

      </div>
      <div class="CarouselContainer">
        <div className='Feedback'>
          <h1> Customer Feedbacks</h1>
          <img src="src/assets/Rectangle 10213.png" alt="" />
          <p>Hear from our great clients</p>
        </div>
        <div class="CarouselWrapper">
            <img src="src/assets/Frame 1000001699 (1).png" alt="Image 1" />
            <img src="src/assets/Frame 1000001699 (1).png" alt="Image 2" />
            <img src="src/assets/Frame 1000001699 (1).png" alt="Image 3" />
            <img src="src/assets/Frame 1000001699 (1).png" alt="Image 1" />
            <img src="src/assets/Frame 1000001699 (1).png" alt="Image 2" />
            <img src="src/assets/Frame 1000001699 (1).png" alt="Image 3" />
        </div>
    </div>
    </div>
  )
}

export default Home