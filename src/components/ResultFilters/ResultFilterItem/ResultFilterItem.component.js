/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import clsx from 'clsx';
import PropTypes from 'prop-types';
import React, { useCallback, useMemo } from 'react';
import './ResultFilterItem.component.scss';

function ResultFilterItemComponent({
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

ResultFilterItemComponent.defaultProps = {
  isActive: false,
  classes: '',
  filter: null,
  onClick: null,
};

ResultFilterItemComponent.propTypes = {
  isActive: PropTypes.bool,
  classes: PropTypes.string,
  filter: PropTypes.shape({
    value: PropTypes.string,
    label: PropTypes.string,
  }),
  onClick: PropTypes.func,
};

export default ResultFilterItemComponent;
