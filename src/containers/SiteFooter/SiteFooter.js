import BrandLogo from '@components/BrandLogo';
import withSection from '@components/HigherOrder/WithSection';
import withWrapper from '@components/HigherOrder/WithWrapper';
import React, { memo } from 'react';

const BrandLogoComponentWithWrapperSection = withSection(
  withWrapper(BrandLogo),
  { classes: 'background--grey' }
);

function SiteFooter() {
  return (
    <footer className="text-align--center">
      <BrandLogoComponentWithWrapperSection />
    </footer>
  );
}

export default memo(SiteFooter);
