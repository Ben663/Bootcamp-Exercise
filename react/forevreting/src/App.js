import React, { useState, useEffect, useReducer } from 'react';


import './App.css';
const initialState = [
	{ name: 'bob', song: 'one love', id: 1, like: 0 },
	{ name: 'miki', song: 'love', id: 2, like: 10 },
	{ name: 'robert', song: 'one love', id: 3, like: 20 },
	
];

const artistsReducer = (artistState, action) => {
	switch (action.type) {
		case 'add_artist':
			return [...artistState, action.payload];
		case 'add_like':
			const id = action.payload;
			return artistState.map((artist) => {
				if (id === artist.id) {
					artist.like++;
					return artist;
				}
				return artist;
			});
		default:
			return artistState;
	}
}
function App() {
	const [artists, dispatchArtists] = useReducer(artistsReducer, initialState);
	const [taskArr, setTaskArr] = useState(JSON.parse(localStorage.taskArr));
	const [inputVal, setInputVal] = useState('');

	// useEffect(() => {
	// 	if (localStorage.taskArr) {
	// 		const formJL = JSON.parse(localStorage.taskArr)
	// 		setTaskArr(formJL);
	// 	}
	// }, [])
	useEffect(() => {
		const dataToLS = JSON.stringify(taskArr);
		localStorage.setItem('taskArr', dataToLS);
	}, [taskArr]);

	const handleInput = ({ target: { value } }) => {
		setInputVal(value);
	};
		// create
	const handleClick = () => {
		//! bad
		// const tempState = [...taskArr, { value: inputVal, done: false }] 
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
			<button
				onClick={() => {
					dispatchArtists({
						type: 'add_artist',
						payload: { name: 'jim', song: 'love', id: 4, like: 44 },
					});
				}}>
				add artists
			</button>
			<button
				onClick={() => {
					dispatchArtists({
						type: 'add_like',
						payload: 2,
					});
				}}>
				add Like
			</button>
			{console.table(artists)}
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
							handleUpdate(mapIndex);
						}}>
						{task.value} -- {task.done ? 'V' : 'X'}
					</h2>
					<button
						onClick={() => {
							handleDelete(mapIndex);
						}}>
						Delete
					</button>
				</div>
			))}
		</div>
	);
	
}

export default App;
