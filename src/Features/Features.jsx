import React from 'react'
import './Features.css'

function Features() {
  return (
    <div className='featuresContainer'>
        <div className='optimizeWrapper'>
            <div className='optimizeWords'>
                <h1>Optimize Your Payroll<br/>
                 and Employee<br/> Management</h1>
                 <p>Simplify your business operations with<br/>
                  our easy-to-use platform.</p>
            </div>
            <img src="src/assets/Task 1.png" alt="" />

        </div>
        <div className='ToolsWrapper'>
        <h1>The easiest tools for<br/> simplifying payroll and<br/> 
       employee <img src="src/assets/Frame 1000001798 (1).png" alt="" />
             management.</h1>
        </div>
       <div className='ChartWrapper'>
        <section className='Chartbox'></section>
        <section className='Chartbox'></section>
       </div>
       <section className='RevolutionizeWrapper'>
        <p>Revolutionize your HR Operations with our comprehensive<br/>
         and affordable software designed to streamline tasks and<br/>
         enhance efficiency. </p>
       </section>

       <div className='PayrollContainer'>
        <section className='rollWrapper'>
            <div className='PayrollWords'>
                <h1>Employee Management</h1>
                <p>WorkET simplifies employee<br/>
                 management by providing a centralized<br/>
                 database, attendance tracking, leave<br/>
                  management, document storage, and<br/>
                   performance management tools. Our<br/>
                    system empowers employees through a<br/>
                     self-service portal and seamlessly<br/>
                      integrates with payroll processing for<br/>
                       efficient HR operations.</p>
            </div>
            <div className='imgWrapper'>
            <img src="src/assets/Frame 1000001800.png" alt="" />
            </div>
           
              </section>
               <section className='EmployeeWrapper'>

            <img src="src/assets/Frame 1000001801.png" alt="" />
            <div className='PayrollWord'>
               <h1>Payroll Processing</h1>
               <p>WorkET simplifies payroll processing by<br/>
                automating tax calculations, managing<br/>
                 allowances, generating detailed reports,<br/>
                  and integrating with banks for direct<br/>
                   deposit. Our system ensures<br/> compliance with Nigerian labor laws<br/>
                    and provides customizable templates<br/>
                     for a streamlined experience.</p>
            </div>


        </section>
       </div>
       <div className='Feedback'>
          <h1> Customer Feedbacks</h1>
          <img src="src/assets/Rectangle 10213.png" alt="" />
          <p>Hear from our great clients</p>
        </div>
    </div>
  )
}

export default Features