/* eslint-disable jsx-a11y/anchor-is-valid */
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import PropTypes from 'prop-types';
import React, { memo } from 'react';

function HeaderSearchActionButtonContainer({ onClick }) {
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

HeaderSearchActionButtonContainer.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default memo(HeaderSearchActionButtonContainer);
