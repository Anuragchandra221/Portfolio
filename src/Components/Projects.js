import React from 'react'
import '../css/Project.css'

function Projects(props) {
  return (
    <div className='project mx-auto mb-5 py-5 '>
        <div className='row projectDiv my-2'>
            <div className='col-lg-6 projectIntro'>
                <p className='projectTitle ml-lg-5 px-4 pl-lg-5 mb-3 mb-lg-4 mt-5 mt-lg-0'>{props.title}</p>
                <p className='projectText ml-lg-5 px-4 pl-lg-5 mb-4'>{props.description}</p>
                <div style={{textAlign: 'start'}} className="ml-lg-5 px-4 pl-lg-5">
                    <a target="_blank" href={props.live} className='mr-3'><button className='projectButton1 mb-2 '>Visit Page</button></a>
                    <a target="_blank" href={props.github} className=''><button className='projectButton2'>Visit Code</button></a>
                </div>
                
            </div>
            <div className='col-lg-6 d-flex align-items-center justify-content-center'>
                <img className='projectImg' src={props.img} />
            </div>
        </div>
    </div>
  )
}

export default Projects