import React from 'react'
import '../css/RoleCard.css'


function RoleCard(props) {
  return (
    <div className='role-wrap mx-3 mx-lg-3 my-2 my-lg-0'>
        <div>
            <img className='role-img' src={props.img} />
        </div>
        <div>
            <p className='role-title my-2 '>{props.position}</p>
            <p className='role-org mb-2'>{props.org}</p>
            <p className='role-period'>{props.period}</p>
        </div>
    </div>
  )
}

export default RoleCard