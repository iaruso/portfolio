import './Intro.scss';
import React from 'react';
import { useTranslation } from 'react-i18next';

const Intro = () => {
  const { t } = useTranslation();
  return (
    <div className='intro-container'>
      <div className='name-container'>
        <div className='name-content'>
          <div className='name'>{t('intro.name')}</div>
          <div className='border-radius-block'></div>
        </div>
        <div className='empty-block'></div>
      </div>
      <div className='intro-content'>
        <h1>{t('intro.title')}</h1>
        <div className='rip-container'>
          <div className='programmer'><span>{t('intro.tears.programmer')}</span></div>
          <div className='designer'><span>{t('intro.tears.designer')}</span></div>
          <div className='explorer'><span>{t('intro.tears.explorer')}</span></div>
          <div className='gamer'><span>{t('intro.tears.gamer')}</span></div>
          <div className='student'><span>{t('intro.tears.student')}</span></div>
          <div className='hidden'></div>
        </div>
      </div>
    </div>
  );
};

export default Intro;