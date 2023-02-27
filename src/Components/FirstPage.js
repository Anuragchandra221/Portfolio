import React from 'react'
import Navbar from './Navbar'
import '../css/FirstPage.css'

function FirstPage() {
  return (
    <div className='firstPage mt-5 pt-5 pt-lg-0'>
        <Navbar/>
        <div className='row  align-items-center justify-content-center pt-3 first'>
            <div className='col-12 col-lg-6 mt-3 mt-lg-0'>
                <p className='intro ml-lg-5 px-4 pl-lg-5'>Hey there, Iam <span className='name'>Anurag Chandra</span></p>
                <p className='description ml-lg-5 px-4 pl-lg-5'>I love to code and I have been constantly learning and devoloping stuffs which I like....</p>
                <div className='mt-5 icons ml-lg-5 px-4 pl-lg-5 mb-5'>
                <i class="fa-brands fa-linkedin mr-3"></i>
                <i class="fa-brands fa-github mr-3"></i>
                <i class="fa-brands fa-instagram"></i>
                </div>
                <div className='buttons mb-4 mb-lg-0 ml-lg-5 px-4 pl-lg-5 mt-3 mt-lg-5 pt-lg-5'>
                  <button className='btn1 mr-2 mr-lg-2 mb-3 mb-lg-0'>Portfolio</button>
                  <button className='btn2'>Let's Talk</button>
                </div>
            </div>
            <div className='col-12 col-lg-6 mb-4 mb-lg-0 mt-2 mt-lg-0'>
                <img className='image' src={require('../assets/jason-strull-KQ0C6WtEGlo-unsplash.jpg')} alt="working man" />
            </div>
        </div>
    </div>
  )
}
export default FirstPage