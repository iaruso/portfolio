import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Link } from 'react-router-dom';

export default function CircuitRush() {
  return (
		<>
			<Navbar main={false}/>
			<div className='work-container' id="work-circuit-rush">
				<div className='route-links'>
					<Link to='/'>← Return</Link>
					<Link to='/work/movera'>Movera →</Link>
				</div>
					<img src='../static/circuit-rush-cover.png' alt='Circuit Rush Cover' className='work-image'></img>
				<header>
					<h2>Circuit Rush</h2>
					<div className='header-links'>
						<a href='https://www.behance.net/gallery/173450225/Circuit-Rush' target='_blank'>Presentation</a>
						<a href='https://github.com/iaruso/circuit-rush' target='_blank'>Code</a>
						<a href='https://circuit-rush.com/' target='_blank' className='header-link-circuit-rush'>Play</a>
					</div>
				</header>
				<article>
					<p>Circuit Rush is an adrenaline-fueled racing game created using React Three Fiber <span>(Three.js in React)</span>, and powered by the Cannon physics engine. Showcase your expert racing skills as you navigate through a captivating minimalist world, setting new records with every heart-pounding race.</p>
					<section>
						<div className='section-block'>
							<p>The game features a seamless and interactive control system. Experience the thrill of being in control of your vehicle and conquer every twist and turn.</p>
							<p>With a visually stunning and minimalist  design, the carefully placed checkpoints and waypoints keep you engaged at every moment.</p>
						</div>
						<img src='../static/circuit-rush-image-1.png' alt='Circuit Rush Image 1' className='work-image'/>

					</section>
					<p>The integration of the Cannon physics engine make the experience a highly realistic driving sensation. Feel the impact of every acceleration, turn, collision, and auto gear system making the racing experience truly immersive.</p>
					<section>
						<img src='../static/circuit-rush-image-2.png' alt='Circuit Rush Image 2' className='work-image circuit-rush-img-2'/>
						<p>Stay informed during the race with a user-friendly interface. Keep track of your vehicle's speed with the speedometer and monitor your lap count to know which lap you're on. The gear indicator keeps you aware of the auto gear system's responsiveness.</p>
					</section>
					<p>The game world is filled with cubes <span>(306 to be precise)</span> that react dynamically upon collision. As you hit these cubes, they light up in a vibrant display of color, adding an interactive and captivating element to the gameplay.</p>
					<img src='../static/circuit-rush-image-3.png' alt='Circuit Rush Image 3' className='work-image'/>
					<p>Challenge yourself to beat your own records in the time trial mode. Complete three laps in the shortest time possible and strive to set new personal bests <span>(my record is 44 seconds)</span>.</p>
					<hr/>
					<p className='note-text'>Circuit Rush is an exciting game still in progress, with ambitious plans ahead. Stay tuned for upcoming updates, including mobile support, enhanced performance, and a visually stunning dark mode.</p>
					<hr/>
					<div className='tech-n-tools'>
						<div>React Three Fiber</div>
						<div>Cannon</div>	
						<div>Blender</div>
				</div>
				</article>
			</div>
			<Footer main={false}/>
		</>
  );
}
