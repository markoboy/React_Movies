import Button from '@components/common/Forms/Button';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import PropTypes from 'prop-types';
import React from 'react';

function HeaderAddActionButtonComponent({ onClick }) {
  return (
    <Button classes="btn--secondary btn--with-icon" onClick={onClick}>
      <FontAwesomeIcon size="xs" icon={faPlus} />
      Add Movie
    </Button>
  );
}

HeaderAddActionButtonComponent.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default HeaderAddActionButtonComponent;
