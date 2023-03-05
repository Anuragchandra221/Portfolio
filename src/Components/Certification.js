import React from 'react'
import '../css/Certifications.css'

function Certification(props) {
  return (
    <div className='certification mb-5 py-5'>
        <div className='row projectDiv my-2'>
            <div className='col-lg-6 projectIntro'>
                <p className='projectTitle ml-lg-5 px-4 pl-lg-5 mb-3 mt-5 mt-lg-0'>{props.title}</p>
                <p className='certPlatform ml-lg-5 px-4 pl-lg-5 pb-0 mb-1'>{props.platform}</p>
                <p className='certUniversity ml-lg-5 px-4 pl-lg-5 mb-4'> <span className='university'>{props.university}{props.university?props.university+', ' :<></>}By </span><span className='instructor'>{props.instructor}</span></p>
                <p className='projectText ml-lg-5 px-4 pl-lg-5 mb-4'>{props.description}</p>
                <div style={{textAlign: 'start'}} className="ml-lg-5 px-4 pl-lg-5">
                    <a target="_blank" href={props.link} className='mr-3'><button className='projectButton1 mb-2'>View Course</button></a>
                    <a target="_blank" href={props.certificate} className=''><button className='projectButton2'>View Certificate</button></a>
                </div>
                
            </div>
            <div className='col-lg-6 d-flex align-items-center justify-content-center'>
                <img className='certificateImg' src={props.img} />
            </div>
        </div>
    </div>
  )
}

export default Certification