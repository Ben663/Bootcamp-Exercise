/** @format */

import React, { useState } from 'react';
import './App.css';
import { data } from './data';
import { getNames, bornBefor1990 } from './utility';
import Names from './Components/Names';
import Card from './Components/Card';

function App() {
	const [names, setNames] = useState(getNames(data));
	const [years, setyears] = useState(bornBefor1990(data));

	return (
		<div className='App'>
			<Names names={names} />
			{years.map((year) => {
				return <Card person={year} />;
			})}
		</div>
	);
}

export default App;
