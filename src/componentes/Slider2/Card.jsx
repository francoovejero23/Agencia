import React from 'react'

export default function Card({avatar, name, work, description}) {
    return(
      <>
        <img className='card_avatar' src={avatar} alt="" />
        <h3>{name}</h3>
        <h4>Lorem | ipsum.</h4>
        <span>
         Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officia enim, dolores veniam natus doloribus quis maiores tempore
        </span>
      </>
    )
}
