import React from 'react'
import DogCard from './DogCard'

function AdoptableDogs({adoptableDogs}){
  const adoptableDogCards = adoptableDogs.map(dog => <DogCard key={dog.id} dog={dog}/>)

  return(
    <>
    <h2>Adoptable Dogs</h2>
    {adoptableDogCards}
    </>
  )
}

export default AdoptableDogs
