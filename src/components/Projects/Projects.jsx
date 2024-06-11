import './Projects.scss';
import React from 'react';
import { useTranslation } from 'react-i18next';
import ProjectItem from '../ProjectItem/ProjectItem';

const Projects = () => {
  const { t } = useTranslation();
  const theme = localStorage.getItem('theme') || 'light';
  let color = theme === 'dark' ? '121, 121, 121, 0.1' : '250, 250, 250, 0.5';
  let intensity = theme === 'dark' ? '40rem' : '30rem';

  const projects = [
    {
      imageUrlDark: './circuit-rush-dark.svg',
      imageUrlLight: './circuit-rush-light.svg',
      projectName: 'Circuit Rush',
      projectLink: 'https://circuit-rush.vercel.app/',
      githubLink: 'https://github.com/iaruso/circuit-rush',
      description: t('projects.circuit_rush.description'),
      techStack: ['React', 'Three.js', 'MongoDB', 'Express.js', 'Node.js'],
      accessibilityLabel: t('accessibility.source_code'),
      //rgba: '229, 85, 85, 0.1'
      rgba: color
    },
    {
      imageUrlDark: './globus-dark.svg',
      imageUrlLight: './globus-light.svg',
      projectName: 'Globus',
      projectLink: 'https://globus-three-js.vercel.app/',
      githubLink: 'https://github.com/iaruso/globus',
      description: t('projects.globus.description'),
      techStack: ['React', 'Three.js', 'JavaScript', 'CSS'],
      accessibilityLabel: t('accessibility.source_code'),
      //rgba: '96, 96, 96, 0.1'
      rgba: color
    },
    {
      imageUrlDark: './expns-dark.svg',
      imageUrlLight: './expns-light.svg',
      projectName: 'Expns',
      projectLink: 'https://expns.vercel.app/',
      githubLink: 'https://github.com/iaruso/expns',
      description: t('projects.expns.description'),
      techStack: ['React', 'Tailwind', 'MongoDB', 'Express.js', 'Node.js'],
      accessibilityLabel: t('accessibility.source_code'),
      //rgba: '58, 74, 217, 0.1'
      rgba: color
    },
    {
      imageUrlDark: './codio-dark.svg',
      imageUrlLight: './codio-light.svg',
      projectName: 'Cōdio',
      projectLink: 'https://codio-agency.vercel.app/',
      githubLink: 'https://github.com/iaruso/codio',
      description: t('projects.codio.description'),
      techStack: ['React', 'TypeScript', 'CSS'],
      accessibilityLabel: t('accessibility.source_code'),
      rgba: color
    },
    {
      imageUrlDark: './rorushi-dark.svg',
      imageUrlLight: './rorushi-light.svg',
      projectName: 'Rorushi',
      projectLink: 'https://rorushi.vercel.app/',
      githubLink: 'https://github.com/iaruso/rorushi',
      description: t('projects.rorushi.description'),
      techStack: ['React', 'Javascript', 'CSS'],
      accessibilityLabel: t('accessibility.source_code'),
      //rgba: '245, 100, 11, 0.1'
      rgba: color
    },
    {
      imageUrlDark: './movera-dark.svg',
      imageUrlLight: './movera-light.svg',
      projectName: 'Movera',
      projectLink: 'https://iaruso.notion.site/Movera-0c2af3bf483d40438aa77bccf7334ac3',
      githubLink: null,
      description: t('projects.movera.description'),
      techStack: ['Figma', 'Adobe CC'],
      accessibilityLabel: null,
      //rgba: '197, 247, 133, 0.1'
      rgba: color
    }
  ];

  return (
    <section className='projects'>
      <h2>{t('projects.title')}</h2>
      <div className='projects-container'>
        {projects.map((project, index) => (
          <ProjectItem
            key={index}
            theme={theme}
            imageUrlDark={project.imageUrlDark}
            imageUrlLight={project.imageUrlLight}
            projectName={project.projectName}
            projectLink={project.projectLink}
            githubLink={project.githubLink}
            description={project.description}
            techStack={project.techStack}
            accessibilityLabel={project.accessibilityLabel}
            rgba={project.rgba}
            intensity={intensity}
          />
        ))}
      </div>
    </section>
  );
};

export default Projects;
