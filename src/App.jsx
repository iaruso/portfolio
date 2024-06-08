import './App.scss'
import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import Navbar from './components/Navbar/Navbar'

function App() {
  const { t, i18n } = useTranslation()

  const handleLanguageChange = (event) => {
    const selectedLanguage = event.target.value;
    i18n.changeLanguage(selectedLanguage);
  };

  return (
    <>
      <Navbar />
      <div className='app'>
        <select onChange={handleLanguageChange}>
          <option value="en-US">EN</option>
          <option value="pt-PT">PT</option>
          <option value="ru-RU">RU</option>
          <option value="es-ES">ES</option>
        </select>
        <div className='test'>
        </div>
      </div>
    </>
  )
}

export default App
