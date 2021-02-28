import BannerContainer from '@containers/BannerContainer/BannerContainer';
import ResultContainer from '@containers/ResultContainer/ResultContainer';
import React from 'react';

export default function SiteContainer() {
  return (
    <main className="site-container__main flex flex--column">
      <BannerContainer />
      <ResultContainer />
    </main>
  );
}
