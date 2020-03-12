import React from 'react'
import './App.css'
import AddDogForm from './components/AddDogForm'
import AdoptableDogs from './components/AdoptableDogs'
import DogCard from './components/DogCard'
import DogSpec from './components/DogSpec'
import Header from './components/Header'
import SearchBar from './components/SearchBar'
import FavoriteDogs from './components/FavoriteDogs'

const BASE_URL = `https://dogs-backend.herokuapp.com/dogs`

class App extends React.Component{
  state = {
    adoptableDogs:[]
  }

componentDidMount(){
  fetch(BASE_URL)
    .then(response => response.json())
    .then(adoptableDogs => this.setState({adoptableDogs}))
}

render(){
  return(
    <>
    <h1>This is the Dogs App</h1>
    <AddDogForm/>
    <AdoptableDogs/>
    <DogCard/>
    <DogSpec/>
    <FavoriteDogs/>
    <Header/>
    <SearchBar/>
    </>
  )
}



}
export default App
