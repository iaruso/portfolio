import './App.scss'
import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import Navbar from './components/Navbar/Navbar'
import Intro from './components/Intro/Intro'
import Projects from './components/Projects/Projects'
import Info from './components/Info/Info'

function App() {
  const { t, i18n } = useTranslation()

  const handleLanguageChange = (event) => {
    const selectedLanguage = event.target.value;
    i18n.changeLanguage(selectedLanguage);
  };

  return (
    <>
      <Navbar />
      <main className='app'>
        <Intro />
        <div className='app-content'>
          <Projects />
          <Info />
        </div>
      </main>
      <select onChange={handleLanguageChange}>
          <option value="en-US">EN</option>
          <option value="pt-PT">PT</option>
          <option value="ru-RU">RU</option>
          <option value="es-ES">ES</option>
        </select>
    </>
  )
}

export default App
