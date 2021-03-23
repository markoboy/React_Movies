import Button from '@components/Forms/Button';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import PropTypes from 'prop-types';
import React, { memo } from 'react';

function HeaderAddActionButton({ onClick }) {
  return (
    <Button
      classes="btn--secondary btn--with-icon"
      onClick={onClick}
    >
      <FontAwesomeIcon size="xs" icon={faPlus} />
      Add Movie
    </Button>
  );
}

HeaderAddActionButton.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default memo(HeaderAddActionButton);
