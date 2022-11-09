/** @format */

import { useState } from 'react';
import './App.css';

const Checkbox = ({ isChecked, checkboxText }) => {
	return (
		<div>
			<input
				checked={isChecked}
				type='checkbox'
			/>
			<label>{checkboxText}</label>
		</div>
	);
};

function App() {
	return (
		<div>
			<Checkbox checkboxText='I read the term of the app ' />
			<Checkbox checkboxText='I accept the term of the app' />
			<Checkbox checkboxText='I want to get the weekly news letter' />
			<Checkbox checkboxText='I want to get salse and offers' />
		</div>
	);
}

export default App;
