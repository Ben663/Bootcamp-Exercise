import { Link } from 'react-router-dom';
const About =() =>{
    return (
			<header>
				<nav>
					<ul>
						<li>
							<Link to='/Home'>Home</Link>
						</li>
						<li>
							<Link to='/Product'>Product</Link>
						</li>
					</ul>
				</nav>
			</header>
		);
};

export default About;