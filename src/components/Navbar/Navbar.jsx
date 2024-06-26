import './Navbar.scss';
import React, { useEffect } from 'react';
import { Link as ScrollLink } from 'react-scroll';
import { useTranslation } from 'react-i18next';
import Icon from '../icons/Icon';

const Navbar = ({toggleTheme, theme }) => {
  const { t } = useTranslation();

  useEffect(() => {
    const rootElement = document.getElementById('root');
    if (rootElement) {
      rootElement.classList.remove('light', 'dark');
      rootElement.classList.add(theme);
      rootElement.classList.add(`no-transitions`);
      setTimeout(() => {
        rootElement.classList.remove('no-transitions');
      }, 100);
    }
    localStorage.setItem('theme', theme);
  }, [theme]);

  return (
    <header>
      <nav>
        <ScrollLink href='#root' to='root' smooth={true} duration={400} className='title' aria-label='iaruso.me'>
          iaruso.me
        </ScrollLink>
        <ul>
          <li><a href='mailto:iaruso.me@gmail.com' title='Email'><Icon name='Email'/></a></li>
          <li><a href='https://www.linkedin.com/in/iaruso/' title='LinkedIn' target='_blank'><Icon name='LinkedIn'/></a></li>
          <li><a href='https://github.com/iaruso' title='Github' target='_blank'><Icon name='Github'/></a></li>
          <li><button onClick={toggleTheme} aria-label={t('accessibility.toggle_theme')}><Icon name={theme == 'dark' ? 'Dark' : 'Light'}/></button></li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;