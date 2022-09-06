import React from 'react'

export default function Card({avatar, name, work, description}) {
    return(
      <>
        <img className='card_avatar' src={avatar} alt="" />
        <h3>{name}</h3>
        <h4>Lorem | ipsum.</h4>
        
      </>
    )
}
