import React, { useEffect, useRef, useState } from 'react';
import './App.css';
import getRandomNumber from './services/getRandomNumber';
import ResidentCard from './components/ResidentCard';
import LocationInfo from './components/LocationInfo';
import useFetch from './hooks/useFetch';

function App() {
  const [locationId, setLocationId] = useState(getRandomNumber(126))

  const url = `https://rickandmortyapi.com/api/location/${locationId}`
  const { response: location, getLocation, hasError} = useFetch(url)

  useEffect(() => {
    getLocation()
  }, [locationId])

  const inputId = useRef()

  const handleSubmit = (e) => {
    e.preventDefault()
    setLocationId(inputId.current.value.trim())
  }

  console.log("location", location)
  return (
    <div>
      <img className='image' src="src/components/images/image_logo.jpg" alt="" />
      <h1 className='card__title'>Rick and Morty</h1>
      <form className='card__form' onSubmit={handleSubmit}>
        <input required id='input' placeholder={locationId} ref={inputId} type="number" />
        <button>Search</button>
      </form>
      {hasError ? (
        <section className='card__error'>
        <h1>Hey! it has to be within the numbers 0 and 126</h1>
        </section>
       ) : ( 
          <>
         <section>
          <LocationInfo location={location}/>
         </section>
         <div className='card__container'>
    {location?.residents.map((url) => (
      <ResidentCard key={url} url={url}/>
    ))}      
  </div>
  </>
      )}  
    </div>
  )
}

export default App;
