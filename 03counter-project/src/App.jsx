import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'


function App() {

  let [counter, setCounter] = useState(0)

  //let counter = 0
 const addvalue = () =>{
  console.log("clicked",counter);
  counter = counter +1;
  setCounter(counter);
 }

 const removevalue = () =>{
  setCounter(counter -1);
 }

  return (
    <>
  <h1>Hey Welcome to Cooding Jarny</h1>
  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo, veritatis quo aut delectus, ut nobis sequi dolore error voluptates natus incidunt laborum velit ullam ea maxime quos praesentium! Nisi, aperiam?</p>


  <br></br>
  <h3>Counter value:{counter}</h3>


  <button
  onClick={addvalue}>Add Value{counter}</button>
  <br></br>
  <button
  onClick={removevalue}>Remove Value{counter}</button>
  <br></br>

   <button>Footer{counter}</button>
    </>
  )
}

export default App
