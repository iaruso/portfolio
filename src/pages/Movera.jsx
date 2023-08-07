import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Link } from 'react-router-dom';

export default function Movera() {
  return (
		<>
			<Navbar main={false}/>
			<div className='work-container' id="work-movera">
				<div className='route-links'>
					<Link to='/'>← Return</Link>
					<Link to='/work/expns'>Expns →</Link>
				</div>
				<img
					srcset="../static/movera-cover-min.webp 768w,
									../static/movera-cover.webp 1024w"
					sizes="(max-width: 768px) 768px, 1024px"
					src="../static/movera-cover.webp"
					alt="Movera Cover"
					className='work-image'
				/>
				<header>
					<h2>Movera</h2>
					<div className='header-links'>
						<a href='https://www.behance.net/gallery/175529941/Movera' target='_blank'>Presentation</a>
					</div>
				</header>
				<article>
					<p>Movera, a fusion of "Move" and "Era", originated as a college initiative to track student mobility and has since evolved into a groundbreaking project designed for users from all walks of life. This revolutionary app offers an integrated map to track your movements, optimize daily activities, compete on leaderboards, and even create your unique character. This application improves your mobility, monitors your progress, and, most importantly, provides fun along the way!</p>
					<p>The main area presents users with an intuitive map to track their movement paths across six different types of mobility: walk, run, stand, sit, bike, and commute. The ability to filter by time, distance, or METs and multi-select mobility types allows users to highlight their path on the map according to their preferences. This dynamic feature gives a comprehensive overview of your daily activities and fosters a sense of achievement as you see your mobility progress over time.</p>
					<img
						srcset="../static/movera-image-1-min.webp 768w,
										../static/movera-image-1.webp 1024w"
						sizes="(max-width: 768px) 768px, 1024px"
						src="../static/movera-image-1.webp"
						alt="Movera Image 1"
						className='work-image'
					/>
					<p>Movera provides essential activity metrics, including calories burned, CO2 saved, and ecological percentage. The ecological percentage represents the portion of non-commute mobility divided by the total, reflecting the user's commitment to eco-friendly transportation choices.</p>
					<p>Engage in friendly competition and community interactions through Movera's monthly leaderboards for distance and METs. Users can view their rankings and explore other user's profiles. Observing their achievements adds a social element to the mobility tracking experience.</p>
					<section>
						<img
							srcset="../static/movera-image-2-min.webp 768w,
											../static/movera-image-2.webp 1024w"
							sizes="(max-width: 768px) 768px, 1024px"
							src="../static/movera-image-2.webp"
							alt="Movera Image 2"
							className='work-image movera-image-2'
						/>
						<img
							srcset="../static/movera-image-3-min.webp 768w,
											../static/movera-image-3.webp 1024w"
							sizes="(max-width: 768px) 768px, 1024px"
							src="../static/movera-image-3.webp"
							alt="Movera Image 3"
							className='work-image'
						/>
					</section>
					<p>Stay motivated and earn experience points to level up your character with daily, weekly, and monthly challenges. The challenge tracker allows you to monitor your progress and view your current status, while monthly challenges present an opportunity to win prestigious medals for exceptional achievements.</p>
					<p>Your profile displays essential information, including your name, age, level, and progress. You can delve deeper into your performance statistics by filtering data based on distance, METs, hours, and medals obtained.</p>
					<section>
						<p>Customize your profile even further by changing your avatar <span>(thanks to UI8 for this awesome )</span>, which helps you identify yourself uniquely within the app. Choose elements like your main color, skin tone, expression, head, eyebrows, clothes and more.</p>
						<img
							srcset="../static/movera-image-4-min.webp 768w,
											../static/movera-image-4.webp 1024w"
							sizes="(max-width: 768px) 768px, 1024px"
							src="../static/movera-image-4.webp"
							alt="Movera Image 4"
							className='work-image'
						/>
					</section>
					<p>Movera ensures a smooth user experience by allowing preferences customization in the settings. Users can easily adjust language and unit system settings, tailoring the app to their individual preferences for seamless usability.</p>
					<hr/>
					<p className='note-text'>Movera is a reimagined version of a college project, thoughtfully enhanced with new elements. This personal project showcases the power of growth and innovation.</p>
					<hr/>
					<div className='tech-n-tools'>
						<div>Figma</div>
						<div>Illustrator</div>
						<div>Photoshop</div>
				</div>
				</article>
			</div>
			<Footer main={false}/>
		</>
  );
}
