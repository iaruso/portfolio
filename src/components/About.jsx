import React from 'react';
import { ReactSVG } from 'react-svg';

const About = () => {
  return (
    <section id='about'>
			<h2>About me →</h2>
			<div className='about-me'>
				<div className='details'>
						<div className='details-card experience-card'>Experience</div>
						<div className='details-card experience-time-card'>More than 1 year</div>
					<a href='https://strongstep.pt/en/' className='details-card current-job-card'>UI/UX Developer at Strongstep</a>
					<div className='details-section'>
						<div className='details-card education-card'>Education</div>
						<div className='details-card education-time-card'>3 years and more</div>
					</div>
					<div className='details-section'>
						<div className='details-card achievements-card'>Achievements</div>
						<div className='details-card achievements-count-card'>At least 2</div>
					</div>
					<a href='https://twitter.com/bruno_simon/status/1678404617539821570' target='_blank' className='details-card wall-of-fame-card'>Wall of Fame - Three.js Journey</a>
					<a href='https://threejs-journey.com/certificate/view/28725' target='_blank' className='details-card threejs-certificate-card'>Three.js Journey Certificate</a>
					<a className='download-cv' href='../static/Yaraslau_Maksimchyk_CV.pdf' download>
						CV
						<ReactSVG className='download-cv-svg' src='./static/arrow-draw.svg'/>
						<p className='download-cv-text'>More details there</p>
					</a>
				</div>
				<div className='me'>
					<p>Hey there! <span>(again)</span> I was born in Grodno, Belarus, but I've spent <span>(so far)</span> my entire life here in Porto, Portugal, where I embrace its culture, food, and weather. Movies, games, and family time hold a special place in my heart.</p><p> I'm into web development and design, with a special bond with CSS while Figma helps me prototype ideas.</p>
				</div>
			</div>
		</section>
  );
};

export default About;