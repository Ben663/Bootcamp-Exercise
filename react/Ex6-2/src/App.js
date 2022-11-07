import React, {useState} from 'react';
import './App.css';



function App() {
  let [toggle, setToggle] = useState(false);
  const clickHandler = () => {
    
    setToggle((prevState) => !prevState)
  }
  return (
    <div className='App'>
      <div className='App1'>
        <button onClick={clickHandler}>Show / Hide</button>
        <div className = {toggle ? 'Box' : ''}></div>
      </div>
      
    </div>
  );
}

export default App;
