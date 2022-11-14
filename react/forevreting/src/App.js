

import './App.css';
import UserList from './components/UserList';
function App() {
	return (
		<div className='App'>
			<header className='App-header'>
				<img
					className='App-logo'
					alt='logo'
				/>
				<UserList></UserList>
			</header>
		</div>
	);
}

export default App;
