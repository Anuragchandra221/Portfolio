import React from 'react'
import '../css/Music.css'
import { AnimationOnScroll } from 'react-animation-on-scroll'

function Music() {
  return (
    <AnimationOnScroll className="hidden" animateIn="show" initiallyVisible={true} animateOnce={true}>
      <div id='music' className=' flex-wrap mt-5  justify-content-center mx-auto' style={{width: '80%'}}>
        <p className='mt-2 pt-3 mb-4 mx-auto' style={{textAlign: 'center', color: '#fff', fontSize: 'xx-large', fontWeight: '900'}} >Music</p>
        <iframe style={{borderRadius:12}} src="https://open.spotify.com/embed/track/1lMlZ33835Ia5sNZqldr0j?utm_source=generator&theme=0" className='music-frame mx-2 my-0 my-lg-2 ml-lg-0 '   frameBorder="0" allowFullScreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
        <iframe style={{borderRadius:12}} src="https://open.spotify.com/embed/track/7pvnOBW8C4IxNhw7UxJhIB?utm_source=generator&theme=0" className='music-frame mx-2 my-0 my-lg-2 '   frameBorder="0" allowFullScreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
        <iframe style={{borderRadius:12}} src="https://open.spotify.com/embed/track/4Ge5SDFoVt0btiaTIj8E5E?utm_source=generator&theme=0" className='music-frame mx-2 my-0 my-lg-2 mr-lg-0'   frameBorder="0" allowFullScreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
        
      </div>
    </AnimationOnScroll>
  )
}

export default Music