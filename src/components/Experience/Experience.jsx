import '../../styles/ExperienceEducation.scss';
import React from 'react';
import { useTranslation } from 'react-i18next';
import Icon from '../icons/Icon';

const Experience = () => {
  const { t } = useTranslation();
  return (
    <div className='exp-edu'>
      <h2>{t('experience.title')}</h2>
      <div className='exp-edu-container'>
        <div className='divider'></div>
        <div className='exp-edu-item'>
          <a href='https://www.ceiia.com/' target='_blank'>{t('experience.data_3.company')}<Icon name='Link' /></a>
          <div className='block'></div>
          <div className='exp-edu-item-header'>
            <p className='title'>{t('experience.data_3.position')}</p>
            <time>{t('experience.data_3.period')}</time>
          </div>
          <p className='description'>{t('experience.data_3.description')}</p>
        </div>
        <div className='exp-edu-item'>
          <a href='https://strongstep.pt/en/' target='_blank'>{t('experience.data_2.company')}<Icon name='Link' /></a>
          <div className='block'></div>
          <div className='exp-edu-item-header'>
            <p className='title'>{t('experience.data_2.position')}</p>
            <time>{t('experience.data_2.period')}</time>
          </div>
          <p className='description'>{t('experience.data_2.description')}</p>
          <div className='exp-edu-item-header'>
            <p className='title'>{t('experience.data_1.position')}</p>
            <time>{t('experience.data_1.period')}</time>
          </div>
          <p className='description'>{t('experience.data_1.description')}</p>
        </div>
      </div>
    </div>
  );
};

export default Experience;