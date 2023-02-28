import React from 'react'
import Projects from './Projects'
import '../css/Project.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import  { faArrowDown, faArrowUp } from '@fortawesome/free-solid-svg-icons';

function Portfolio() {
  const show = ()=>{
    document.getElementById("moreProjects").classList.remove("moreProjectsHide");
    document.getElementById("moreProjects").classList.add("moreProjects");
    document.getElementById("more").style.display = "none";
  }
  const hide = ()=>{
    document.getElementById("moreProjects").classList.add("moreProjectsHide");
    document.getElementById("moreProjects").classList.remove("moreProjects");
    document.getElementById("more").style.display = "block";
  }
  return (
    <div className='portfolio mx-auto' id="portfolio">
        <p className='mt-5 pt-3 mb-4' style={{textAlign: 'start', color: '#fff', fontSize: 'xx-large', fontWeight: '900'}} >Portfolio</p>
        <Projects title="Timeline Calendar" description="This was a front end project REACT JS which shows the functionalities of a
            calendar with timeline. Later I added Django and made it a full stack project. The backend is hosted on Railway with a postgress database and the frontend is hosted on surge. "
            live="https://timelinecalendar.surge.sh"
            github="https://github.com/Anuragchandra221/Calendar-React-Js"
            img={require('../assets/calendar home.png')}
        />
        <div className='moreButton' id="more" onClick={show}>More <FontAwesomeIcon  icon={faArrowDown} /></div>
        <div id="moreProjects" className=' moreProjectsHide'>
          <Projects title="Movie Mania" description="Movie Mania is an TMDB clone website which use TMDB api to fetch
              data. This site was built using REACT JS
              "
              live="https://moviemania.surge.sh"
              github="https://github.com/Anuragchandra221/MovieMania"
              img={require('../assets/mm home.png')}
          />
          <Projects title="Christmas Friend Generator" description="Built a christmas friend generator for our class. This was my first full
              stack project using django and React
              "
              live="https://bemyfriend.surge.sh"
              github="https://github.com/Anuragchandra221/Christmas-friend-generator-frontend"
              img={require('../assets/cf generator.png')}
          />
          <div className='moreButton ' onClick={hide}>Less <FontAwesomeIcon  icon={faArrowUp} /></div>
        </div>
    </div>
  )
}

export default Portfolio