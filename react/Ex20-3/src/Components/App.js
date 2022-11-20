
import styled from 'styled-components';
import React from 'react';
import Todo from './Todo';
import './App.css';

const Box = styled.div`
	background-color: #282c34;
	min-height: 100vh;
	display: flex;
	align-items: center;
	flex-direction: column;
	justify-content: center;
	font-size: calc(10px + 2vmin);
	color: white;
`;

function App() {
	return (
		<div>
			<Box>
				<Todo />
			</Box>
		</div>
	);
}
export default App;
