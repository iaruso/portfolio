import React, { useRef } from 'react';
import gsap from 'gsap';
import Icon from '../icons/Icon';

const ProjectItem = ({ theme, imageUrlDark, imageUrlLight, projectName, projectLink, githubLink, description, techStack, accessibilityLabel }) => {
  const bgRef = useRef(null);

  const handleMouseMove = (e) => {
    if (e.pointerType === 'mouse' || e.pointerType === '') {
      const rect = e.currentTarget.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      gsap.to(bgRef.current, {
        opacity: 1,
        background: `radial-gradient(40rem circle at ${x}px ${y}px, rgba(96, 96, 96, 0.1), transparent 66%)`,
        duration: 0.3,
      });
    }
  };

  const handleMouseLeave = (e) => {
    if (e.pointerType === 'mouse' || e.pointerType === '') {
      gsap.to(bgRef.current, {
        opacity: 0,
        background: 'radial-gradient(40rem circle at 0px 0px, rgba(96, 96, 96, 0.1), transparent 66%)',
        duration: 0.3,
      });
    }
  };

  return (
    <div
      className='project-item'
      onPointerMove={handleMouseMove}
      onPointerLeave={handleMouseLeave}
    >
      <div
        className='project-item-bg'
        ref={bgRef}
        style={{
          opacity: 0,
          background: 'radial-gradient(40rem circle at 0px 0px, rgba(96, 96, 96, 0.1), transparent 66%)',
        }}
      ></div>
      <div className='project-item-header'>
        <img src={theme === 'dark' ? imageUrlDark : imageUrlLight} alt={projectName}></img>
        <a className='project-name' href={projectLink} target='_blank' rel='noopener noreferrer'>
          {projectName}<Icon name='Link' />
        </a>
        {githubLink && (
          <a href={githubLink} target='_blank' rel='noopener noreferrer' aria-label={accessibilityLabel}>
            <Icon name='Github' />
          </a>
        )}
      </div>
      <p>{description}</p>
      <div className='project-item-tech'>
        {techStack.map((tech, index) => (
          <span key={index}>{tech}</span>
        ))}
      </div>
    </div>
  );
};

export default ProjectItem;

