import './App.scss'
import { useState, useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import { Helmet, HelmetProvider } from 'react-helmet-async'
import gsap from 'gsap'
import Navbar from './components/Navbar/Navbar'
import Intro from './components/Intro/Intro'
import Projects from './components/Projects/Projects'
import Info from './components/Info/Info'
import Footer from './components/Footer.jsx/Footer'

function App() {
  const { t, i18n } = useTranslation();
  const [theme, setTheme] = useState(localStorage.getItem('theme') || 'light');

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    localStorage.setItem('theme', newTheme);
    setTheme(newTheme);
  };

  const handleLanguageChange = (event) => {
    const selectedLanguage = event.target.value;
    i18n.changeLanguage(selectedLanguage);
  };

  useEffect(() => {
    gsap.fromTo('.opacity-box', { opacity: 2}, { opacity: 0, duration: 0.3 });
  }, [i18n.language, theme]);

  return (
    <>
      <HelmetProvider>
        <Helmet>
          <html lang={i18n.language.split('-')[0]} data-color-scheme={theme}></html>
          <link rel='icon' type='image/svg+xml' href={theme == 'light' ? '/favicon-light.svg' : '/favicon-dark.svg'} />
          <meta name='theme-color' content={theme === 'light' ? '#ffffff' : '#121212'} />
          <title>{t('app')}</title>
          <meta name='description' content={t('description')} />
        </Helmet>
      </HelmetProvider>
      <div className='opacity-box'></div>
      <Navbar toggleTheme={toggleTheme} theme={theme || ''} />
      <main className='app'>
        <Intro />
        <div className='app-content'>
          <Projects />
          <Info />
        </div>
      </main>
      <Footer handleLanguageChange={handleLanguageChange} />
    </>
  )
}

export default App
