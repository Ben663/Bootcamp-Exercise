import React, {useState} from 'react';
import './App.css';


function App() {
  let [toggle, setToggle] = useState(5);
  const clickHandler = () => {
    setToggle((prevState) => prevState < 10 ? prevState + 1 : prevState)
  }
  const clickHandler1 = () => {
    setToggle((prevState) =>  prevState > -10 ? prevState - 1 : prevState)
  }
  
  return (
    <div className='App'>
      <button onClick={clickHandler}>increment</button>
      <button onClick={clickHandler1}>decrement</button>
      <label className={toggle < 0 ? 'red' : (toggle === 0 ? 'black' : 'green')} >{toggle}</label>
     
    </div>
  );
}

export default App;
