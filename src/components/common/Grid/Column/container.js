import clsx from 'clsx';
import PropTypes from 'prop-types';
import React, { useMemo } from 'react';
import ColumnComponent from './component';

function ColumnContainer({ children, classes }) {
  const className = useMemo(() => clsx('column', classes), [classes]);

  return <ColumnComponent classes={className}>{children}</ColumnComponent>;
}

ColumnContainer.defaultProps = {
  classes: '',
};

ColumnContainer.propTypes = {
  classes: PropTypes.string,
};

export default ColumnContainer;
