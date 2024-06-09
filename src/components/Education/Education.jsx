import '../../styles/ExperienceEducation.scss';
import React from 'react';
import { useTranslation } from 'react-i18next';

const Education = () => {
  const { t } = useTranslation();
  return (
    <div className='exp-edu'>
      <h2>{t('education.title')}</h2>
      <div className='exp-edu-container'>
        <div className='divider'></div>
        <div className='exp-edu-item'>
          <a href='https://sigarra.up.pt/feup/en/CUR_GERAL.CUR_VIEW?pv_curso_id=732' target='_blank'>{t('education.data_2.institution')}</a>
          <div className='block'></div>
          <div className='exp-edu-item-header'>
            <h4>{t('education.data_2.degree')}</h4>
            <time>{t('education.data_2.period')}</time>
          </div>
          <p>{t('education.data_2.description')}</p>
        </div>
        <div className='exp-edu-item'>
          <a href='https://www.esmad.ipp.pt/courses/degree/663' target='_blank'>{t('education.data_1.institution')}</a>
          <div className='block'></div>
          <div className='exp-edu-item-header'>
            <h4>{t('education.data_1.degree')}</h4>
            <time>{t('education.data_1.period')}</time>
          </div>
          <p>{t('education.data_1.description')}</p>
        </div>
      </div>
    </div>
  );
};

export default Education;