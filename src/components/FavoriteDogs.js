import React from 'react'
import DogCard from './DogCard'

function FavoriteDogs({favoriteDogs}){
  const favoriteDogCards = favoriteDogs.map(dog => <DogCard key={dog.id} dog={dog.dog}/>)

  return(
    <>
      <h2>Favorite Dogs</h2>
      {favoriteDogCards}
    </>
  )

}

export default FavoriteDogs
