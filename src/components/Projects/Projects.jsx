import './Projects.scss';
import React from 'react';
import { useTranslation } from 'react-i18next';
import Icon from '../icons/Icon';

const Projects = () => {
  const { t } = useTranslation();
  const theme = localStorage.getItem('theme') || 'light';
  return (
    <section className='projects'>
      <h2>Projects</h2>
      <div className='projects-container'>
        <div className='project-item'>
          <div className='project-item-header'>
            <img src={theme == 'dark' ? './circuit-rush-dark.svg' : './circuit-rush-light.svg'}></img>
            <a className='project-name' href='https://circuit-rush.vercel.app/' target='_blank'>Circuit Rush<Icon name='Link' /></a>
            <a href='https://github.com/iaruso/circuit-rush' target='_blank'><Icon name='Github' /></a>
          </div>
          <p>An adrenaline-fueled minimalist racing game.</p>
          <div className='project-item-tech'>
            <span>React</span>
            <span>Three.js</span>
            <span>MongoDB</span>
            <span>Express.js</span>
            <span>Node.js</span>
          </div>
        </div>
        <div className='project-item'>
          <div className='project-item-header'>
            <img src={theme == 'dark' ? './globus-dark.svg' : './globus-light.svg'}></img>
            <a className='project-name' href='https://globus-three-js.vercel.app/' target='_blank'>Globus<Icon name='Link' /></a>
            <a href='https://github.com/iaruso/globus' target='_blank'><Icon name='Github' /></a>
          </div>
          <p>A unique globe for exploring global data.</p>
          <div className='project-item-tech'>
            <span>React</span>
            <span>Three.js</span>
            <span>JavaScript</span>
            <span>CSS</span>
          </div>
        </div>
        <div className='project-item'>
          <div className='project-item-header'>
            <img src={theme == 'dark' ? './expns-dark.svg' : './expns-light.svg'}></img>
            <a className='project-name' href='https://expns.vercel.app/' target='_blank'>expns<Icon name='Link' /></a>
            <a href='https://github.com/iaruso/expns' target='_blank'><Icon name='Github' /></a>
          </div>
          <p>Financial management, simplified.</p>
          <div className='project-item-tech'>
            <span>React</span>
            <span>Tailwind</span>
            <span>MongoDB</span>
            <span>Express.js</span>
            <span>Node.js</span>
          </div>
        </div>
        <div className='project-item'>
          <div className='project-item-header'>
            <img src={theme == 'dark' ? './codio-dark.svg' : './codio-light.svg'}></img>
            <a className='project-name' href='https://codio-agency.vercel.app/' target='_blank'>cōdio<Icon name='Link' /></a>
            <a href='https://github.com/iaruso/codio' target='_blank'><Icon name='Github' /></a>
          </div>
          <p>A web design agency website.</p>
          <div className='project-item-tech'>
            <span>React</span>
            <span>TypesScript</span>
            <span>CSS</span>
          </div>
        </div>
        <div className='project-item'>
          <div className='project-item-header'>
            <img src={theme == 'dark' ? './rorushi-dark.svg' : './rorushi-light.svg'}></img>
            <a className='project-name' href='https://rorushi.vercel.app/' target='_blank'>Rorushi<Icon name='Link' /></a>
            <a href='https://github.com/iaruso/rorushi' target='_blank'><Icon name='Github' /></a>
          </div>
          <p>Just a sushi restaurant website.</p>
          <div className='project-item-tech'>
            <span>React</span>
            <span>Javascript</span>
            <span>CSS</span>
          </div>
        </div>
        <div className='project-item'>
          <div className='project-item-header'>
            <img src={theme == 'dark' ? './movera-dark.svg' : './movera-light.svg'}></img>
            <a className='project-name' target='_blank'>Movera<Icon name='Link' /></a>
          </div>
          <p>Mobile UX/UI overhaul.</p>
          <div className='project-item-tech'>
            <span>Figma</span>
            <span>Adobe CC</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;