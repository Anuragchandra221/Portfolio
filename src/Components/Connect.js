import React from 'react'
import '../css/Connect.css'
import "animate.css/animate.min.css";
import { AnimationOnScroll } from 'react-animation-on-scroll';

function Connect() {
  return (
    <AnimationOnScroll className="hidden" animateIn="show" animateOnce={true} initiallyVisible={true}> 
        <div  className='connect mx-auto pt-4 pb-4 pb-lg-5 mb-5 mt-5' id="talk">
        <h2 className='colorText mb-5'>Let's Talk</h2>
        <div className='row conrow d-flex justify-content-center mt-3 mb-3 mb-lg-5 mx-auto'>
            <div className='col-6 col-lg-3 '>
                <a><p className='colorText'><i class="fa-solid fa-phone"></i> +91 7012597830</p></a>
            </div>
            <div className='col-6 col-lg-3 '>
                <a style={{textDecoration: 'none'}} href="https://github.com/Anuragchandra221" target="_blank"><p className='colorText'><i class="fa-brands fa-github"></i> Anuragchandra221</p></a>
            </div>
            <div className='col-6 col-lg-3 '>
                <a style={{textDecoration: 'none'}} href="https://www.instagram.com/anuragchandra.me/" target="_blank"><p className='colorText'><i class="fa-brands fa-instagram"></i> anuragchandra.me</p></a>
            </div>
            <div className='col-6 col-lg-3 '>
                <a style={{textDecoration: 'none'}} href="https://in.linkedin.com/in/anurag-chandra-52a4a3205?trk=people-guest_people_search-card" target="_blank"><p className='colorText'><i class="fa-brands fa-linkedin"></i> Anurag Chandra</p></a>
            </div>
        </div>
        <div className='buttons mx-auto' style={{textAlign: 'center'}} >
            <a target="_blank" href='https://drive.google.com/file/d/1JW3HeZdvhsGRANczhujz18-DZS8OHLlh/view?usp=sharing'><button className='connectBtn1 mr-lg-3  mb-2'>Resume</button></a>
            <a href='mailto:pothaluranurag2002@google.com'><button className='connectBtn1'>Mail me</button></a>
        </div>
        
    </div>
    </AnimationOnScroll>
    
  )
}

export default Connect
