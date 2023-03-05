import React from 'react'
import Navbar from './Navbar'
import '../css/FirstPage.css'

function FirstPage() {
  return (
    <div className='firstPage mt-5 pt-5 pt-lg-0'>
        <Navbar/>
        <div className='row  align-items-center justify-content-center pt-3 first'>
            <div className='col-12 col-lg-6 mt-3 mt-lg-0'>
                <p className='intro ml-lg-5 px-4 pl-lg-5'>Hey there, Iam <span className='name'> Anurag Chandra</span></p>
                <p className='description ml-lg-5 px-4 pl-lg-5'>I love to code and I have been constantly learning and devoloping stuffs I like....</p>
                <div className='mt-5 icons ml-lg-5 px-4 pl-lg-5 mb-5'>
                <a href="https://in.linkedin.com/in/anurag-chandra-52a4a3205?trk=people-guest_people_search-card" target="_blank"><i class="fa-brands fa-linkedin mr-3"></i></a>
                <a href="https://github.com/Anuragchandra221" target="_blank"><i class="fa-brands fa-github mr-3"></i></a>
                <a href="https://www.instagram.com/_a_nu_ra_g__/" target="_blank"><i class="fa-brands fa-instagram"></i></a>
                </div>
                <div className='buttons mb-4 mb-lg-0 ml-lg-5 px-4 pl-lg-5 mt-3 mt-lg-5 pt-lg-5'>
                  <a href="#portfolio"><button className='btn1 mr-2 mr-lg-2 mb-2'>Portfolio</button></a>
                  <a href='#talk'><button className='btn2'>Let's Talk</button></a>
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