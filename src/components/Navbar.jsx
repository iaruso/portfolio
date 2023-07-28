import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = ({main}) => {
  return (
    <nav id='navbar' className={`${ main ? '' : 'fixed'}`}>
			<Link to='/' className='logo'>Yaraslau</Link>
			{ main ? 
				<ul>
					<li><a href="#work">Work</a></li>
					<li><a href="#about">About</a></li>
					<li><a href="#contact">Contact</a></li>
				</ul>
				: 
				null
			}
    </nav>
  );
};

export default Navbar;