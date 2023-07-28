import React from 'react';
import ScrollContainer from "react-indiana-drag-scroll";
import { Link } from 'react-router-dom';

const Work = () => {
  return (
    <section id='work'>
			<h2>Selected work →</h2>
			<ScrollContainer className='works'>
				<div className='works-content'>
					<Link to="/work/circuit-rush" className='card'>
						<img src='./static/circuit-rush-cover.png'/>
					</Link>
					<Link to="/work/movera" className='card'>
						<img src='./static/movera-cover.png'/>
					</Link>
					<Link to="/work/expns" className='card'>
						<img src='./static/expns-cover.png'/>
					</Link>
					<div className='card'>
						<p>More to come ...</p>
					</div>
				</div>
			</ScrollContainer>
		</section>
  );
};

export default Work;