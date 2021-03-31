/* eslint-disable jsx-a11y/anchor-is-valid */
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { memo } from 'react';
import { Link } from 'react-router-dom';

function HeaderSearchActionButtonComponent() {
  return (
    <Link to="/" className="color--primary" title="Search movies">
      <FontAwesomeIcon size="lg" icon={faSearch} rotation={90} />
    </Link>
  );
}

const HeaderSearchActionButton = memo(HeaderSearchActionButtonComponent);

export default HeaderSearchActionButton;
