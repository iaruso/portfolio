import './Info.scss';
import React from 'react';
import Experience from '../Experience/Experience';
import Education from '../Education/Education';

const Info = () => {
  return (
    <section className='info'>
      <Experience />
      <Education />
    </section>
  );
};

export default Info;