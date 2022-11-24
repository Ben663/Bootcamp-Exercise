
import styled from 'styled-components';
import React from 'react';
// import Head from './Head';
// import Input from './Input';
// import Todo from './Todo';
import Clock from './Clock';
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
			<Clock />
			</Box>
			{/* <Box>
				<Todo />
			</Box> */}
			{/* <Input ></Input> */}
			{/* <Head>
				<h3>hello</h3>
			</Head> */}
		</div>
	);
}
export default App;
