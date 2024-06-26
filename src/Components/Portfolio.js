import React from 'react'
import Projects from './Projects'
import '../css/Project.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import  { faArrowDown, faArrowUp } from '@fortawesome/free-solid-svg-icons';
import "animate.css/animate.min.css";
import { AnimationOnScroll } from 'react-animation-on-scroll';

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
    <AnimationOnScroll className="hidden" animateIn="show" initiallyVisible={true} animateOnce={true}>
        <div className='portfolio mx-auto' id="portfolio">
        <p className='mt-5 pt-3 mb-4' style={{textAlign: 'start', color: '#fff', fontSize: 'xx-large', fontWeight: '900'}} >Portfolio</p>
        <Projects title="Musespace Raga Detection" description="A tool for detecting carnatic raga in a song."
            // live="https://timelinecalendar.netlify.app"
            github="https://github.com/Anuragchandra221/Carnatic-Raga-Detection"
            img1={require('../assets/musespace.png')}
            img2={require('../assets/musespace 2.png')}
            img3={require('../assets/musespace.png')}
        />
        <Projects title="Orion Management" description="A clone of google classroom I did as a Freelance project, This was a full stack application and was my first freelance project"
            // live="https://timelinecalendar.netlify.app"
            github="https://github.com/Anuragchandra221/Orion-Project-Management-System"
            img1={require('../assets/orionManagement.png')}
            img2={require('../assets/orionguide.png')}
            img3={require('../assets/orionproject.png')}
        />
        <Projects title="Timeline Calendar" description="This was a front end project REACT JS which shows the functionalities of a
            calendar with timeline. Later I added Django and made it a full stack project. The backend is hosted on Railway with a postgress database and the frontend is hosted on surge. "
            // live="https://timelinecalendar.netlify.app"
            github="https://github.com/Anuragchandra221/Calendar-React-Js"
            img1={require('../assets/calendar home.png')}
            img2={require('../assets/calendarlogin.png')}
            img3={require('../assets/calendarsignup.png')}
        />
        <div className='moreButton mx-auto' id="more" onClick={show}>More <FontAwesomeIcon  icon={faArrowDown} /></div>
        <div id="moreProjects" className=' moreProjectsHide'>
          <Projects title="Movie Mania" description="Movie Mania is an TMDB clone website which use TMDB api to fetch
              data. This site was built using REACT JS
              "
              live="https://moviemac.netlify.app"
              github="https://github.com/Anuragchandra221/MovieMania"
              img1={require('../assets/mm home.png')}
              img2={require('../assets/mmsearch.png')}
              img3={require('../assets/mmmovie.png')}
          />
          <Projects title="Christmas Friend Generator" description="Built a christmas friend generator for our class. This was my first full
              stack project using django and React
              "
              live="https://bemyfriend.surge.sh"
              github="https://github.com/Anuragchandra221/Christmas-friend-generator-frontend"
              img1={require('../assets/cf generator.png')}
              img2={require('../assets/christmasfrnds.png')}
          />
          <div className='moreButton mx-auto' onClick={hide}>Less <FontAwesomeIcon  icon={faArrowUp} /></div>
        </div>
    </div>
    </AnimationOnScroll>
    
  )
}

export default Portfolio