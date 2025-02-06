import './Footer.scss';
import React, { useState, useRef, useEffect } from 'react';
import { useTranslation } from 'react-i18next';

const Footer = ({ handleLanguageChange }) => {
  const { t, i18n } = useTranslation();
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  const languages = [
    { code: 'en', label: 'translate.options.english' },
    { code: 'pt', label: 'translate.options.portuguese' },
    { code: 'ru', label: 'translate.options.russian' }
  ];

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const handleSelectChange = (code) => {
    const event = { target: { value: code } };
    handleLanguageChange(event);
    setIsDropdownOpen(false);
  };

  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setIsDropdownOpen(false);
    }
  };

  useEffect(() => {
    if (isDropdownOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
    }
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isDropdownOpen]);

  return (
    <footer>
      <p>© 2024</p>
      <div className="language-select" ref={dropdownRef}>
        <span className="selected-language" onClick={toggleDropdown}>
          {t('translate.current')}
        </span>
        {isDropdownOpen && (
          <div className="language-list">
            {languages.map((language) => (
              <div
                key={language.code}
                className={`language-option ${i18n.language === language.code ? 'active' : ''}`}
                onClick={() => handleSelectChange(language.code)}
              >
                {t(language.label)}
              </div>
            ))}
          </div>
        )}
      </div>
    </footer>
  );
};

export default Footer;
