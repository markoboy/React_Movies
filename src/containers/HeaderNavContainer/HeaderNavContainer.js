/* eslint-disable react/jsx-indent */
/* eslint-disable jsx-a11y/anchor-is-valid */
import BrandLogoComponent from '@components/BrandLogoComponent/BrandLogoComponent';
import ButtonComponent from '@components/Forms/ButtonComponent/ButtonComponent';
import HeaderNavComponent from '@components/HeaderNavComponent/HeaderNavComponent';
import { faPlus, faSearch } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { ModalDispatchActions } from '@hooks/UseModalState';
import { Actions, ModalContext } from '@services/ModalContext';
import getModalFormInputs from '@utils/getModalFormInputs';
import PropTypes from 'prop-types';
import React, { useContext, useMemo } from 'react';

function HeaderAddActionButton({ onButtonClick }) {
  return (
    <ButtonComponent
      classes="btn--secondary btn--with-icon"
      onButtonClick={onButtonClick}
    >
      <FontAwesomeIcon size="xs" icon={faPlus} />
      Add Movie
    </ButtonComponent>
  );
}

function HeaderSearchActionButton({ onClick }) {
  return (
    <a
      className="color--primary"
      href="#"
      onClick={onClick}
      title="Search movies"
    >
      <FontAwesomeIcon size="lg" icon={faSearch} rotation={90} />
    </a>
  );
}

export default function HeaderNavContainer({
  hasBackground,
  onSearch,
  hasSearch,
}) {
  const { dispatchModalAction } = useContext(ModalContext);

  const memoizedActionButton = useMemo(() => (
    hasSearch ? (
      <HeaderSearchActionButton onClick={onSearch} />
    ) : (
        <HeaderAddActionButton
          onButtonClick={() => dispatchModalAction({
            type: ModalDispatchActions.OPEN,
            payload: {
              formInputs: getModalFormInputs(),
              action: Actions.ADD,
            },
          })}
        />
    )
  ), [hasSearch]);

  return useMemo(
    () => (
      <>
        <HeaderNavComponent
          headerLogo={<BrandLogoComponent />}
          actionButton={memoizedActionButton}
          hasBackground={hasBackground}
        />
      </>
    ),
    [hasSearch, hasBackground]
  );
}

HeaderNavContainer.defaultProps = {
  hasBackground: false,
  hasSearch: false,
};

HeaderNavContainer.propTypes = {
  hasBackground: PropTypes.bool,
  hasSearch: PropTypes.bool,
  onSearch: PropTypes.func.isRequired,
};
