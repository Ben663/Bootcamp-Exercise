
import React from 'react';
import { useState } from 'react';
import Usercomponent from './Usercomponent';
import axios from 'axios';
import { useRef } from 'react';
import Container from './Container';

function UserList() {
	const [userList, setUserList] = useState([]);
	const [searchInput, setSearchInput] = useState('');

	async function getUsers() {
		const response = await axios.get('https://randomuser.me/api/?results=50');
		setUserList((prev) => (prev = response.data.results));
		console.log(response.data.results);
		return response;
	}

	const InputRef = useRef('');

	return (
		<div className='users'>
			<button onClick={getUsers}>get them all</button>

			<input
				ref={InputRef}
				onChange={(e) => {
					setSearchInput(e.target.value);
				}}
				type='text'
				placeholder='search something'
			/>
			<Container search={searchInput}>
				{userList.map((user, idx) => {
					const { dob, email, gender, name, picture } = user;
					return (
						<Usercomponent
							key={name.first + idx}
							dob={dob}
							email={email}
							gender={gender}
							name={name}
							fullname={`${name.first} ${name.last}`}
							picture={picture}
						/>
					);
				})}
			</Container>
		</div>
	);
}

export default UserList;
