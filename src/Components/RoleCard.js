import React from 'react'
import '../css/RoleCard.css'


function RoleCard(props) {
  return (
    <div>
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