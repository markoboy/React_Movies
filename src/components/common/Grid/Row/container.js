import clsx from 'clsx';
import PropTypes from 'prop-types';
import React, { useMemo } from 'react';
import RowComponent from './component';
import './styles.scss';

function RowContainer({ children, classes }) {
  const className = useMemo(() => clsx('row', classes), [classes]);

  return <RowComponent classes={className}>{children}</RowComponent>;
}

RowContainer.defaultProps = {
  classes: '',
};

RowContainer.propTypes = {
  classes: PropTypes.string,
};

export default RowContainer;
