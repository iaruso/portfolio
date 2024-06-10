import './Info.scss';
import React from 'react';
import Experience from '../Experience/Experience';
import Education from '../Education/Education';
import Technologies from '../Technologies/Technologies';

const Info = () => {
  return (
    <section className='info'>
      <Experience />
      <Education />
      <Technologies />
    </section>
  );
};

export default Info;