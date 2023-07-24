import React from 'react';

const Navbar = () => {
  return (
    <nav id='navbar'>
			<a href="#navbar" className="logo">Yaraslau</a>
      <ul>
        <li><a href="#work">Work</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
    </nav>
  );
};

export default Navbar;