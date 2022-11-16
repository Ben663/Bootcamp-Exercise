import React ,{ useState } from 'react';

import './App.css';

function App() {
	const [taskArr, setTaskArr] = useState([]);
	const [inputVal, setInputVal] = useState('');

	const handleInput = ({ target: { value } }) => {
		setInputVal(value);
	};
		// create
	const handleClick = () => {
		setTaskArr((prev) => [...prev, { value: inputVal, done: false }]);
		setInputVal('');
	};
	// update
	const handleUpdate = (index) => {
		setTaskArr((prev) => {
			return prev.map((task, mapIndex) => {
				if (mapIndex !== index) {
					return task;
				} else {
					task.done = !task.done;
					return task;
				}
			})
		})
	};
	//delete
	const handleDelete = (index) => {
		setTaskArr((prevState) => 
			prevState.filter((task, mapInput) => {
			return mapInput !== index
			})
		)
	};
	

	return (
		<div>
			<h1>TOD's</h1>
			<h3>Local Storege CRDU app</h3>
			<input
				value={inputVal}
				onChange={handleInput}
			/>
			<button onClick={handleClick}>add Task</button>
			{/* read */}
			{taskArr.map((task, mapIndex) => (
				<div key={task.value + mapIndex}>
					<h2
						onClick={() => {
							handleUpdate(mapIndex)
						}}>
						{task.value} -- {task.done ? 'V' : 'X'}
					</h2>
					<button onClick={()=>{handleDelete(mapIndex)}}>Delete</button>
				</div>
			))}
		</div>
	);
	
}

export default App;
