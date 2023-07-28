import React from 'react';
import Navbar from '../components/Navbar';
import Intro from '../components/Intro';
import Work from '../components/Work';
import About from '../components/About';
import Contact from '../components/Contact';
import Footer from '../components/Footer';

export default function Main() {
  return (
    <>
			<Navbar main={true}/>
			<Intro />
			<Work />
			<About />
			<Contact />
			<Footer main={true}/>
    </>
  );
}
