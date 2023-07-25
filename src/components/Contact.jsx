import React from 'react';

const Contact = () => {
  return (
    <section id='contact'>
			<h2>Contact →</h2>
			<div className='interactive-contact'>
				<a href='mailto:iaruso.me@gmail.com?subject=Let%27s%20talk!'>Let's talk!</a>
				<a href='mailto:iaruso.me@gmail.com?subject=Wanna%20collaborate?' className='interactive-text contact-collaborate'>Wanna collaborate?</a>
				<a href='mailto:iaruso.me@gmail.com?subject=Share%20an%20idea.' className='interactive-text contact-idea'>Share an idea.</a>
				<a href='mailto:iaruso.me@gmail.com?subject=Shh...%20it%27s%20private.' className='interactive-text contact-private'>Shh... it's private.</a>
				<a href='mailto:iaruso.me@gmail.com?subject=Job%20offer!' className='interactive-text contact-job'>Job offer!</a>
				<a href='mailto:iaruso.me@gmail.com?subject=Help%20needed.' className='interactive-text contact-help'>Help needed.</a>
			</div>
		</section>
  );
};

export default Contact;