import React from 'react';
import { ReactSVG } from 'react-svg';

const Intro = () => {
  return (
    <section id='intro'>
			<div className='introduction'>
				<h1>Hello!</h1>
				<h1>I'm Yaraslau, a creative developer with a keen eye for design and passion in web development.</h1>
			</div>
			<div className='skills'>
				<ReactSVG src='../assets/skills.svg' />
			</div>
		</section>
  );
};

export default Intro;