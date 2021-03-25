import BrandLogo from '@components/common/BrandLogo';
import withSection from '@components/hocs/WithSection';
import withWrapper from '@components/hocs/WithWrapper';
import React, { memo } from 'react';

const BrandLogoComponentWithWrapperSection = withSection(
  withWrapper(BrandLogo),
  { classes: 'background--grey' }
);

function SiteFooterContainer() {
  return (
    <footer className="text-align--center">
      <BrandLogoComponentWithWrapperSection />
    </footer>
  );
}

export default memo(SiteFooterContainer);
