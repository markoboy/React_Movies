import BrandLogoComponent from '@components/BrandLogoComponent/BrandLogoComponent';
import withSection from '@components/HigherOrder/WithSection';
import withWrapper from '@components/HigherOrder/WithWrapper';
import React from 'react';

const BrandLogoComponentWithWrapperSection = withSection(
  withWrapper(BrandLogoComponent),
  { classes: 'background--grey' }
);

export default function FooterContainer() {
  return (
    <footer className="text-align--center">
      <BrandLogoComponentWithWrapperSection />
    </footer>
  );
}
