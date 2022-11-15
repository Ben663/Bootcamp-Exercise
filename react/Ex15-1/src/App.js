import { Routes, Route, Link, useParams } from 'react-router-dom';
import React from 'react';
import About from './About';
import Home from './Home';
import Product from './Product';


function E404() {
	return <h1>404</h1>;
}

function App() {
	return (
		<div>
			App NavBar
			<Routes>
				<Route
					path='/'
					element={<Home />}
				/>
				<Route
					path='/about'
					element={<About />}
				/>
				<Route
					path='/Product'
					element={<Product />}
				/>
				<Route
					path='*'
					element={<E404 />}
				/>
			</Routes>
		</div>
	);
}

export default App;
