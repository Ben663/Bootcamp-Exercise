
import { Routes, Route,Navigate,useParams } from 'react-router-dom';
import React from 'react';
import Home from './Home';
import About from './About';
import Product from './Product';
import './App.css';

function E404() {
	return <h1>404</h1>;
}

function App() {
	return (
		<div className='App'>	
			<About />
				<Routes>
					<Route
						exact
						path='/About'
						element={<Navigate to='/Home' />}
					/>
					<Route
						path='/Home'
						element={<Home />}
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
	)
}

export default App;
