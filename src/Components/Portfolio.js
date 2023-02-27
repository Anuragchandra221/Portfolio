import React from 'react'
import Projects from './Projects'
import '../css/Project.css'

function Portfolio() {
  return (
    <div className='portfolio mx-auto' id="portfolio">
        <p className='mt-5 pt-3 mb-4' style={{textAlign: 'start', color: '#fff', fontSize: 'xx-large', fontWeight: '600'}} >Portfolio</p>
        <Projects title="Timeline Calendar" description="This was a front end project REACT JS which shows the functionalities of a
            calendar with timeline. Later I added Django and made it a full stack project. The backend is hosted on Railway with a postgress database and the frontend is hosted on surge. "
            live="https://timelinecalendar.surge.sh"
            github="https://github.com/Anuragchandra221/Calendar-React-Js"
            img={require('../assets/calendar home.png')}
        />
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
    </div>
  )
}

export default Portfolio