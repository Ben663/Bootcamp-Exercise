import { useState, useEffect } from 'react';
import axios from 'axios';
//========================================================================
function UserList() {
	const [userList, setUserList] = useState([]);
	const [searchInput, setSearchInput] = useState('');

	// ============================================================
	// let FuckingListObject = "";
	async function setTheList() {
		const { data } = await axios.get('https://randomuser.me/api/?results=150');
		console.log('data inside setList', data.results);
		setUserList(data.results);
	}



	return (
		<div style={{ width: '90vw' }}>
			<button onClick={setTheFuckingList}>Get FUCKING users!</button>
			<br />
			<input
				type='text'
				name=''
				id=''
				onChange={(e) => {
					console.log(e.target.value);
					setSearchInput(e.target.value);
				}}
			/>
			<div
				style={{
					display: 'grid',
					gridTemplateColumns: `repeat(auto-fit, minmax(220px, 1fr))`,
					gap: `1rem`,
					marginBottom: '1rem',
				}}>
				{userList &&
					userList.map((fuckingUser, i) => {
						return (
							<div className='card'>
								<p key={i}>
									{`${fuckingUser.name.title} ${fuckingUser.name.first} ${fuckingUser.name.last}`}
								</p>
								<p>{`Age: ${fuckingUser.dob.age}`}</p>
								<img
									alt='pic'
									src={fuckingUser.picture.large}></img>
							</div>
						);
					})}
			</div>
		</div>
	);
}
//========================================================================
export default UserList;
