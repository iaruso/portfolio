import React from 'react';
import { ReactSVG } from 'react-svg';

const About = () => {
  return (
    <section id='about'>
			<h2>About me →</h2>
			<div className='about-me'>
				<div className='details'>
					<div className='details-section'>
						<div className='details-card experience-card'>Experience</div>
						<div className='details-card experience-time-card'>More than 1 year</div>
					</div>
					<div className='details-card current-job-card'>UI/UX Developer at Strongstep</div>
					<div className='details-section'>
						<div className='details-card education-card'>Education</div>
						<div className='details-card studies-time-card'>3 years and more</div>
					</div>
					<div className='details-section'>
						<div className='details-card achievements-card'>Achievements</div>
						<div className='details-card achievements-count-card'>At least 2</div>
					</div>
					<div className='details-card achievement-game-card'>Wall of Fame - Three.js Journey</div>
					<div className='details-card achievement-threejs-card'>Three.js Journey Certificate</div>
					<a className='download-cv' href='#'>
						CV
						<ReactSVG className='download-cv-svg' src='../assets/arrow-draw.svg'/>
						<p className='download-cv-text'>More details there</p>
					</a>
				</div>
				<div className='me'>
					<p>Hey there! <span>(again)</span> I was born in Grodno, Belarus, but I've spent <span>(so far)</span> my entire life here in Porto, Portugal, where I embrace its culture, food, and weather. I love movies, games, and family time. I'm into web development and design, with a special bond with CSS while Figma helps me prototype ideas.</p>
				</div>
			</div>
		</section>
  );
};

export default About;