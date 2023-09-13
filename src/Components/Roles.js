import React from 'react'
import RoleCard from './RoleCard'
import { AnimationOnScroll } from 'react-animation-on-scroll'

function Roles() {
  return (
    <AnimationOnScroll animateIn="animate__fadeInLeftBig" initiallyVisible={true} animateOnce={true} className='hidden portfolio mx-auto' id="roles">
        <p className='mt-5 pt-3 mb-5' style={{textAlign: 'center', color: '#fff', fontSize: 'xx-large', fontWeight: '900'}} >Roles and Reslponsibilities</p>
        <div className='d-flex row'>
          <div className='col-md-6 justify-content-center justify-content-md-end'>
            <RoleCard img={require('../assets/gdsc.png')} position="Web Lead" org="GDSC VAST" period="2023 Sep-Present"/>
          </div>
          <div className='mt-3 mt-md-0 col-md-6 justify-content-center justify-content-md-end'>
            <RoleCard img={require('../assets/mulearn.jpeg')} position="Web IG Lead" org="Gtech Mulearn VAST" period="2023 Jan-Present"/>
          </div>
        </div>
        <div className='mt-3 mt-md-0 col-12 col-md-6 mx-auto'>
          <RoleCard img={require('../assets/ieee.jpeg')} position="Web Master" org="IEEE SB VAST" period="2021-2022"/>
        </div>
    </AnimationOnScroll>
  )
}

export default Roles