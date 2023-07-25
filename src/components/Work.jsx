import React from 'react';
import ScrollContainer from "react-indiana-drag-scroll";

const Work = () => {
  return (
    <section id='work'>
			<h2>Selected work →</h2>
			<ScrollContainer className='works'>
				<div className='works-content'>
					<div className='card'></div>
					<div className='card'></div>
					<div className='card'></div>
					<div className='card card-sm'></div>
				</div>
			</ScrollContainer>
		</section>
  );
};

export default Work;