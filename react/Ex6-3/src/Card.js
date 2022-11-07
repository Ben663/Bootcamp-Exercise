import React from 'react'

function Card({photo , title , description}) {
  return (
    <div className='card'>
        <img alt='' src={photo} className='photo'></img>
        <h1>{title}</h1>
        <p>{description}</p>
        <button>share</button>
        <button>explore</button>
    </div>
  )
}

export default Card