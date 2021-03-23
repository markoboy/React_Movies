import clsx from 'clsx';
import PropTypes from 'prop-types';
import React, { useMemo } from 'react';
import './Row.scss';

function Row({ children, classes }) {
  const className = useMemo(() => clsx('row', classes), [classes]);

  return <div className={className}>{children}</div>;
}

Row.defaultProps = {
  classes: '',
};

Row.propTypes = {
  classes: PropTypes.string,
};

export default Row;
