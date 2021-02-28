import BrandLogoComponent from '@components/BrandLogoComponent/BrandLogoComponent';
import ButtonComponent from '@components/ButtonComponent/ButtonComponent';
import HeaderNavComponent from '@components/HeaderNavComponent/HeaderNavComponent';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

export default function HeaderNavContainer() {
  return (
    <HeaderNavComponent
      headerLogo={<BrandLogoComponent />}
      actionButton={(
        <ButtonComponent classes="btn--secondary btn--with-icon">
          <FontAwesomeIcon size="xs" icon={faPlus} />
          Add Movie
        </ButtonComponent>
      )}
    />
  );
}
