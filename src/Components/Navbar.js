import React from 'react'
import '../css/FirstPage.css'

function Navbar() {
  return (
    <div className='mx-3 mx-lg-auto navb '>
        <nav className="navbar navbar-expand-lg navbar-light mx-auto">
        <a className="navbar-brand " style={{textAlign: 'start'}} href="#"><img className='me' src={require('../assets/me.png')} /></a>
        <button className="navbar-toggler " type="button" data-toggle="collapse" data-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse pl-3 pl-lg-0" id="navbarTogglerDemo01">
            <ul className="navbar-nav ml-auto mt-2 mt-lg-0">
            <li className="nav-item active">
                <a className="nav-link mr-lg-3" href="#">Home <span className="sr-only">(current)</span></a>
            </li>
            <li className="nav-item">
                <a className="nav-link mr-lg-3" href="#roles">Roles</a>
            </li>
            <li className="nav-item">
                <a className="nav-link mr-lg-3" href="#portfolio">Projects</a>
            </li>
            <li className="nav-item">
                <a className="nav-link mr-lg-3" href="#certification">Certifications</a>
            </li>
            <li className="nav-item">
                <a className="nav-link mr-lg-3" href="#talk">Connect</a>
            </li>
            </ul>
        </div>
        </nav>
    </div>
  )
}

export default Navbar