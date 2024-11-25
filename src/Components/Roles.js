import React from 'react'
import RoleCard from './RoleCard'
import { AnimationOnScroll } from 'react-animation-on-scroll'

function Roles() {
  return (
    <AnimationOnScroll animateIn="animate__fadeInLeftBig" initiallyVisible={true} animateOnce={true} className='hidden portfolio mx-auto' >
        <p id="roles" className='mt-5 pt-3 mb-5' style={{textAlign: 'center', color: '#fff', fontSize: 'xx-large', fontWeight: '900'}} >Roles and Reslponsibilities</p>
        <div className='d-flex flex-row justify-content-center flex-wrap'>
            <RoleCard img={require('../assets/gdsc.png')} position="Web Lead" org="GDSC VAST" period="2023-2024"/>
            <RoleCard img={require('../assets/mulearn.jpeg')} position="Web IG Lead" org="Gtech Mulearn VAST" period="2023-2024"/>
          <RoleCard img={require('../assets/ieee.jpeg')} position="Web Master" org="IEEE SB VAST" period="2021-2022"/>
          
        </div>
    </AnimationOnScroll>
  )
}

export default Roles