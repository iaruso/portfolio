import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Intro from './components/Intro';
import Work from './components/Work';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="app">
			<Navbar />
			<Intro />
			<Work />
			<About />
			<Contact />
			<Footer />
    </div>
  );
}

export default App;
