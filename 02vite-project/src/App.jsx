import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './Card';
import imges from './imges/david-cerini-Gh1PqlmwmmM-unsplash.jpg';


function App() {
  

  return (
    <>
     
     <Card />
     <div className="img">


       <img src={imges} alt="abc" />   


        
          

     </div>
    </>
  )
}

export default App
