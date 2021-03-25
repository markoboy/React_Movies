import clsx from 'clsx';
import PropTypes from 'prop-types';
import React, { useMemo } from 'react';
import './styles.scss';

function RowComponent({ children, classes }) {
  const className = useMemo(() => clsx('row', classes), [classes]);

  return <div className={className}>{children}</div>;
}

RowComponent.defaultProps = {
  classes: '',
};

RowComponent.propTypes = {
  classes: PropTypes.string,
};

export default RowComponent;
