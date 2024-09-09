import React from 'react'
import './AboutUs.css'

function AboutUs() {
  return (
    <div className='AboutUsContainer'>
        <div className='firstsection'>
        <section className='lef'>
          <h1>Simplify Your Payroll and<br/>
             Employee management<br/>
             with WorkET</h1>

             <p>A cloud-based solution tailored for<br/>
               Nigerian startups and small businesses.</p>

               
        </section>
        <section className='righ'>
          <img src="src/assets/Work in progress.png" alt="" />
        </section>

      </div>
      <div className='WhoWeareContainer'>
        <h1>Who we are</h1>
        <section className='OurMissionWrapper'>
          <div className='OurMissionIMage'>
            <img src="src/assets/Rectangle 3.png" alt="" />
          </div>
          <div className='OurMissionWords'>
            <h1>Our Leaders</h1>
            <p>WorkET was founded by a team of 
              experienced professionals with a
               passion for technology and a
                deep understanding of the
                 Nigerian business landscape. We
                  recognized the need for a payroll 
                  and HR solution that was tailored 
                  to the specific needs of Nigerian 
                  startups and small businesses.</p>
          </div>
        </section>

        <section className='OurMissionWrapper'>
          <div className='OurMissionWords'>
            <h1>Our Leaders</h1>
            <p>WorkET was founded by a team of 
              experienced professionals with a
               passion for technology and a
                deep understanding of the
                 Nigerian business landscape. We
                  recognized the need for a payroll 
                  and HR solution that was tailored 
                  to the specific needs of Nigerian 
                  startups and small businesses.</p>
          </div>
          <div className='OurMissionIMage'>
            <img src="src/assets/Rectangle 3.png" alt="" />
          </div>
        </section>

        <section className='OurMissionWrapper'>
          <div className='OurMissionIMage'>
            <img src="src/assets/Rectangle 3.png" alt="" />
          </div>
          <div className='OurMissionWords'>
            <h1>Our Leaders</h1>
            <p>WorkET was founded by a team of 
              experienced professionals with a
               passion for technology and a
                deep understanding of the
                 Nigerian business landscape. We
                  recognized the need for a payroll 
                  and HR solution that was tailored 
                  to the specific needs of Nigerian 
                  startups and small businesses.</p>
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

export default AboutUs