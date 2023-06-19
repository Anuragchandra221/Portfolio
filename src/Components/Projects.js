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
                    {props.live?<a target="_blank" href={props.live} className='mr-3'><button className='projectButton1 mb-2 '>Visit Page</button></a>:<></>}
                    <a target="_blank" href={props.github} className=''><button className='projectButton2'>Visit Code</button></a>
                </div>
                
            </div>
            <div className='col-lg-6 d-flex align-items-center justify-content-center'>
            <div id="carouselExampleIndicators" className="carousel slide projectImg" data-ride="carousel">
                <ol class="carousel-indicators">
                    <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
                    <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                    {props.img3?
                    <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
                    :
                    <></>}
                </ol>
                <div className="carousel-inner">
                    <div className="carousel-item active">
                    <img className="d-block w-100" src={props.img1} alt="First slide"/>
                    </div>
                    <div className="carousel-item">
                    <img className="d-block w-100" src={props.img2} alt="Second slide"/>
                    </div>
                    {props.img3?
                        <div className="carousel-item">
                            <img className="d-block w-100" src={props.img3} alt="Third slide"/>
                        </div>
                    :
                    <></>
                    }
                    
                </div>
                {/* <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="sr-only">Previous</span>
                </a>
                <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="sr-only">Next</span>
                </a> */}
            </div>
                {/* <img className='projectImg' src={props.img} /> */}
            </div>
        </div>
    </div>
  )
}

export default Projects