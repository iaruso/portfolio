import './Technologies.scss';
import React, { useRef, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import Icon from '../icons/Icon';

const Technologies = () => {
  const { t } = useTranslation();
  const techItemsRef = useRef(null);

  useEffect(() => {
    const setItemWidth = () => {
      if (techItemsRef.current) {
        const firstItem = techItemsRef.current.children[0];
        if (firstItem) {
          const firstItemRect = firstItem.getBoundingClientRect();
          const firstItemWidth = firstItemRect.width;
          for (let i = 0; i < techItemsRef.current.children.length; i++) {
            techItemsRef.current.children[i].style.maxWidth = `${firstItemWidth}px`;
          }
        }
      }
    };

    setItemWidth();
    window.addEventListener('resize', setItemWidth);
    return () => window.removeEventListener('resize', setItemWidth);
  }, []);
  
  return (
    <div  className='technologies'>
      <h2>{t('technologies.title')}</h2>
      <div className='technologies-container' ref={techItemsRef}>
        <div className='technologies-item react' title='React'><Icon name='ReactLogo'/></div>
        <div className='technologies-item rails' title='Rails'><Icon name='Rails'/></div>
        <div className='technologies-item angular' title='Angular'><Icon name='Angular'/></div>
        <div className='technologies-item javascript' title='JavaScript'><Icon name='JavaScript'/></div>
        <div className='technologies-item typescript' title='TypeScript'><Icon name='TypeScript'/></div>
        <div className='technologies-item jquery' title='jQuery'><Icon name='jQuery'/></div>
        <div className='technologies-item gsap' title='GSAP'><Icon name='GSAP'/></div>
        <div className='technologies-item three-js' title='Three.js'><Icon name='Three'/></div>
        <div className='technologies-item mongodb' title='MongoDB'><Icon name='MongoDB'/></div>
        <div className='technologies-item express-js' title='Express.js'><Icon name='Express'/></div>
        <div className='technologies-item node-js' title='Node.js'><Icon name='Node'/></div>
        <div className='technologies-item git' title='Git'><Icon name='Git'/></div>
        <div className='technologies-item vite' title='Vite'><Icon name='Vite'/></div>
        <div className='technologies-item tailwind-css' title='TailwindCSS'><Icon name='TailwindCSS'/></div>
        <div className='technologies-item sass' title='Sass'><Icon name='Sass'/></div>
        <div className='technologies-item vscode' title='Visual Studio Code'><Icon name='VSCode'/></div>
        <div className='technologies-item sublime' title='Sublime Text'><Icon name='Sublime'/></div>
        <div className='technologies-item notion' title='Notion'><Icon name='Notion'/></div>
        <div className='technologies-item figma' title='Figma'><Icon name='Figma'/></div>
        <div className='technologies-item adobe' title='Adobe Creative Cloud'><Icon name='Adobe'/></div>
      </div>
    </div>
  );
};

export default Technologies;