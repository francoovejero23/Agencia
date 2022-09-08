
export default function Card({avatar, name, work, description}) {
    return(
      <>
        <img className='card_avatar' src={avatar} alt="" />
        <h3 className='card-name'>{name}</h3>
        <h4 className='card-skills'>Lorem | ipsum.</h4>
        <h4 className='card-description'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Amet, molestiae. Natus recusandae alias tempora</h4>
      </>
    )
}
