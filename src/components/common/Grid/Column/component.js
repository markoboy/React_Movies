import clsx from 'clsx';
import PropTypes from 'prop-types';
import React, { useMemo } from 'react';
import './styles.scss';

function ColumnComponent({ children, classes }) {
  const className = useMemo(() => clsx('column', classes), [classes]);

  return <div className={className}>{children}</div>;
}

ColumnComponent.defaultProps = {
  classes: '',
};

ColumnComponent.propTypes = {
  classes: PropTypes.string,
};

export default ColumnComponent;
