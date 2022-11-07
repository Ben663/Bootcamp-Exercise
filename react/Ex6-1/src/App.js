
import React, { useState } from 'react';
import './App.css';

function App() {
	let [Counter, setCounter] = useState(3);
	const clickHandler = () => {
		setCounter(Counter + 1);
	};
	return (
		<div className='App'>
			<button onClick={clickHandler}>increment</button>
			<h2>{Counter}</h2>
		</div>
	);
}

export default App;
