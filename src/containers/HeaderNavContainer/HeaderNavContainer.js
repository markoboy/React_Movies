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
import React, { useCallback, useContext, useMemo } from 'react';

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
    <a className="color--primary" href="#" onClick={onClick} title="Search movies">
      <FontAwesomeIcon size="lg" icon={faSearch} rotation={90} />
    </a>
  );
}

export default function HeaderNavContainer({ hasBackground, onSearch, hasSearch }) {
  const { modalState, dispatchModalAction } = useContext(ModalContext);

  const actionButtonCallback = useCallback(() => (
    hasSearch ? <HeaderSearchActionButton onClick={onSearch} /> : (
      <HeaderAddActionButton
        onButtonClick={() => dispatchModalAction({
          type: ModalDispatchActions.OPEN,
          payload: {
            formInputs: getModalFormInputs(),
            action: Actions.ADD,
            successMessage: <p>Movie has been added.</p>,
          },
        })}
      />
    )), [hasSearch]);

  return useMemo(
    () => (
      <>
        <HeaderNavComponent
          headerLogo={<BrandLogoComponent />}
          actionButton={actionButtonCallback()}
          hasBackground={hasBackground}
        />
      </>
    ),
    [modalState]
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
