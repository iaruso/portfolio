import React from 'react';

const Footer = ({main}) => {
  return (
    <footer className={`${ main ? 'dark' : 'light fixed'}`}>
			<p>© 2023</p>
      <ul>
				<div>
					<li><a href='https://github.com/iaruso' target='_blank'>Github</a></li>
					<li><a href='https://www.be.net/iaruso' target='_blank'>Behance</a></li>
					<li><a href='https://www.linkedin.com/in/iaruso/' target='_blank'>LinkedIn</a></li>
				</div>
				<li><a href='../static/Yaraslau_Maksimchyk_CV.pdf' download>CV</a></li>
      </ul>
    </footer>
  );
};

export default Footer;