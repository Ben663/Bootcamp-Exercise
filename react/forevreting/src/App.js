import React, {useState} from 'react';
import './App.css';



function App() {
  //let [Counter, setCounter] = useState(3);
  let [toggle, setToggle] = useState(false);
  const clickHandler = () => {
    // setCounter(Counter + 1);
    setToggle((prevState) => !prevState)
  }
  return (
    <div className='App'>
      {/* <button onClick={clickHandler}>increment</button> */}
      {/* <h2>{Counter}</h2> */}
      <div className='App1'>
        <button onClick={clickHandler}>Show / Hide</button>
        <div className = {toggle ? 'Box' : ''}></div>
      </div>
      
    </div>
  );
}

export default App;
