import './Intro.scss';
import React from 'react';
import { useTranslation } from 'react-i18next';

const Intro = () => {
  const { t } = useTranslation();
  return (
    <section className='intro'>
      <h1>{t('intro.title')}</h1>
      <h2>{t('intro.subtitle')}</h2>
    </section>
  );
};

export default Intro;