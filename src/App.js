import FooterContainer from '@containers/FooterContainer/FooterContainer';
import HeaderNavContainer from '@containers/HeaderNavContainer/HeaderNavContainer';
import SiteContainer from '@containers/SiteContainer/SiteContainer';
import React from 'react';

export default function App() {
  return (
    <>
      <HeaderNavContainer />
      <SiteContainer />
      <FooterContainer />
    </>
  );
}
