import React from 'react'

function DogCard({dog, addFavoriteDog}){

  const handleClick = (dog) => {
        addFavoriteDog(dog)
    }

  return(
    <div className='dog-card' onClick={handleClick}>
      <img src={dog.image}/>
      <div className='dog-specs'>
        <h4>{dog.name}</h4>
        <p>{dog.breed}</p>
      </div>
    </div>
  )
}
export default DogCard
