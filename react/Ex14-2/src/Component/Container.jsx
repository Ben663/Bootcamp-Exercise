
import React from 'react';

function Container({ children, search }) {
	function filterResults(children) {
		const filteredChildren = children.filter((item) => {
			return item.props.fullname.toLowerCase().includes(search.toLowerCase());
		});
		return filteredChildren;
	}
	return (
		<div className='container'>
			{search ? filterResults(children) : children}
		</div>
	);
}

export default Container;
