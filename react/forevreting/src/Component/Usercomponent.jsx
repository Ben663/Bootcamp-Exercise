
import React from 'react';

function Usercomponent({ name, dob, gender, email, picture }) {
	return (
		<div className='card'
			data-name={name.first + ' ' + name.last}>
			<h2>{`${name.title}  ${name.last}`}</h2>
			<img
				src={picture.large}
				alt='img'></img>
			<div className='personalInfo'>
				Personal Info: <div>{`Gender:${gender}`}</div>
				<div>{`Age: ${dob.age}`}</div>
				<div>{`Email: ${email}`}</div>
				<div>{`Full Name:${name.first} ${name.last}`}</div>
			</div>
		</div>
	);
}

export default Usercomponent;
