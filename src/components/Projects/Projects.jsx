import './Projects.scss';
import React from 'react';
import { useTranslation } from 'react-i18next';
import Icon from '../icons/Icon';

const Projects = () => {
  const { t } = useTranslation();
  const theme = localStorage.getItem('theme') || 'light';
  return (
    <section className='projects'>
      <h2>{t('projects.title')}</h2>
      <div className='projects-container'>
        <div className='project-item'>
          <div className='project-item-header'>
            <img src={theme == 'dark' ? './circuit-rush-dark.svg' : './circuit-rush-light.svg'} alt='Circuit Rush'></img>
            <a className='project-name' href='https://circuit-rush.vercel.app/' target='_blank'>Circuit Rush<Icon name='Link' /></a>
            <a href='https://github.com/iaruso/circuit-rush' target='_blank' aria-label={t('accessibility.source_code')}><Icon name='Github' /></a>
          </div>
          <p>{t('projects.circuit_rush.description')}</p>
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
            <img src={theme == 'dark' ? './globus-dark.svg' : './globus-light.svg'} alt='Globus'></img>
            <a className='project-name' href='https://globus-three-js.vercel.app/' target='_blank'>Globus<Icon name='Link' /></a>
            <a href='https://github.com/iaruso/globus' target='_blank' aria-label={t('accessibility.source_code')}><Icon name='Github' /></a>
          </div>
          <p>{t('projects.globus.description')}</p>
          <div className='project-item-tech'>
            <span>React</span>
            <span>Three.js</span>
            <span>JavaScript</span>
            <span>CSS</span>
          </div>
        </div>
        <div className='project-item'>
          <div className='project-item-header'>
            <img src={theme == 'dark' ? './expns-dark.svg' : './expns-light.svg'} alt='Expns'></img>
            <a className='project-name' href='https://expns.vercel.app/' target='_blank'>Expns<Icon name='Link' /></a>
            <a href='https://github.com/iaruso/expns' target='_blank' aria-label={t('accessibility.source_code')}><Icon name='Github' /></a>
          </div>
          <p>{t('projects.expns.description')}</p>
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
            <img src={theme == 'dark' ? './codio-dark.svg' : './codio-light.svg'} alt='Cōdio'></img>
            <a className='project-name' href='https://codio-agency.vercel.app/' target='_blank'>Cōdio<Icon name='Link' /></a>
            <a href='https://github.com/iaruso/codio' target='_blank' aria-label={t('accessibility.source_code')}><Icon name='Github' /></a>
          </div>
          <p>{t('projects.codio.description')}</p>
          <div className='project-item-tech'>
            <span>React</span>
            <span>TypesScript</span>
            <span>CSS</span>
          </div>
        </div>
        <div className='project-item'>
          <div className='project-item-header'>
            <img src={theme == 'dark' ? './rorushi-dark.svg' : './rorushi-light.svg'} alt='Rorushi'></img>
            <a className='project-name' href='https://rorushi.vercel.app/' target='_blank'>Rorushi<Icon name='Link' /></a>
            <a href='https://github.com/iaruso/rorushi' target='_blank' aria-label={t('accessibility.source_code')}><Icon name='Github' /></a>
          </div>
          <p>{t('projects.rorushi.description')}</p>
          <div className='project-item-tech'>
            <span>React</span>
            <span>Javascript</span>
            <span>CSS</span>
          </div>
        </div>
        <div className='project-item'>
          <div className='project-item-header'>
            <img src={theme == 'dark' ? './movera-dark.svg' : './movera-light.svg'} alt='Movera'></img>
            <a className='project-name' href='https://iaruso.notion.site/Movera-0c2af3bf483d40438aa77bccf7334ac3' target='_blank'>Movera<Icon name='Link' /></a>
          </div>
          <p>{t('projects.movera.description')}</p>
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