import React from 'react'

function DogCard({dog}){
  return(
    <div className='dog-card'>
      <img src={dog.image}/>
      <div className='dog-specs'>
        <h4>{dog.name}</h4>
        <p>{dog.breed}</p>
      </div>
    </div>
  )
}
export default DogCard
