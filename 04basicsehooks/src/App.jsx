import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  let [counter, setCounter] = useState(0)

  let box = 0;
  let next = () =>{
counter= counter +1;
setCounter(counter);
// console.log("clicked",counter)
  }

  let back = () =>{
    counter= counter -1;
    setCounter(counter);
  }


  return (
    <>
      
      {/* <div className="container">
        <div className="bax">
          1
        </div>
      </div> */}

      <h4>{counter}</h4>
        <button onClick={next}>Next</button>
     
        <button onClick={back}>Back</button>
    </>
  )
}

export default App
