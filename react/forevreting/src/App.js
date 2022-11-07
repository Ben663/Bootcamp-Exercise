import React, { useState } from 'react';
import './App.css';
import{ data }from './data'
import { getNames, bornBefor1990 } from './utility';
import Names from './Components/Names'
import Card from './Components/Card';

function App() {
	//let [Counter, setCounter] = useState(3);
	// let [toggle, setToggle] = useState(5);
	// const clickHandler = () => {
	// 	setToggle((prevState) => (prevState < 10 ? prevState + 1 : prevState));
	// };
	// const clickHandler1 = () => {
	// 	setToggle((prevState) => (prevState > -10 ? prevState - 1 : prevState));

	// };
  const [names, setNames] = useState(getNames(data));
  const [years, setyears] = useState(bornBefor1990(data));
  

	return (
    <div className='App'>
      <Names names={names} />
      {years.map(year => {
        return <Card person={year}/>
      })}
      
      




			{/* <button onClick={clickHandler}>increment</button> */}
			{/* <h2>{Counter}</h2> */}
			{/* <div className='App1'>
        <button onClick={clickHandler}>Show / Hide</button>
        <div className = {toggle ? 'Box' : ''}></div>
      </div> */}
			{/* <button onClick={clickHandler}>increment</button>
			<button onClick={clickHandler1}>decrement</button>
			<label className={toggle < 0 ? 'red' : toggle === 0 ? 'black' : 'green'}>{toggle}</label> */}
		</div>
	);
}

export default App;
