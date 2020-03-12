import React from 'react'
import DogCard from './DogCard'

function AdoptableDogs({adoptableDogs, addFavoriteDog}){
  const adoptableDogCards = adoptableDogs.map(dog => <DogCard key={dog.id} dog={dog} addFavoriteDog={addFavoriteDog} />)

  return(
    <>
    <h2>Adoptable Dogs</h2>
    {adoptableDogCards}
    </>
  )
}

export default AdoptableDogs
