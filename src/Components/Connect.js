import React from 'react'
import '../css/Connect.css'

function Connect() {
  return (
    <div className='connect mx-auto pt-4 pb-4 pb-lg-5 mb-5 mt-5'>
        <h2 className='colorText mb-5'>Let's Talk</h2>
        <div className='row conrow d-flex justify-content-center mt-3 mb-3 mb-lg-5 mx-auto'>
            <div className='col-6 col-lg-3 '>
                <p className='colorText'><i class="fa-solid fa-phone"></i> +91 7012597830</p>
            </div>
            <div className='col-6 col-lg-3 '>
                <p className='colorText'><i class="fa-brands fa-github"></i> Anuragchandra221</p>
            </div>
            <div className='col-6 col-lg-3 '>
                <p className='colorText'><i class="fa-brands fa-instagram"></i> _a_nu_ra_g__</p>
            </div>
            <div className='col-6 col-lg-3 '>
                <p className='colorText'><i class="fa-brands fa-linkedin"></i> Anurag Chandra</p>
            </div>
        </div>
        <div className='buttons mx-auto' style={{textAlign: 'center'}} >
            <button className='connectBtn2  mr-lg-2 mr-lg-2 mb-2'>Resume</button>
            <button className='connectBtn2'>Mail me</button>
        </div>
        
    </div>
  )
}

export default Connect