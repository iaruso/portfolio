import React from 'react';

const About = () => {
  return (
    <div id='about'>
			<div className='me'>
				<p>Hey there, I'm Yaraslau, a creative developer and design enthusiast, hailing from Grodno, Belarus 🇧🇾, but swept off to Portugal 🇵🇹 by my adventurous parents when I was just a baby 👶🏻. Ever since then, Porto has been my beloved home, where I've immersed myself in its vibrant culture 🏛️, delicious food 🍲, and pleasant climate 🌤️️.</p>
				<br></br>
				<p>In my downtime, you'll find me enjoying the magic of movies 🎬, diving into the virtual worlds of games 🎮, and cherishing precious moments with my loved ones ❤️. But hey, my passions don't stop there! I'm all about continuous growth, and I'm deeply engrossed in learning the ropes of web development 🧑🏻‍💻 and design 🧑🏻‍🎨.</p>
				<br></br>
				<p>Now, when it comes to work, I like to think I have a special bond with CSS <span>(yes, it's definitely programming)</span>. There's something oddly satisfying about bending those styles to create stunning visuals and seamless experiences. And here's a little secret – I often start by sketching out my ideas in Figma, because, well, who doesn't love a good prototype?</p>
			</div>
			<div className='details'>
				<div className='experience details-info'>
					<h3>Experience</h3>
					<h4>Strongstep</h4>
					<div className='header-content'>
						<h5>UI/UX Developer</h5>
						<h5>September 2022 - Present</h5>
					</div>
					<p>Focusing on developing a design system in code for a project management platform to ensure consistency and efficiency in UI development. Actively collaborating with the team to implement the design system, aiming to achieve improved workflows and a streamlined user experience.</p>
					<div className='header-content'>
						<h5>Intern</h5>
						<h5>March 2022 - June 2022</h5>
					</div>
					<p>Conceived and developed user interfaces for the portal of a project management platform, with a focus on enhancing visual appeal and improving the user experience. Implemented captivating animations to showcase features, ensuring a seamless design-to-development process.</p>
				</div>
				<div className='education details-info'>
					<h3>Education</h3>
					<h4>Faculty of Engineering - University of Porto</h4>
					<div className='header-content'>
						<h5>Multimedia (MSc)</h5>
						<h5>September 2023 - Present</h5>
					</div>
					<p className='mb-4'>Passionate about multimedia and interactive design, on a quest to learn and innovate, exploring new dimensions.</p>
					<h4>School of Media Arts and Design - Polytechnic Institute of Porto</h4>
					<div className='header-content'>
						<h5>Web Technologies and Information Systems (BSc)</h5>
						<h5>October 2019 - July 2022</h5>
					</div>
					<p>Strong foundation in programming, prototyping, multimedia, and web design, with practical experience in the full product development process. Developed technical and creative skills to craft engaging web applications and multimedia content.</p>
				</div>
				<div className='achievements details-info'>
					<h3>Achievements</h3>
					<h4>Wall of Fame - Three.js Journey</h4>
					<div className='header-content'>
						<h5>Circuit Rush</h5>
						<h5>July 2023</h5>
					</div>
					<p className='mb-4'>Recognized on the Wall of Fame, this lap time trial racing game showcases my proficiency and creativity using Three.js.</p>
					<h4>Three.js Journey</h4>
					<div className='header-content'>
						<h5>Certificate of completion</h5>
						<h5>May 2023</h5>
					</div>
					<p>Certified in Three.js, an advanced JavaScript library for creating 3D graphics, animations in web browsers and craft immersive visual experiences.</p>
				</div>
			</div>
		</div>
  );
};

export default About;