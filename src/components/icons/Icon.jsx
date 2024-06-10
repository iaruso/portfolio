import React, { lazy, Suspense } from 'react';

const Icon = ({ name }) => {
  const IconComponent = lazy(() => import(`../../components/icons/${name}.jsx`).then(module => ({ default: module.default })));

  return (
    <Suspense fallback={<div></div>}>
      <IconComponent />
    </Suspense>
  );
};

export default Icon;
