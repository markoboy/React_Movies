import clsx from 'clsx';
import PropTypes from 'prop-types';
import React, { useMemo } from 'react';
import './Column.scss';

function Column({ children, classes }) {
  const className = useMemo(() => clsx('column', classes), [classes]);

  return <div className={className}>{children}</div>;
}

Column.defaultProps = {
  classes: '',
};

Column.propTypes = {
  classes: PropTypes.string,
};

export default Column;
