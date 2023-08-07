import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Link } from 'react-router-dom';

export default function Expns() {
  return (
		<>
			<Navbar main={false}/>
			<div className='work-container' id="work-expns">
				<div className='route-links'>
					<Link to='/'>← Return</Link>
					<Link to='/work/circuit-rush'>Circuit Rush →</Link>
				</div>
				<img
					srcset="../static/expns-cover-min.webp 768w,
									../static/expns-cover.webp 1024w"
					sizes="(max-width: 768px) 768px, 1024px"
					src="../static/expns-cover.webp"
					alt="Expns Cover"
					className='work-image'
				/>
				<header>
					<h2>Expns</h2>
					<div className='header-links'>
						<a href='https://github.com/iaruso/expns' target='_blank'>Code</a>
					</div>
				</header>
				<article>
					<p>Expns allows users to take full control of their finances. Set your preferred language and currency for a personalized experience, managing expenses and incomes with ease across three available currencies. Track your latest transactions, analyze monthly expenses and incomes by category, and gain insights from detailed pie chart statistics based on category and timestamp. <span>(In development)</span></p>
					<hr/>
					<p className='note-text'>Please be aware that this application is still in development and may have some technical and visual bugs. As the sole developer of this project, I am committed to fine-tuning the interface and functionality to create an efficient and user-friendly experience.</p>
					<hr/>
					<div className='tech-n-tools'>
						<div>MERN</div>
						<div>Heroku</div>	
						<div>Auth0</div>
				</div>
				</article>
			</div>
			<Footer main={false}/>
		</>
  );
}
