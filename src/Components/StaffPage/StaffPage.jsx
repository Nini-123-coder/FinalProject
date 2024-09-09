import React from 'react'
import "./StaffPage.css"
import { FaAngleDown } from "react-icons/fa";

const StaffPage = () => {

   

  return (
    <div className='staffpage'>
        <div className='staffs'>
            <div className='staffs1'>
                <div className='staffslogo'></div>
                <div className='staffshead'>
                    <div className='staffshead1'>
                        <h3>DashBoard</h3>
                        <h3>PayRoll</h3>
                    </div>
                </div>
                <div className='staffidentity'>
                    <div className='staffidentity1'>
                        <div className='staffidentity2'></div>
                        <h3>Moses Egwu</h3>
                        <div className='arrow'>
                        <FaAngleDown />
                        </div>
                    </div>
                </div>
            </div>
            <div className='center'>
                <div className='center1'>
                    <h3>DASHBOARD</h3>
                </div>
                <div className='center2'>
                    <div className='center3'></div>
                    <div className='center4'>
                        <div className='centers'>
                            <h3>Moses Egwu Upaka</h3>
                            <h4>Frontend Developer</h4>
                        </div>
                    </div>
                    <div className='center5'>
                        <div className='center6'>
                            <button>Edit Profile</button>
                        </div>
                        <div className='center7'></div>
                    </div>
                </div>
            </div>
            


        </div>
    </div>
  )
}

export default StaffPage