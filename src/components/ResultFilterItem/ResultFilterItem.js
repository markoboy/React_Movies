/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import clsx from 'clsx';
import PropTypes from 'prop-types';
import React, { useCallback, useMemo } from 'react';
import './ResultFilterItem.scss';

function ResultFilterItem({
  children,
  isActive,
  classes,
  filter,
  onClick,
}) {
  const className = useMemo(() => clsx('result-filter__item', classes, { 'result-filter__item--active': isActive }), [classes, isActive]);

  const handleClick = useCallback(() => (
    onClick && onClick(filter)
  ), [filter]);

  return (
    <li className={className} onClick={handleClick}>
      {children}
    </li>
  );
}

ResultFilterItem.defaultProps = {
  isActive: false,
  classes: '',
  filter: null,
  onClick: null,
};

ResultFilterItem.propTypes = {
  isActive: PropTypes.bool,
  classes: PropTypes.string,
  filter: PropTypes.shape({
    value: PropTypes.string,
    label: PropTypes.string,
  }),
  onClick: PropTypes.func,
};

export default ResultFilterItem;
